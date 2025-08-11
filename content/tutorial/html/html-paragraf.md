---
title: "Belajar HTML #03: Membuat Paragraf pada HTML"
linkTitle: "Belajar HTML #03: Membuat Paragraf di HTML"
date: 2025-07-10
weight: 3
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

Setelah belajar tentang [apa itu HTML, Tag, Elemen, dan Atribut](#). Berikutnya, kita akan belajar tentang elemen-elemen dasar pada HTML yang sering digunakan dalam membuat web.

Mari kita mulai dengan mengenal elemen paragraf.

### Membuat Paragraf di HTML

Paragraf adalah kumpulan dari beberapa kalimat. Pada web, Paragraf biasanya digunakan untuk menampilkan teks atau artikel.

Paragraf pada HTML dibuat dengan tag `<p>`. Selain tag ini, ada juga tag pendukung lain seperti `<div>`, `<hr>`, `<br>`, dan `<pre>`.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML</title>
    </head>
    <body>
        <p>Ini adalah sebuah paragraf yang berisi beberapa kalimat.
        Saya sedang belajar HTML di Petani Kode. Saat ini Sedang,
        Belajar tentang paragraf.</p>
        <p>Paragraf adalah kumpulan dari beberapa kalimat yang saling
        mendukung. Punya ide pokok sebagai dasar dari paragraf itu sendiri.</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-paragraf.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Atribut untuk Paragraf

Biasanya paragraf ditambahkan dengan beberapa atribut seperti **align**, **id**, **class**, dll.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML #2</title>
    </head>
    <body>
        <p align="center">Ini adalah sebuah paragraf yang berisi beberapa 
        kalimat. Saya sedang belajar HTML di Petani Kode. Saat ini Sedang,
        Belajar tentang paragraf.</p>
        <p align="right">Paragraf adalah kumpulan dari beberapa kalimat yang 
        saling mendukung. Paragraf dibuat dengan menentukan ide pokok terlebih
        dahulu. Lalu diikuti dengan kalimat-kalimat pendukung.</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/align.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Atribut **align** merupakan atribut yang digunakan untuk perataan teks pada paragraf. Namun, menurut validator W3C.. penggunaan tag ini sebaiknya diganti dengan CSS.

Mengapa demikian?

Karena atribut **align** dapat mengubah tampilan dari web. Ini sebenarnya tigas dari CSS. Tugas utama dari HTML adalah membuat struktur dasar dari web.

Contoh perataan menggunakan CSS:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML #2</title>
    </head>
    <body>
        <p style="text-align: justify">Ini adalah sebuah paragraf yang berisi 
        beberapa kalimat. Saya sedang belajar HTML di Petani Kode. Saat ini 
        Sedang, Belajar tentang paragraf.</p>
        <p style="text-align: center">Paragraf adalah kumpulan dari beberapa 
        kalimat yang saling mendukung. Paragraf dibuat dengan menentukan ide 
        pokok terlebih dahulu. Lalu diikuti dengan kalimat-kalimat pendukung.</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/align-css.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Tag `<br>` untuk Membuat Paragraf

Tag `<br>` sebenarnya bukanlah tag untuk membuat paragraf. Tapi tag ini, biasanya digunakan untuk membantu tag `<p>`.

Fungsi utama tag `<br>` adalah untuk membuat baris baru.

Contoh:

Misalkan kita ingin menampilkan pantun, bisa saja kita buat seperti ini di dengan tag `<p>`.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML #3</title>
    </head>
    <body>
        <p>Rambut berantakan tak pernah di sisir
           Orang melihat tertawa kesenangan
           Pengangguran berserakan seperti pasir
           Kurang usaha dan keterampilan</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/pantun.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Meskipun pada kode HTML kita sudah menulis tiap bait pantun dalam baris yang baru. Tapi ia akan tetap ditampilkan seperti baris.

Di sinilah saatnya kita harus menggunakan tag `<br>`. Maka, kode di atas.. bisa kita perbaiki menjadi seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML #3</title>
    </head>
    <body>
        <p>Rambut berantakan tak pernah di sisir <br />
           Orang melihat tertawa kesenangan <br />
           Pengangguran berserakan seperti pasir <br />
           Kurang usaha dan keterampilan</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/tag-br.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Oh iya, tag `<br>` adalah tag yang tidak memiliki pasangan penutup. Cara menutupnya, tambahkan saja garis miring seperti ini `<br />`.

Tag `<br>` boleh ditutup, boleh juga tidak. Namun, sebaiknya ditutup agar valid menurut validator W3C.

### Tag `<hr>` untuk Membuat Garis

Sama seperti tag `<br>`, tag `<hr>` juga bukanlah tag untuk membuat paragraf.

Tag `<hr>` merupakan tag yang digunakan untuk membuat garis lurus secara horizontal (*horizontal rule*). Biasanya digunakan untuk memisahkan beberapa konten atau paragraf.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML</title>
    </head>
    <body>
        <p>Ini adalah sebuah paragraf yang berisi beberapa kalimat.
        Saya sedang belajar HTML di Petani Kode. Saat ini Sedang,
        Belajar tentang paragraf.</p>
        <hr />
        <p>Paragraf adalah kumpulan dari beberapa kalimat yang saling
        mendukung. Punya ide pokok sebagai dasar dari paragraf itu sendiri.</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/tag-hr.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Tag `<pre>`

Pada kasus tertentu, kita ingin menampilkan paragraf dengan format yang lebih spesifik. Contohnya seperti pantun dan puisi yang paragrafnya ditulis dengan garis baru dan juga indentasi.

Hal ini bisa dilakukan dengan bantuan tag `<br>`. Namun ada juga tag lain yang bisa jadi alternatif, yakni tag `<pre>`.

Tag `<pre>` (*preformatting*) merupakan tag yang digunakan untuk menampilkan teks atau paragraf dalam format yang sudah kita tentukan di HTML.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tutorial Paragraf di HTML</title>
</head>
<body>
<h1>Hujan Bulan Juni</h1>
<p>oleh Sapardi Djoko Damono</p>
<pre>
tak ada yang lebih tabah
dari hujan bulan Juni
dirahasiakannya rintik rindunya
kepada pohon berbunga itu

    tak ada yang lebih bijak
    dari hujan bulan Juni
    dihapusnya jejak-jejak kakinya
    yang ragu-ragu di jalan itu

tak ada yang lebih arif
dari hujan bulan Juni
dibiarkannya yang tak terucapkan
diserap akar pohon bunga itu
</pre>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/pre.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

## Tobe contine