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

Hasilnya:

Tes buka link Facebook:

  {{< image 
  src="images/content/tutorial/html/eksternal-link.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Test buka link whatsapp:

  {{< image 
  src="images/content/tutorial/html/eksternal-link-facebook.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sudah paham tentang eksternal link?

Oke, sekarang lanjut belajar atribut:

### Atribut-atribut untuk Link
Selain atribut `href` terdapat juga beberapa atribut yang sering ditambahkan pada link, seperti: `target`, `title`, `rel`, `style`, dan lain-lain.

#### Menggunakan Atribut `target`
Atribut ini berfungsi untuk menentukan target dari pembukaan link. Ada beberapa target yang biasanya digunakan:

- `_blank` akan membuka link pada jendela atau tab baru;
- `_self` akan membuka link pada halaman itu sendiri (*default target*);
- `_top` menuju bagian paling atas pada halaman;
- `_parent` membuka link pada frame induk;
- `nama-frame` akan membuka link pada `<iframe>` dengan nama tertentu;

Contoh:

```html
<a href='https://www.facebook.com/gitkodachi' target='_blank'>Facebook</a>
```
Hasilnya:

  {{< image 
  src="images/content/tutorial/html/target-blank.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Saat link tersebut diklik, browser akan membuka tab baru. Ini karena kita memberikan atribut target dengan nilai `_blank`.

Berikutnya, kita akan mencoba menampilkan link ke dalam sebuah frame.

Buatlah file baru bernama `link-frame.html`, kemudian isi kodenya seperti ini:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Tutorial Link di HTML</title>
</head>

<body>
  <p>
    <a href="https://www.petanikode.com" target="myframe">Sebuah Link</a>
  </p>
  <p>
    <!-- Frame yang akan menjadi target link -->
    <iframe name="myframe" width="600" height="400"></iframe>
  </p>
</body>

</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/link-frame.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

#### Menggunakan Atribut `title`
Atribut ini berfungsi untuk membuat tooltips. Tooltips adalah informasi tambahan yang akan tampil saat link disentuh pointer atau saat kita menahan tap di hp.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <p>Untuk lebih lengkapnya, silakan buka:
            <a href="about.html" title="Menuju ke halaman about">About us</a>
        </p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/link-title.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

{{< alert type="info" title="Live Demo" >}}
Untuk lebih lengkapnya, silakan buka: [About us](https://gitkodachi.github.io/about/)
{{< /alert >}}

### Cara Mengubah Warna Link di HTML
Warna default link adalah biru, ini bisa kita ubah dengan style CSS. Warna bisa kita berikan untuk teks dan latar belakang (`background`).

Caranya:

Tambahkan atribut `style` kemudian isi dengan style css untuk mengubah warna, yakni `color` (untuk teks) dan `background-color` (untuk latar).

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
      <h1>Selamat Datang</h1>
        <p>
          <a href="index.html" style="color:red">Home</a> |
          <a href="contact.html" style="color:green">Contact</a> |
          <a href="about.html" style="color:deeppink;">About</a> |
          <a href="download.html" style="color:white;background-color: orange;">Download</a>
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

Hasailnya:

  {{< image 
  src="images/content/tutorial/html/link-color.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Fungsi Menarik Lainnya dari Link
Seperti yang saya bilang sebelumnya.. link tidak hanya digunakan untuk menghubungkan halaman web saja.

Ia juga bisa digunakan untuk beberapa fungsi tertentu seperti:

Membuat Link Buntu
Link buntu adalah link yang tidak akan membuka apa-pun. Ia biasanya digunakan sebagai placeholder atau sampel saja.

Cara membuatnya:

Tambahkan tanda pagar atau tanda pagar dan tanda seru pada atribut `href`.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <p>
            <a href="#">Link Buntu</a>
            <a href="#!">Link Buntu 2</a>
        </p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/link-buntu.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Perhatikan!

Pada contoh tersebut kita mengisi URL-nya dengan tanda pagar. Arti tanda pagar pada URL sebenarnya adalah `anchor` (jangkar).

Jangkar ini nantinya akan membawa kita ke lokasi tertentu di dalam dokumen HTML. Jika hanya diisi pagar saja, maka ia tidak akan kemana-mana.

#### Membuat Link Anchor
Link anchor adalah link yang menuju ke suatu elemen tertentu. Cara kerjanya seperti saat kita mengaitkan jangkar, lalu ditarik ke sana. Karena itu, dia dinamakan anchor.

  {{< image 
  src="images/content/tutorial/html/anchor-link.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Cara membuat link anchor adalah dengan mengisi alamat URL dengan tanda pagar `(#),` lalu diisi dengan nama id dari elemen yang akan dituju.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <h1>Contoh Link Anchor</h1>
        <p>Ini adalah contoh link anchor. Coba klik link ini:
            <a href="#penutup">Meluncur ke Penutup</a> maka kamu
            akan dibawa ke bagian penutup dari dokumen ini.
        </p>
        <h2>Apa itu Jangkar?</h2>
        <p>
            Anchor dalam bahasa indonesia artinya jangkar. Saya yakin
            kamu pasti pernah melihat jangkar. Fungsi jangkar untuk 
            menahan kapal agar tidak hanyut. Tapi dalam HTML, fungsinya
            untuk membuat link yang bisa membawa kita meluncur ke tujuan
            jangkar itu.
        </p>
        <p>
            Jangkar atau anchor di HTML tidak hanya bisa digunakan pada
            satu dokumen saja. Ia juga bisa digunakan untuk membuka dokumen
            lain, lalu mengaitkan jangkarnya.
        </p>
        <p>
            Jangkar biasanya dibuat dengan tanda pagar (#) lalu diikuti
            dengan nama id dari elemen yang ingin dituju. Contohnya #penutup,
            maka link yang menggunakan anchor tersebut akan mencari elemen
            HTML yang memiliki id `penutup` dan membawa kita ke sana.
            Kira-kira begitulah cara kerjanya.
        </p>
        <h2 id="penutup">Akhir Kata..</h2>
        <p>
            Ini adalah penutup dari artikel ini, dan coba perhatikan headingnya.
            Di sana kita menggunakan id="penutup". Maka elemen ini akan menjadi
            tujuan dari anchor link.
        </p>
        <p>
            <a href="#top">Kembali ke Atas!</a>
        </p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/link-anchor.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Kalau kita perhatikan, disana kita menggunakan `#top` sebgail URL

```bash
<a href="#top">Kembali ke Atas!</a>
```

Sedangkan elemen yang memiliki `id="top"`, tidak ada di dalam HTML yang kita tulis.

Mengapa link anchor ini bisa menuju ke atas?

Ini karena browser sudah paham, jika ada link anchor yang menuju ke `#top` maka ia akan dibawa ke bagian teratas dari dokumen.

  {{< image 
  src="images/content/tutorial/html/top-anchor.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

#### Membuat Link untuk Memanggil Fungsi Javascript
Link dapat juga digunakan untuk memanggil fungsi Javascript.

Pemanggilan fungsi Javascript biasanya dilakukan dengan atribut even seperti `onclick`, `onmouseover`, `onmouseout`, dan sebagainya.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <p>
            <a href="#" onclick="alert('Hello World!')">Jalankan JS</a>
            <br>
            <a href="#!" onmouseover="alert('link sudah kamu sentuh!')">Coba Sentuh Link ini</a>
        </p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/link-js.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sebenarnya hampir semua elemen bisa menjalankan fungsi Javascript dengan atribut event.

Nah, khusus untuk link. Dia bisa juga menjalankan fungsi Javascript melalui atribut `href` atau URL.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <p>
            <a href="javascript:alert('Hello World!')">Jalankan JS</a>
        </p>
    </body>
</html>
```

#### Hasilnya akan sama seperti contoh sebelemenya.

Membuat Link dengan Gambar
Membuat gambar sebagai link kadang sering dilakukan dalam web. Cara membuatnya sangat mudah, kita hanya perlu membungkus tag `<img>` dengan tag `<a>`.

Contoh:

```html
<a href="#"><img src="https://www.petanikode.com/img/logo.svg" /></a>
```

#### Membuat Link Untuk Mengirim Email

Link kadang juga digunakan untuk mengirim email.

Cara membuatnya:

Ubah URL tujuan dari link dengan `mailto`, lalu diikuti dengan alamat email yang akan menerima email.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Link di HTML</title>
    </head>
    <body>
        <p>
            Info lebih lanjut:
           <a href="mailto:tes@contoh.com" 
           title="kirim email ke Admin">Hubungi Saya</a>
        </p>
    </body>
</html>
```

  {{< image 
  src="images/content/tutorial/html/link-email.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Jika kamu membukanya di Google Chrome, maka ia akan membuka Gmail. Tapi jika dibuka di Firefox, ia akan memilih aplikasi email yang tersedia di komputer.


### Apa Selanjutnya?
Nah, sampai di sini dulu tutorial pertama ini..

Jika ada yang belum jelas, bisa ditanyakan melalui komentar.

Berikutnya silakan pelajari tentang definisi tag, elemen, dan atribut:

- [Belajar HTML #08: Mengenal tag, elemen, dan atribut dalam HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}