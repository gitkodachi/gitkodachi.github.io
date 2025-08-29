---
# content/tutorial/html-untuk-pemula/tag-element-atribut.md
title: "Belajar HTML #08: Cara Menampilkan Gambar di HTML"
linkTitle: "Belajar HTML #08: Menampilkan Gambar di HTML"
author: "default"
author: "default"
date: 2025-06-27
weight: 8
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/img.png"
image: "/images/cover/img.png"
show_tutorial_list: true
completed: false
current: true 
description: "Pada tutorial ini, kita akan belajar cara menambahkan gambar di HTML."
---

Website tanpa gambar = **membosankan**.

Setuju?

Ya saya juga setuju.

Gambar akan membuat website kita terlihat lebih menarik. Karena otak kita lebih mudah menyerap informasi dengan visual dibandingkan hanya teks saja.

Karena itu, gambar sangatlah penting.

Pada tutorial ini, kita akan belajar cara menambahkan gambar di HTML.

Mari kita mulai..

### Menambahkan Gambar di HTML

Gambar dapat kita tambakan di HTML dengan menggunakan tag `<img>`. Tag ini memiliki atribut wajib, yakni `src`.

Jika kita tidak mengisi atribut `src`, maka gambar tidak akan ditampilkan.

  {{< image 
  src="images/content/tutorial/html/html-img.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Alamat URL gambar pada atribut `src` dapat berupa URL maupun alamat path. Lalu tag `<img>` harus ditutup dengan menambahkan garis miring.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar sawah:</p>
  <p>
    <img src="sawah.jpg" />
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-gambar-html.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Perhatikan!

Pada contoh di atas, kita menulisakan langsung nama file dari gambar.
Ini karena manaruh gambar di dalam folder yang sama dengan file HTML...

  {{< image 
  src="images/content/tutorial/html/file-image.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Apabila file gambarnya tersimpan di folder yang berbeda, maka kita hanya perlu menuliskan alamat path-nya.

Misalkan, kita akan menyimpan gambar di dalam folder `images`.

  {{< image 
  src="images/content/tutorial/html/folder-images.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Maka di HTML, kita bisa tulis seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar sawah:</p>
  <p>
    <img src="images/sawah.jpg" />
  </p>
</body>
</html>
```

Maka  akan sama seperti contoh di atas.

  {{< image 
  src="images/content/tutorial/html/contoh-gambar-html.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Lalu bagaimana kalau gambarnya berada di internet atau website lain?

Nah, jika kita menggunakan gambar dari website lain..

..kita harus menuliskan alamat URL lengkap dari gambar tersebut.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar Candi Borobudur:</p>
  <p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Borobudur_Temple.jpg/320px-Borobudur_Temple.jpg" />
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/image-with-url.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Gampang kan?

Nah, berikutnya kita akan pelajar format gambar apa saja yang bisa digunakan di HTML dan juga atribut lainnya untuk `<img>`.

Silakan lanjutkan..

### Format File Gambar untuk HTML

Tidak semua format file gambar dapat ditampilkan di HTML. Karena tiap file gambar memiliki tujuan masing-masing.

Misalnya file gambar dengan format PSD, ia adalah file gambar untuk PhotoShop. Jelas ini tidak akan bisa ditampilkan di HTML.

Lalu, format apa saja yang didukung oleh HTML?

Berikut ini daftar beberapa format gambar yang sering digunakan dalam web:

|Nama Format |Nama Panjang                      	|Ekstensi                        |
|:-----------|:-------------------------------------|:-------------------------------|
|APNG        |Animated Portable Network Graphics	|.apng                           |
|GIF	     |Graphics Interchange Format	        |.gif                            |
|ICO	     |Microsoft Icon	                    |.ico, .cur                      |
|JPEG	     |Joint Photographic Expert Group image	|.jpg, .jpeg, .jfif, .pjpeg, .pjp|
|PNG	     |Portable Network Graphics	            |.png                            |
|SVG	     |Scalable Vector Graphics	            |.svg                            |
|WebP	     |Web Picture	                        |.webp                           |

Format file ini juga akan bergantung pada versi browser yang digunakan.

Kita ambil contoh format WebP, ini adalah format file gambar baru yang dikembangkan oleh Google. Jika kita menggunakan browser versi lama, gambar ini tidak akan bisa ditampilkan.

### Atribut untuk Tag `<img>`

Ada beberapa atribut yang sering digunakan pada tag `<img>`:

- `alt` untuk teks alternatif untuk gambar;
- `width` untuk menentukan lebar gambar;
- `height` untuk menentukan tinggi gambar;
- `style` untuk menentukan style CSS untuk gambar.

Mari kita coba satu per satu..

**Atribut** `alt`
Atribut `alt` adalah atribut untuk memberikan teks alternatif pada gambar saat gambar gagal ditampilkan.

Contoh:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar Candi Borobudur:</p>
  <p>
    <img src="" alt="Candi Borobudur" />
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-atribut-alt.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pada contoh tersebut, kita sengaja mengosongkan nilai atribut src. Akibatnya gambar gagal ditampilkan dan yang akan ditampilkan adalah teks alternatif.

Apakah kita wajib menggunakan atribut `alt`?

Sebenarnya tidak wajib, tapi sebaiknya tetap menggunakan atribut ini. Karena, nantinya teks alternatif akan dibaca oleh screen reader.

Screen reader adalah aplikasi pembaca yang digunakan oleh tuna netra agar bisa mengetahui informasi yang ada di komputer.

Selain itu, atribut `alt` juga sering digunakan untuk meletakan kata kunci untuk SEO.

**Atribut** `width` dan `height`
Atribut `width` dan `height` adalah atribut yang digunakan untuk menentukan lebar dan tinggi dari gambar.

Contoh:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar sawah:</p>
  <p>
    <img src="images/sawah.jpg" width="200" height="150" alt="Sawah"/>
    <img src="images/sawah.jpg" width="150" height="100" alt="Sawah"/>
    <img src="images/sawah.jpg" width="50" height="50" alt="Sawah"/>
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-atribut-height-width.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Satuan yang digunakan untuk nilai `width` dan `height` adalah piksel (`px`). Jika kita memberikan nilai `200`, artinya.. kita memberikan nilai `200px`.

Atribut `width` dan `height` juga tidak wajib. Tapi baiknya ditambahkan agar ukuran gambar konsisten.

**Atribut** `style`
Atribut `style` merupakan atribut untuk menambahkan `style` CSS pada sebuah elemen. Atribut ini sering digunakan pada gambar untuk memberikan style atau efek tertentu.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Style Gambar di HTML</h1>
  <p>Berikut ini adalah gambar sawah:</p>
  <p>
    <img src="images/sawah.jpg" style="width: 160px;border: 3px solid red;" />
    <img src="images/sawah.jpg" style="width: 160px;border-radius: 10px;" />
    <img src="images/sawah.jpg" style="width: 100px;height: 100px;border-radius: 100%;" />
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-image-style.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Perhatikan gambar di atas ☝️..

Gambar pertama kita berikan style garis (*border*) dengan ukuran `3px`, jenis solid, dan warnanya adalah merah.

Lalu gambar kedua, kita berikan style `border-radius` untuk menciptakan lengkungan pada pojok gambar.

Pada gambar ketiga, kita berikan nilai `100%` pada `border-radius` yang akan menciptakan lingkaran.

### Mebuat Gambar Background

Sebenarnya ini sudah masuk ke dalam pembahasan tentang CSS, tapi tidak apa-apa kita bahas di sini.

Agar gambar bisa ditampilkan sebagai background, maka kita harus menggunakan CSS dengan atribut `background-image` lalu diisi dengan URL dari gambar.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body style="background-image: url(images/sawah.jpg);">
  <h1>Background dengan Gambar</h1>
  <p>Halaman ini menggunakan gambar sebagai background</p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/image-bg.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

###  Membuat Link dengan Gambar
Membuat gambar sebagai link pernah kita bahas di [Tutorial membuat link di HTML](../html-link), tapi tidak apa-apa.. kita akan bahas lagi biar semakin paham.

Baiklah…

Cara membuat link dengan gambar adalah dengan menggabungkan tag `<a>` dan tag `<img>`. Tag `<a>` harus mengapit tag `<img>`.

Contoh:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Gambar Sebagai Link</h1>
  <p>Coba klik gambar ini:</p>
  <p>
    <a href="https://www.petanikode.com">
      <img src="images/sawah.jpg" width="160"/>
    </a>
  </p>
</body>
</html>
```

Hasilnya:

{{< video src="/images/content/tutorial/html/image-link.webm" src_mp4="/images/content/tutorial/html/image-link.webm">}}

###  Membuat Link pada Bagian Gambar
Link dapat kita buat pada bagian tertentu pada gambar dengan menggunakan tag `<map>` dan `<area>`.

Contoh[^1]

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Gambar Sebagai Link</h1>
  <p>Coba sentuh dan klik gambar ini:</p>
  <p>
    <img src="https://www.w3schools.com/html/workplace.jpg" usemap="#workmap"/>
    <map name="workmap">
      <area shape="rect" coords="34,44,270,350" title="Computer" href="#!">
      <area shape="rect" coords="290,172,333,250" title="Phone" href="#!">
      <area shape="circle" coords="337,300,44" title="Coffee" href="#!">
    </map>
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/videoframe_4069.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Tag Tambahan untuk Gambar di HTML
Pada HTML versi 5, ada beberapa tag tambahan yang bisa digunakan untuk membantu tag <img>.

Di antaranya:

- `<figure>` untuk membungkus gambar dan teks caption-nya;
- `<picture>` untuk menentukan jenis gambar pada ukuran layar yang berbeda.

Mari kita coba:

**Tag** `<figure>`
Tag figure berfungsi untuk membungkus tag `<img>` atau gambar dengan teks caption. Teks caption adalah teks yang menjelaskan tentang gambar. Teks caption bisa dibuat dengan tag `<figcaption>`.

  {{< image 
  src="images/content/tutorial/html/figure.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>
<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar sawah:</p>
  <p>
    <figure>
      <img src="images/sawah.jpg" width="300" alt="Sawah"/>
      <figcaption>Landscape sawah dan langit</figcaption>
    </figure>
  </p>
</body>
</html>
```

  {{< image 
  src="images/content/tutorial/html/contoh-figure.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Tag `<picture>`
Di era mobile seperti saat ini, website tidak hanya dibuka melalui komputer saja, tapi juga smartphone.

Ukuran layar komputer dengan smartphone tentunya berbeda. Karena itu, website harus bersifat responsif agar bisa menyesuaikan diri dengan media yang digunakan.

Nah, tag `<picture>` hadir untuk mengatasi masalah ini. Tag ini berfungsi untuk menentukan gambar mana yang akan ditampilkan pada ukuran layar tertentu.

  {{< image 
  src="images/content/tutorial/html/picture.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Mari kita coba contohnya:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Contoh Gambar di HTML</title>
</head>

<body>
  <h1>Menampilkan Gambar di HTML</h1>
  <p>Berikut ini adalah gambar sawah:</p>
  <p>

    <picture>
      <source media="(min-width: 650px)" srcset="images/sawah.jpg">
      <source media="(min-width: 450px)" srcset="images/sawah-sm.jpg">
      <img src="images/sawah.jpg">
    </picture>

  </p>
   
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/videoframe_1160.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Apa Selanjutnya?

Sejauh ini kita sudah belajar cara menampilkan gambar di HTML. Intinya, kamu hanya perlu mengingat cara menggunakan tag `<img>`.

Berikutnya, silakan pelajari:

- [Belajar HTML #09: Membuat Komentar pada HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}

[^1]: https://www.w3schools.com/html/html_images_imagemap.asp
