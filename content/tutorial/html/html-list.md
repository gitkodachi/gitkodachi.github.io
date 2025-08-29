---
# content/tutorial/html-untuk-pemula/tag-element-atribut.md
title: "Belajar HTML #09: Cara Membuat List di HTML"
linkTitle: "Belajar HTML #09: Membuat List pada HTML"
author: "default"
author: "default"
date: 2025-06-27
weight: 9
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/img.png"
image: "/images/cover/img.png"
show_tutorial_list: true
completed: false
current: true 
description: "Pada tutorial ini, kita akan belajar cara List di HTML."
---

Jika kamu diminta menuliskan daftar barang yang harus dibeli dengan HTML...

...apa yang akan kamu lakukan?

Mungkin kamu bisa membuat seperti in:

```html
<h1>Daftar Barang untuk dibeli:</h1>
<p>- Flash disk 64GB</p>
<p>- Kabel Data USB 3.0</p>
<p>- Kertas A4</p>
```

Hsilnya memang akan terlihat seperti ini:

  {{< image 
  src="images/content/tutorial/html/list-paragraf.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

Tapi, ini bukalan cara membuat list yang benar di HTML.

### Elemen List di HTML

HTML sudah menyediakan elemen untuk membuat list. Ada tiga macam jenis list yang bisa dibuat di HTML:
1. `Ordered List` adalah list yang berurut;
2. `Unordered list` adalah list yang terurut;
3. dan `Descripton List` adalah list yang bersisi definisi.

Mari kita bahas satu per satu...

#### 1. Ordered List di HTML
*Ordered list* dibuat dengan tag `<ol>`. Lalu di dalamnya diisi dengan item-item yang akan di masukan ke dalam list. Item dibuat dengan tag `<li>`(*list item).

  {{< image 
  src="images/content/tutorial/html/ol.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Membuat Ordered List</title>
</head>

<body>
    <h1>Buah Favoritku:</h1>
    <ol>
        <li>Jeruk</li>
        <li>Durian</li>
        <li>Pisang</li>
        <li>Pepaya</li>
        <li>Mangga</li>
    </ol>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-ol.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

List di atas diurutkan berdasarkan angka dari `1`, `2`, `3`, sampai `5`.

Lalu bagaimana kalau kita ingin menggunakan huruf seperti `a`, `b`, `c` atau angka romawi seperti `I`, `II`, `III`?

Gampang..

Untuk membuat yang seperti itu, kita bisa menggunakan atribut `type` pada tag `ol` dan berikut ini nilai yang bisa diberikan:

- `a` untuk alfabet `a`, `b`, `c` dan seterusnya.
- `A` untuk alafabet `A`, `B`, `C` dan seterusnya.
- `i` untuk angka romawi `i`, `ii`, `iii` dan seterusnya.
- `I` untuk angka romawi `I`, `II`, `III`dan seterusnya.

Contoh:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Ordered List dengan Atribut Type</title>
</head>

<body>
    <h3>List dengan type alfabet</h3>
    <ol type='a'>
        <li>Tutorial List di HTML</li>
        <li>Tutorial Link di HTML</li>
        <li>Tutorial Tabel di HTML</li>
    </ol>
    <h3>List dengan type alfabet kapital (huruf besar)</h3>
    <ol type='A'>
        <li>Tutorial List di HTML</li>
        <li>Tutorial Link di HTML</li>
        <li>Tutorial Tabel di HTML</li>
    </ol>
    <h3>List dengan type romawi</h3>
    <ol type='i'>
        <li>Tutorial List di HTML</li>
        <li>Tutorial Link di HTML</li>
        <li>Tutorial Tabel di HTML</li>
    </ol>
    <h3>List dengan type romawi kapital</h3>
    <ol type='I'>
        <li>Tutorial List di HTML</li>
        <li>Tutorial Link di HTML</li>
        <li>Tutorial Tabel di HTML</li>
    </ol>
</body>

</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/ol-type.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

#### 2. Unordered List HTML
*Unordered* list adalah list yang tak terurut yang menggunakan simbol-simbol pada item-nya. *Unordered list* dibuat dengan tag `<ul>` dan untuk item-nya dibuat juga dengan tag `<li>`.

  {{< image 
  src="images/content/tutorial/html/ul.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

Contohnya:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Membuat Unordered List</title>
</head>

<body>
    <h1>Bahasa Pemrograman untuk dipelajari:</h1>
    <ul>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Python</li>
        <li>Kotlin</li>
    </ul>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-ul.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

Secara default simbol yang digunakan oleh unordered list adalah lingkaran kecil (disc). Kita juga bisa menggantinya dengan atribut `type`.

Berikut ini nilai yang bisa diberikan untuk atribut `type`:

- `square` untuk simbol persegi;
- `disc` (default) untuk simbol lingkaran disc;
- `none` tidak memakai simbol;
- `circle` untuk simbol lingkaran;

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Membuat Unordered List</title>
</head>

<body>
    <h1>Bahasa Pemrograman untuk dipelajari:</h1>
    <ul type="square">
        <li>Javascript</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Python</li>
        <li>Kotlin</li>
    </ul>
    <h1>Framework untuk dipelajari:</h1>
    <ul type="circle">
        <li>Vuejs</li>
        <li>Svelte</li>
        <li>Reactjs</li>
    </ul>
    <h1>Tools untuk dipelajari:</h1>
    <ul type="none">
        <li>Gulp</li>
        <li>NPM</li>
        <li>Js Lint</li>
    </ul>
    <h1>Pelajari juga:</h1>
    <ul type="disc">
        <li>JSON</li>
        <li>XML</li>
        <li>Markdown</li>
    </ul>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/ul-type.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

Selain menggunakan type, kita juga bisa menggunakan gambar.

ini dilakukan dengan style CSS.

Contohya:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Membuat Unordered List</title>
</head>

<body>
    <h1>Bahasa Pemrograman untuk dipelajari:</h1>
    <ul style="list-style-image: url(https://assets.ubuntu.com/sites/ubuntu/latest/u/img/favicon.ico)">
        <li>Javascript</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Python</li>
        <li>Kotlin</li>
    </ul>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/ul-image.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

#### 3. Description List di HTML

*Description List* adalah list yang berisi deskripsi atau penjelasan dari sesuatu.

Ada tiga tag yang digunakan untuk membuat description list:

- `<dl>` (description list) tag untuk memulai description list;
- `<dt>` (description term) tag untuk membuat kata yang akan dideskripsikan;
- `<dd>` (description description) tag untuk membuat penjelasan dari kata.

Format penulisannya seperti ini:

  {{< image 
  src="images/content/tutorial/html/dl.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

Contohnya:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Membuat Description List</title>
</head>

<body>
    <h1>Daftar istilah:</h1>
    <dl>
        <dt>Kopi</dt>
        <dd>Sebuah minuman berwarna hitam. Menurut pendapat lain kopi adalah air yang dimasak sampai gosong.</dd>
        <dt>Kopi Black Magic</dt>
        <dd>Kopi hitam atau kopi tradisional yang dibuat dengan mantra-mantra.</dd>
        <dt>White Coffee</dt>
        <dd>Kopi berwarna putih, kandungan kafeinnya sedikit.</dd>
        <dt>Kopi++</dt>
        <dd>Kopi ini mampu meningkatkan imajinasi 99 kali lipat.</dd>
    </dl>
</body>

</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-dl.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

### List di dalam List (Nested List)

List juga dapat dibuat di dalam list, misalkan kita ingin menggabungkan ordered list dengan unordered list.

Caranya, list yang di dalam ditulis di dalam tag `<li>`.

Contoh:

```html
<!DOCTYPE html>
<html lang='en'>

<head>
    <title>List di dalam List</title>
</head>

<body>
    <h1>Distro Linux dan Keluarganya</h1>
    <ol>
        <li>Debian
            <ul>
                <li>Ubuntu</li>
                <li>Mint</li>
                <li>elementaryOS</li>
            </ul>
        </li>
        <li>RedHat
            <ul>
                <li>Fedora</li>
            </ul>
        </li>
        <li>Slackware</li>
    </ol>
</body>

</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/list-nested.png" 
  alt="Deskripsi gambar" 
  caption="" 
  >}}

### Apa Selanjutnya?
Nah, sampai di sini dulu tutorial pertama ini..

Jika ada yang belum jelas, bisa ditanyakan melalui komentar.

Berikutnya silakan pelajari tentang definisi tag, elemen, dan atribut:

- [Belajar HTML #10: Mengenal tag, elemen, dan atribut dalam HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}
