---
title: "Tutorial Laravel 11 untuk Pemula: Langsung Bisa bikin CRUD!"
date: 2023-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/cover/laravel-11.png"
image: "/images/cover/laravel-11.png"
kategori: ["web"]
topik: ["Laravel", "PHP", "MySQL"]
series: laravel
show_tutorial_list: true
---

## Pengenalan Laravel

**Laravel** adalah sebuah framework PHP yang open source dan dirancang untuk memudahkan pengembangan aplikasi web. Framework ini mengikuti pola arsitektur Model-View-Controller (MVC) dan menyediakan berbagai fitur serta alat yang berguna untuk mempercepat proses pengembangan web.

**Laravel** sangat populer di kalangan pengembang web karena dokumentasinya yang lengkap, komunitas yang aktif, dan ekosistem paket yang kaya yang memungkinkan pengembang untuk memperluas fungsi dasar framework sesuai kebutuhan.

**Framework**: adalah kumpulan program berupa file pustaka (libraries) atau class-class yang mendukung dalam pengembangan aplikasi secara terstruktur dan independen terhadap aplikasi. Software Framework adalah sebuah desain yang bisa digunakan berulang-ulang (re-usable design) untuk sebuah sistem atau sub sistem piranti lunak.

Manfaat framework:

- Mempercepat proses pembuatan aplikasi baik itu aplikasi berbasis desktop, mobile ataupun web.
- Membantu para developer dalam perencanaan, pembuatan dan pemeliharaan sebuah aplikasi.
- Aplikasi yang dihasilkan menjadi lebih stabil dan handal, hal ini dikarenakan Framework sudah melalui proses uji baik itu stabilitas dan juga keandalannya.
- Memudahkan para developer dalam membaca code program dan lebih mudah dalam mencari bugs.
- Memiliki tingkat keamanan yang lebih, hal ini dikarenakan Framework telah mengantisipasi cela – cela keamanan yang mungkin timbul.
- Mempermudah developer dalam mendokumentasikan aplikasi-aplikasi yang sedang dibangun.

Arsitektur Laravel didasarkan pada pola arsitektur Model-View-Controller (MVC) yang memisahkan logika aplikasi menjadi tiga komponen utama: Model, View, dan Controller.

  {{< image 
  src="/images/content/tutorial/mvc-laravel.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

1. **Model** bertanggung jawab untuk menangani data dan logika bisnis aplikasi. Dalam Laravel, model biasanya berinteraksi dengan database menggunakan Eloquent ORM. Model mewakili tabel dalam database dan menyediakan cara yang elegan untuk berinteraksi dengan data
2. **View** View adalah komponen yang bertanggung jawab untuk menyajikan data kepada pengguna. Dalam Laravel, tampilan dibuat menggunakan Blade template engine. Blade memungkinkan penggunaan logika dalam template dengan sintak yang bersih dan mudah dipahami.
3. **Controller** bertindak sebagai perantara antara Model dan View. Controller menerima input dari pengguna melalui HTTP request, memprosesnya (misalnya, mengambil data dari model), dan kemudian mengembalikan respon yang sesuai, biasanya berupa tampilan.

Arsitektur Laravel yang berbasis MVC memisahkan tanggung jawab di antara berbagai komponen, membuat aplikasi lebih terstruktur, mudah dipahami, dan mudah dikembangkan.

Note: kesimpulan nya data dari model(database) hanya bisa berinteraksi dengan controller. Controller akan berinteraksi dengan view (membawa data dari model/database), dan view akan menampilkannya ke web betutorialupun seterusnya sampe capek dan akan muter muter aja heheh.

### Intalasi Laravel

Yang perlu di persiapkan:
1. Composer
2. Xampp
3. Visual Studio Code
4. Niat (hal utama)

### Composer
Composer dibutuhkan untuk manajemen paket di PHP dan ini akan kita pakai untuk instal Laravel:

- Silakan baca: Cara Install Composer di [Windows maupun Linux di sini]().

### Xampp
XAMPP dibutuhkan untuk menjalankan server seperti MySQL dan PHPMyAdmin untuk manajemen database.

Silahkan baca:
- [Cara Install XAMPP di Windows](#)
- [Cara Install XAMPP di Linux](#)

### Visual Studo Code
Visual Studio Code adalah teks editor yang akan kita pakai untuk menulis kode.

Silahkan baca:
- [Review dan Cara install VS Code](#)

### Tahap instalasi laravel
Perintah untuk install laravel dokumentasi nya Bisa kunjungi halaman resmi laravel [https://laravel.com/docs/11.x/installation](https://laravel.com/docs/11.x/installation)

Selanjutnya buat dulu folder khusus di mana ingin menginstall laravel ini agar tidak salah nanti nya.

1. Instalasi laravel
Buka Terminal lalu ketik perintah berikut:
```bash
composer create-project laravel/laravel produk
```

Kemudian di enter (jangan nunggu entar)

  {{< image 
  src="/images/content/tutorial/install-larvel.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Di sini saya membuat projek nya dengan nama **produk** dan untuk versi yang lain langsung kunjungi dokumentasi ya.

Nanti nya akan langsung melakukan penginsatalan dan jika pertama kali akan sedikit lama (belom nemu alasan nya kenapa).

  {{< image 
  src="/images/content/tutorial/proses-install-laravel.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

2. Test instalasi laravelnya

Kalian harus masuk dulu ke folder laravel yang di buat tadi. Jika di windows buka folder yang kalian buat nantinya akan ada folder produk (jika nama folder nya sama dengan ini).

Kemudian di atas nya itu ketikan cmd Kemudian ketikan perintah :

```bash
php artisan serve
```

  {{< image 
  src="/images/content/tutorial/laravel-serve.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Selanjutnya klik masuk ke web browser kalian atau klik link ini [http://127.0.0.1:8000/](http://127.0.0.1:8000/) maka akan tampil:

  {{< image 
  src="/images/content/tutorial/tampilan-laravel.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Mantap, Kita berhasil membuat projek laravel nya.

### Memahami Struktur Folder Laravel

#### Folder Controller dan model

**Controller** berada di folder **App/Http/Controller**. Nanti kode logikanya mau ke mana akan ada di sini

**Model** berada di **App/model** Nanti database nya berada di sini.


  {{< image 
  src="/images/content/tutorial/folder-controller-model.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

#### View
**View** berada di folder **resources/views**. Nanti nya di sini kita akan koding mengkoding untuk tampilan nya.

  {{< image 
  src="/images/content/tutorial/folder-view.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Nah ada yang belom kita bahas di awal yaitu routes dan migration

#### Apa sih itu routes dan migration?
**Routes** adalah penjembatani antara controller dan view

Dan **migration** adalah kode yang akan kita gunakan untuk membuat tabel di database.

Di dalam di folder **routes/**, terdapat dua file:

- **console.php** adalah route untuk menjalankan controller dari CMD dan
- **web.php** adalah route untuk menjalankan controller yang diakses dari web atau HTTP.

  {{< image 
  src="/images/content/tutorial/folder-routes.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Folder migration berada di folder database/migration.

![Folder migration]

Nah di sini sudah ada migration yang di buatkan oleh laravel nya langsung.

  {{< image 
  src="/images/content/tutorial/mvc-route.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Nah seperti sebelum nya kita belom membahas routes yaitu fungsi nya untuk menjembatani antara controller dan view atau program nya akan ke arah mana apakah ke view dulu atau ke controller.

### Latihan: Menampilkan kode routes

Coba buka file **routes/web.php**, di sini akan terdapat definisi routes dari aplikasi kita. Semua routes dari aplikasi wajib ditulis di ini.

Di setiap route terdapat parameter **URI** yang menyatakan alamat URL dan **action** adalah fungsi/controller untuk di jalankan saat alamat tersebut dibuka.

Sebagai contoh:

Di sini terdapat route menuju **URL** / (root) atau home page. Lalu di sana terdapat fungsi yang akan dijalankan saat route **/** dibuka. Fungsi tersebut akan membuka file view dari **resource/view/welcome.blade.php**.

  {{< image 
  src="/images/content/tutorial/kode-routes.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Oke, sekarang mari kita latihan!

Buatlah folder dengan nama **produk** dan buat file **hello.blade.php** di dalamnya.

Setiap membuat file di view harus menggunakan **blade.php** agar bisa terbaca oleh laravel nya dikarenakan laravel menggunakan bahasa blade untuk template engine.

Dan masukan kode ini ke dalam **hello.blade.php**. Disini saya membuat kan hello untuk test saja apakah nampil apa belom.

  {{< image 
  src="/images/content/tutorial/kode-hello-blade.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Kemudian di routes nya Saya membuat **routes/web.php** nya dengan memberikan url nya produk.

```php
Route::get('/produk', function () {
  return view('produk.hello');
});
```
Oke kembali lagi ke web nya tetapi di url-nya di tambahkan **/produk**.

  {{< image 
  src="/images/content/tutorial/laravel-hello-world.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Di sini kita sudah bisa menampilkannya dan view ini kita sudah bisa membuat web statis lo tampa menggunakan controller dan model(database).

Oke agar lebih bagus kita menggunakan template yang sudah ada.

### Menggunakan Template Boostrap di Laravel

Template nya bisa di [download di sini](https://startbootstrap.com/template/sb-admin) jika mau dan kemudian ekstrak file nya.

Oke agar tampilan nya berhasil ada beberapa yang perlu dipersiapkan ya.

Pindahkan folder **assets**, **css**, dan **js** dari hasil ekstrak tadi ke folder public yang ada di projek laravel nya.

  {{< image 
  src="/images/content/tutorial/arsip-template-bootstrap.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sehingga folder **public** berisi seperti ini:

  {{< image 
  src="/images/content/tutorial/folder-public-project.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Buat view baru di dalam folder **views/product** dengan nama in*dex.blade.php*. Kemudian copy kode template dari file *index.html* dari template yang kita download tai ke dalam **index.blade.php**.

  {{< image 
  src="/images/content/tutorial/kode-product-index-blade.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Kode nya jadi banyak ya.

Oke selanjutnya ubah kode di routes/web.php menjadi seperti ini:

```php
Route::get('/produk', function () {
  return view('produk.index');
});
```
**To Be Countine**...!!