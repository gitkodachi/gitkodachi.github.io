---
title: "Tutorial Membuat Sistem Notifikasi dengan Redis Pub/Sub di Golang"
date: 2023-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/cover/go-redis-pub-sub.png"
image: "/images/cover/go-redis-pub-sub.png"
kategori: ["web"]
topik: ["Golang", "Go", "Redis"]
series: Go
show_tutorial_list: false
---

Sistem notifikasi cukup penting untuk menginformasikan berbagai kegiatan atau pengumuman kepada user, seperti rilis produk baru, pesan dari seseorang, dan lain - lain.

Namun, dalam pembuatan nya terkadang terasa menyulitkan bagi developer. Karena harus memikirkan bagaimana user menerima notifikasi secara real-time dan sinkron.

Tapi, kali ini kita akan membuatnya dengan cukup mudah dengan menggunakan fitur Pub/Sub dari Redis.

Mari kita mulai!

## Step 1 - Persiapan dan Setup Project

Mari kita siapkan dari 0, project-nya gak bakal banyak dependency tentunya.

### Membuat project baru
Pertama, buat folder bernama pubsub-go atau bebas terserah anda Buka Terminal atau CMD, lalu ketik perintah ini:
```bash
mkdir pubsub-go
```

Setelah itu, masuk ke folder tersebut dengan cd dan lakukan inisialisasi project Golang. Ketik perintah ini:
```go
go mod init pub-sub-go
```

Perintah ini akan membuat file baru dengan nama `go.mod` dan `go.sum` yang merupakan file untuk menyimpan data project dan dependency yang dibutuhkan.

### Install dependency yang dibutuhkan
```bash
go get -u github.com/gofiber/fiber/v2
go get -u github.com/gofiber/template/html/v2
go get -u github.com/redis/go-redis/v9
go get -u github.com/valyala/fasthttp
```

### Membuat folder dan file
Buat folder dan file seperti berikut:

{{< image 
  src="/images/content/tutorial/go/struktur-folder-project.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

## Step 2 - Setup Redis

Kali ini kita kan menggunakan Docker sebagai tempat untuk menginstall Redis, tapi jika tidak mau menggunakan Docker anda bisa menginstall langsung ke Sistem Operasi anda.

- [Install Redis di Linux](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-linux/)

- [Install Redis di Windows](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/)

- [Install Redis di MacOS](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/)

Oke, kita lanjut dengan membuat file baru di root direktori dengan nama `docker-compose.yml` dan isi dengan kode berikut:

```go
version: "3.9"


services:
 redis:
   image: redis
   container_name: pubsubgo-redis
   ports:
     - 6379:6379
   volumes:
     - ./_docker-data/redis:/data
```

Ini adalah konfigurasi untuk menjalankan service Redis dengan Docker compose. Volume nya sengaja di taruh pada direktori `_docker-data` (terdapat underscore pada awal penamaan) untuk menghindari direktori nya terdeteksi sebagai bagian dari project Golang.

{{< image 
  src="/images/content/tutorial/go/file-docker-compose.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah membuat `docker-compose.yml` , berikutnya jalankan service Docker dengan perintah
```bash
docker-compose up -d
```

Sekarang kita bisa mengakses Redis pada port `6379`

## Step 3 - Menyambungkan aplikasi dengan Redis
Buka file `configs/redis.go`, kemudian isi dengan kode berikut:

```go
package configs


import (
 "context"
 "github.com/redis/go-redis/v9"
)

const (
 REDIS_CHANNEL_NOTIFICATION = `notification`
)

var RDS *redis.Client
var RDS_CTX context.Context

func InitRedisClient() {
 RDS_CTX = context.Background()
 RDS = redis.NewClient(&redis.Options{
   Addr: `localhost:6379`,
   Password: ``,
   DB: 0,
 })
}
```

Kode di atas berfungsi untuk mengkoneksikan Redis pada host/port `localhost:6379` dan pada database nomor 0, kemudian koneksi tersebut disimpan pada variabel `var RDS *redis.Client`.

Kalau sudah, lanjut kita tes koneksinya dengan memanggil fungsi tersebut di `main.go`.

```go
package main

import (
 "fmt"
 "pub-sub-go/configs"
)


func main() {
 configs.InitRedisClient()

 err := configs.RDS.Ping(configs.RDS_CTX).Err()
 if err != nil {
   fmt.Println(`failed to connect redis`)
   panic(err)
 } else {
   fmt.Println(`connect to redis successfully !`)
 }
}
```

Kemudian jalankan dengan perintah berikut:

```go
go run main.go
```

Jika muncul pesan connect to redis successfully !, maka aplikasi berhasil terhubung ke Redis.

## Step 4 - Membuat controller

Kita akan membuat 2 route/endpoint yang mana 1 route untuk menampilkan halaman web, dan 1 nya lagi untuk menerima notifikasi secara real-time dengan metode Server-Sent Event.

Kedua endpoint yang kita buat akan mengimplementasikan fitur Pub/Sub pada Redis.

Tulis kode berikut pada file `main.go`

```go
package main

import (
 "log"
 "pub-sub-go/configs"
 "pub-sub-go/controller"

 "github.com/gofiber/fiber/v2"
 "github.com/gofiber/template/html/v2"
)


func main() {
 configs.InitRedisClient()


 err := configs.RDS.Ping(configs.RDS_CTX).Err()
 if err != nil {
   log.Println(`failed to connect redis`)
   panic(err)
 }


 engine := html.New(`./views`, `.html`)
 app := fiber.New(fiber.Config{
   Views: engine,
 })


 app.Listen(`:8080`)
}
```

Pada variable `engine := html.New`(`./views`, `.html`) berguna untuk mengkonfigurasi direktori dan ekstensi file untuk me-render halaman web. Pada kasus ini kita gunakan direktori ./views dan ekstensi .html.

Lalu, apa itu Pub/Sub ?

Pub/Sub, singkatan dari “Publish/Subscribe”, merupakan pola dalam pemrograman yang memungkinkan pengiriman pesan dari satu komponen aplikasi ke satu atau lebih komponen lain tanpa keduanya terhubung langsung atau memiliki ketergantungan satu sama lain.

Pub/Sub biasanya sering digunakan pada notifikasi, aplikasi chat, dan lain sebagainya.

### Pub/Sub di Redis

Redis mengimplementasikan pola Pub/Sub melalui sistem pesan yang sederhana dan efisien antar client. Di Redis, client - client dapat “publish” pesan ke saluran/channel yang bernama, sementara client lain dapat “subscribe” channel tersebut untuk menerima pesan.

Ketika sebuah pesan di publish ke channel, Redis akan mengirimkan pesan tersebut ke semua client yang “subscribe” ke channel tersebut. [^1]

Jadi, sudah paham kan apa itu Pub/Sub.

Sekarang mari kita lanjutkan, tulis kode berikut pada file `controller/home.go`

```go
package controller

import (
 "fmt"
 "log"
 "pub-sub-go/configs"

 "github.com/gofiber/fiber/v2"
)

func HomePage(c *fiber.Ctx) error {
 message := fmt.Sprintf("User dengan IP %v mengakses website", c.IP())
  err := configs.RDS.Publish(
   configs.RDS_CTX,
   configs.REDIS_CHANNEL_NOTIFICATION,
   message,
 ).Err()


 if err != nil {
   log.Println(`Error:`, err)
 }


 return c.Render(`index`, fiber.Map{})
}
```

Kode di atas akan mem-publish sebuah pesan ke channel bernama `notifikasi` kemudian me-render halaman web pada file `index.html`. Bila diperhatikan, cukup menulis nama file nya saja (`index`) tanpa menulis ekstensi-nya karena sudah kita konfigurasi pada file `main.go`.

Balik ke file main.go, Panggil fungsi di atas untuk dijadikan handler/controller pada endpoint `/:`

```go
app := fiber.New(fiber.Config{
   Views: engine,
})

app.Get(`/`, controller.HomePage)
```

Lanjut ke file `controller/notification.go`, tulis kode berikut:

```go
package controller

import (
 "bufio"
 "fmt"
 "log"
 "pub-sub-go/configs"


 "github.com/gofiber/fiber/v2"
 "github.com/valyala/fasthttp"
)


func Notification(c *fiber.Ctx) error {
 c.Set("Content-Type", "text/event-stream")
 c.Set("Cache-Control", "no-cache")
 c.Set("Connection", "keep-alive")
 c.Set("Transfer-Encoding", "chunked")


 c.Context().SetBodyStreamWriter(fasthttp.StreamWriter(func(w *bufio.Writer) {
   pubSub := configs.RDS.Subscribe(configs.RDS_CTX, configs.REDIS_CHANNEL_NOTIFICATION)
   defer pubSub.Close()


   for {
     msg, err := pubSub.ReceiveMessage(configs.RDS_CTX)
     if err != nil {
       log.Println(`pubSub.ReceiveMessage(CTX)`, err)
     } else {
       log.Println(`message:`, msg.Payload)
     }
      
     fmt.Fprintf(w, "data: %s\n\n", msg.Payload)


     err = w.Flush()
     if err != nil {
       fmt.Printf("Error while flushing: %v. Closing http connection.\n", err)
       break
     }
   }
 }))


 return nil
}
```

Kode di atas berfungsi untuk mengirimkan pesan yang didapat dari men-subscribe ke channel bernama notifikasi secara terus menerus atau streaming, dengan metode Server-Sent Event.

Jadi, apa itu Server-Sent Event?

Server-Sent event (SSE) adalah sebuah teknologi web yang memungkinkan server untuk mengirimkan data secara asynchronous kepada client melalui protokol HTTP. SSE dirancang khusus untuk memfasilitasi komunikasi satu arah dari server ke client, yang bukan merupakan permintaan cepat dari klien.

Pada controller di atas, SSE ditandai dengan pengaturan header dengan memanggil fungsi `c.Set("Content-Type", "text/event-stream"), dan c.Context().SetBodyStreamWriter(...).`

Lanjut ke file `main.go`, kita panggil controller di atas untuk digunakan pada endpoint `/notifikasi`.

```go
app := fiber.New(fiber.Config{
   Views: engine,
})

app.Get(`/`, controller.HomePage)
app.Get(`/notification`, controller.Notification)
```

Sip, controller untuk “publish” dan “subscribe” sudah jadi.

## Step 5 - Membuat tampilan halaman web
Kita akan membuat tampilan yang sederhana saja, yang penting bisa menampilkan notifikasi.

Tulis kode berikut pada file `views/index.html`:
```html
<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>{{ .title }}</title>
</head>
<body>
 <h1>Notifikasi</h1>
 <div id="result">
  
 </div>


 <script>
   if (typeof(EventSource) !== "undefined") {
     const source = new EventSource("/notification");
     source.onmessage = function(event) {
       document.getElementById("result").innerHTML += `<p style="margin: 0">` + event.data + `</p>`;
     };
   } else {
     document.getElementById("result").innerHTML = "Maaf, browser anda tidak mendukung SSE.";
   }
 </script>
</body>
</html>
```

Syntax `{{ .title }}` akan me-render nilai dari key title dari object yg kita buat pada controller dari file `controller/home.go`.

Kemudian di bagian script nya kita menginisialisasikan source dari Event (SSE) yang merujuk ke endpoint `/notification`.

Bisa kita lihat pada baris kode ini:
```go
const source = new EventSource("/notification");
```

Kemudian kita bisa buat fungsi untuk handle event `onmessage` pada object `source`.
```go
source.onmessage = function(event){ ... }
```

## Step 6 - Testing aplikasi
Jika sudah, selanjutnya mari kita jalankan aplikasinya dengan perintah
```go
go run main.go
```

Kemudian buka 2 browser ke alamat `localhost:8000`.
{{< image 
  src="/images/content/tutorial/go/hasil-testing-aplikasi.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Saya mencoba membuka browser yang sebelah kiri dahulu kemudian yang kanan. Jadinya yang kiri saja yang menerima notifikasi karena sistem “publish” nya terjadi saat si user mengakses halaman utama web tersebut.

## Apa Selanjutnya?
Sejauh ini kita sudah berhasil membuat sistem notifikasi dengan fitur Pub/Sub di Redis dengan bahasa pemrograman Golang.

Kita sudah memahami:

- Apa itu Server-Sent Event
- Apa itu Pub/Sub

Sekarang anda bisa bebas mengkreasikan pembuatan notifikasi sesuka anda. Untuk melihat source code-nya, bisa anda buka link berikut:

[https://github.com/ahmadhabibi14/pubsub-go](https://github.com/ahmadhabibi14/pubsub-go)