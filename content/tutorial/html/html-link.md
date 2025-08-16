---
title: "Belajar HTML #07: Cara Membuat Link untuk Menghubungkan Halaman Web"
linkTitle: "Belajar HTML #07: Membuat Link pada HTML"
date: 2025-07-10
weight: 7
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html.png"
image: "/images/cover/html.png"
show_tutorial_list: true
completed: false
current: true 
description: "Belajar membuat tampilan web modern dengan HTML dan CSS untuk pemula."
---

Apa jadinya web tanpa ada link?

Kamu bisa bayangkan gak?

Misalkan:

Ia ingin mebukan halaman about, makan harus mengetik:

```url
http://localhost:1313/about.html/
```

Lalu ia ingin beralih ke halaman Contact, maka harus mengetik lagi:

```url
http://localhost:1313/contact.html/
```

Ribet! 😫

Karena itu, kita membutuhkan link.

Nah, pada tutorial ini..

..kita akan belajar cara membuat link di HTML.

Mari kita mulai!

### Apa itu Link di HTML?

Link atau Hyperlink adalah elemen HTML yang berfungsi menghubungkan suatu halaman web ke halaman web yang lain.

Elemen ini bisa diklik.. dan nanti akan membuka halaman lain sesuai alamat URL yang diberikan.

  {{< image 
  src="images/content/tutorial/html/pengertian-link.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Tidak hanya untuk menghubungkan halaman, link juga punya fungsi lain seperti scroll top, download file, menjalankan fungsi javascript, dll.

Nanti kita akan bahas ini lebih dalam..

Nah! sekarang, bagaimana cara membuat link di HTML?

Silakan lanjutkan membaca:

### Cara Membuat Link di HTML

Link pada HTML dapa dibuat dengan tag `<a>`, kemudian tag ini harus memiliki atribut `href` untuk menentukan alamat URL tujuan dari link.

Bentuk sederhananya seperti ini:

  {{< image 
  src="images/content/tutorial/html/link-tag.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Contoh: `link.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <p>Untuk lebih lengkapnya, silakan buka:
            <a href="about.html">About us</a>
        </p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-link.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Link akan ditampilkan dengan warna biru dan garis bawah. Ini adalah style standar dari setiap browser.

Tentu saja ini bisa kita ubah-ubah sesuai selera.

Nanti kita akan bahas caranya ya..

Nah sekarang coba klik link tersebut!

  {{< image 
  src="images/content/tutorial/html/link-404.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Lha! Kok error?

Link yang kita buat ini akan membuka halaman `about.html`, tapi file ini belum kita buat atau belum ada. Karena itu, pasti error.

Untuk mengatasi ini, kita harus membuat file `about.html` dan disimpan dalam satu folder dengan file `link.html`.

  {{< image 
  src="images/content/tutorial/html/file-about.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Isi file abo`ut.html` seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
      <h1>About us</h1>
        <p>
          Ini adalah website yang dibuat dengan link.
          Kamu bisa membuka halaman dengan mudah. Tinggal klik-klik saja!
        </p>
        <p>
          <a href="link.html">Kembali ke halaman link</a>
        </p>
    </body>
</html>
```

Nah, sekarang mari kita coba lagi:

  {{< image 
  src="images/content/tutorial/html/link-about.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Yap!

Halaman `link.html` dan `about.html` berhasil terhubung.

Tapi tunggu dulu..

Mengapa alamat URL pada atribut `href` ditulis dengan nama file?

Bukannya harus alamat URL lengkap yang pakai `http` bla bla?

Ini karena link yang kita buat adalah internal link dan juga file `about.html` masih dalam satu folder dengan file `link.html`. Jadi boleh menuliskan langsung nama filenya, tanpa harus lengkap dengan `http`.

Untuk lebih jelasnya, mari kita pelajari jenis-jenis link dalam HTML.

### Jenis-jenis Link pada HTML

Berdasarkan alamat URL yang dituju, link pada HTML dibagi menjadi dua kelompok:

1. `Internal Link`: adalah link yang menuju ke domain atau halaman web itu sendiri;

  {{< image 
  src="images/content/tutorial/html/internal-link.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

2. `External Link`: adalah link yang menuju domain lain.

  {{< image 
  src="images/content/tutorial/html/eksternal-link.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Internal link biasanya digunakan untuk menghubungkan halaman yang satu dengan yang lainnya dalam satu website atau domain.

Sementara untuk eksternal link, digunakan untuk membuka web atau domain lain. Misalnya seperti: membuka halaman facebook, membuka chat whatsapp, membuka youtube, dan sebagainya.

Intinya:

Selama link itu membuka web lain, maka ia adalah external. Tapi kalau tetap membuka web itu sendiri maka itu internal.

Biar lebih jelas, mari kita coba membuatnya di HTML:

### 1. Contoh Internal Link

Buatlah file bernama `index.html`  kemudian isi dengan kode berikut:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
      <h1>Selamat Datang</h1>
        <p>
          <a href="index.html" >Home</a> |
          <a href="contact.html" >Contact</a> |
          <a href="about.html" >About</a>
        </p>
        <hr>
        <p>
          Selamat datang di websiteku. Coba klik menu di atas,
          maka kamu akan membuka halaman yang berbeda. Semua
          link di atas adalah internal link.
        </p>
        <hr>
        <div>Copyright &copy; 2020 by Petani Kode</div>
    </body>
</html>
```

Kemudian buat lagi file baru bernama `contact.html` dengan isi sebagai berikut:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
      <h1>Contact</h1>
        <p>
          <a href="index.html" >Home</a> |
          <a href="contact.html" >Contact</a> |
          <a href="about.html" >About</a>
        </p>
        <hr>
        <p>
          Kamu bisa menghubungi saya melalui nomer WA: 0871111111
          atau juga alamat email: mail@contoh.com.
        </p>
        <hr>
        <div>Copyright &copy; 2020 by Petani Kode</div>
    </body>
</html>
```

Terakhir, buat file `about.html` dengan isi sebagai berikut:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
      <h1>About</h1>
        <p>
          <a href="index.html" >Home</a> |
          <a href="contact.html" >Contact</a> |
          <a href="about.html" >About</a>
        </p>
        <hr>
        <p>
          Ini adalah halaman about dari website saya.
          Jadi ini adalah contoh cara membuat link internal di HTML.
        </p>
        <hr>
        <div>Copyright &copy; 2020 by Petani Kode</div>
    </body>
</html>
```

Pastikan semua file ini disimpan dalam satu folder.

  {{< image 
  src="images/content/tutorial/html/file-html-link-internal.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah itu, coba buka `index.html` dengan browser.

Maka hasilnya:

  {{< image 
  src="images/content/tutorial/html/internal-link.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### 2. Contoh External Link

Cara membuat eksternal link sebenarnya sama saja seperti internal link. Perbedaannya terletak pada alamat URL yang diberikan.

Sebagai contoh.. ini adalah eksternal link yang menuju halaman facebook:

```html
<a href="https://gitkodachi.github.io/">Github gitkodachi</a>
```

Hasilnya:
{{< alert type="info" title="Contoh Link External" >}}
"[Github gitkodachi](href="https://gitkodachi.github.io/)"
{{< /alert >}}

Pada link tersebut, kita memberikan alamat URL whatsapp dan nantinya akan membuka halaman tersebut. Ini juga bisa disebut eksternal link, karena ia akan membuka halaman whatsapp.

Oh iya, di sana kita berikan parameter berupa nomer hp dan juga teks.

Nah, biar lengkap.. kita akan coba tambahkan eksternal link pada file contact.html.

Silakan buka file contact.html kemudian ubah kodenya menjadi seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
      <h1>Contact</h1>
        <p>
          <a href="index.html" >Home</a> |
          <a href="contact.html" >Contact</a> |
          <a href="about.html" >About</a>
        </p>
        <hr>
        <p>
          Kamu bisa menghubungi saya melalui nomer WA: 
          <a href="https://api.whatsapp.com/send?phone=6287111&text=Hi">+6287111</a>
          atau juga alamat email: mail@contoh.com.
        </p>
        <p>
          Jangan lupa follow juga fan page saya ya:
          <a href="https://www.facebook.com/petanikode">Petani Kode</a>
        </p>
        <hr>
        <div>Copyright &copy; 2020 by Petani Kode</div>
    </body>
</html>
```