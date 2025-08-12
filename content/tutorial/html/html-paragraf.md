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

untuk membuat halaman web berikut[^1]

[^1]: https://id.wikipedia.org/wiki/HTML

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

coba perhatikan!

Tag `<p>` vs Tag `<div>`
Tag `<p>` dan Tag `<div>`, memiliki perilaku yang hampir sama. Tapi tag `<div>` sebenarnya bukanlah tag untuk membuat paragraf, melainkan tag untuk membuat layout web.

Kadang tag `<div>` sering ‘disalahgunakan’ untuk membuat paragraf.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Paragraf di HTML</title>
    </head>
    <body>
        <div>Ini adalah sebuah paragraf yang berisi beberapa kalimat.
        Saya sedang belajar HTML di Petani Kode. Saat ini Sedang,
        Belajar tentang paragraf.</div>
        <div>Paragraf adalah kumpulan dari beberapa kalimat yang saling
        mendukung. Punya ide pokok sebagai dasar dari paragraf itu sendiri.</div>
    </body>
</html>
```

Ini boleh-boleh, saja. Tapi hasilnya tidak akan sama seperti tag `<p>`.

  {{< image 
  src="images/content/tutorial/html/tag-p-vs-div.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Paragraf yang dibuat dengan tag `<div>` tidak akan memiliki jarak margin antar paragraf.

Tag `<div>` biasanya digunakan untuk membungkus teks yang ada di luar artikel. Contoh seperti teks pada footer, header, sidebar, dll.

Contoh:

```html
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
        <hr />
        <footer>
            <div>&copy; 2020 Belajar HTML by Petani Kode</div>
        </footer>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/p-footer.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}


### Bonus: Paragraph Style

Sebenarnya ini ranah pembahasan tentang CSS bukan HTML. Karena itu, kamu boleh baca dan juga boleh tidak.

Paragraph Style adalah style CSS yang kita berikan kepada paragraf agar tampil lebih menarik.

Berikut ini beberapa style yang bisa diberikan pada paragraf:

#### 1. Baris Pertama Masuk ke Dalam
Baris pertama pada paragraf kadang sering ditulis masuk ke dalam atau ini juga disebut dengan indentasi.

Contoh:

  {{< image 
  src="images/content/tutorial/html/paragraf-indentasi.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Bagaimanakah cara membuat yang seperti itu di HTML?

Gampang!

Kita bisa memanfaatkan style CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tutorial Paragraf di HTML</title>
</head>
<body>
<h1>Paragraf Indentasi</h1>
<p style="text-indent: 45px;">Contoh ini baris pertama yang ditulis masuk ke dalam.
Baris kedua tetap ditulis seperti biasa. Dan juga baris
Ke-3 ditulis seperti biasa.</p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/hasil-p-indentasi.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Atribut style merupakan atribut untuk menambahkan style CSS. Pada contoh di atas kita menambahkan text-indent dengan nilai 45px, nilai ini akan menentukan jarak (ke dalam) dari baris pertama.

#### 2. Warna untuk Paragraf
Warna bisa kita berikan kepada teks dan background. Properti CSS yang digunakan untuk memberikan warna adalah color (untuk teks) dan background-color (untuk background).

Contoh:

```html
<html lang="en">
<head>
    <title>Tutorial Paragraf di HTML</title>
</head>
<body>
<h1>Warna untuk Paragraf</h1>

<p style="color: blue;">Contoh paragraf dengan warna teks biru.
Ini baris kedua dari paragraf. Semua teks yang ada di dalam
paragraf ini  akan berwarna biru.</p>

<p style="color: white; background-color:purple">Contoh paragraf dengan 
warna teks putih dan warna background-nya adalah ungu.
Ini baris kedua dari paragraf. Semua teks yang ada di dalam
paragraf ini  akan berwarna putih.</p>

</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/paragraf-warna.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

#### 3. Mengubah Jenis Font
Tidak suka dengan jenis font yang digunakan, kamu bisa menggantinya dengan style CSS.

Caranya..

Kita bisa gunakan properti font-family lalu diberikan nilai dengan nama font yang akan digunakan.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tutorial Paragraf di HTML</title>
</head>
<body>
<h1>Font untuk Paragraf</h1>

<p style="font-family: Arial;">Ini adalah contoh paragraf yang
menggunakan font Arial. Semua teks pada paragraf ini akan menggunakan
font Arial. Arial adalah salah satu font yang umum digunakan pada
Windows.</p>

<p style="font-family: 'Times New Roman'">Ini adalah paragraf yang
menggunakan font Times New Roman. Font ini juga umum digunakan dalam
penulisan teks. Perhatikan penulisan Times New Roman pada style CSS,
ia diapit dengan tanda petik karena mengandung lebih dari satu kata.</p>

</body>
</html>
```

Hasilnya:


  {{< image 
  src="images/content/tutorial/html/paragraf-font.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

 ### Apa Selanjutnya?

Pada tutorial ini, kita sudah belajar beberapa tag:

- `<p>` untuk membuat paragraf;
- `<hr>` untuk membuat garis lurus;
- `<br>` untuk membuat baris baru;
- `<div>` untuk membuat paragraf di luar artikel atau layout;
- `<pre>` untuk membuat paragraf dengan format yang sudah ditentukan.
Ini adalah tag-tag dasar yang perlu diingat dalam membuat paragraf di HTML.

Selanjutnya, silakan pelajari tentang:

- [Belajar HTML #04: Membuat Heading di HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}