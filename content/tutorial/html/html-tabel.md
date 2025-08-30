---
title: "Belajar HTML #10: Cara Membuat Tabel di HTML"
linkTitle: "Belajar HTML #10: Membuat Tabel pada HTML"
author: "default"
date: 2025-07-10
weight: 10
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html.png"
image: "/images/cover/html.png"
show_tutorial_list: true
completed: false
current: true 
coming_soon: true  # untuk item "Coming soon"
description: "Belajar membuat tabel dengan HTML dan CSS untuk pemula."
---

Salah satu cara atau format menampilkan informasi dalam web adalah dengan tabel.

Tabel terdiri dari 4 unsur utama:

1. Baris
2. Kolom
3. Sel
4. Garis

  {{< image 
  src="images/content/tutorial/html/tabel.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Lalu, bagaimana cara membuat tabel di HTML?

  Kita bisa membuatnya dengan beberapa tag yang di sediakan di HTML.

  ## Tag untuk Membuat Tabel d HTML

  Ada beberapa tag yang haru diinget untuk membuat tabel di html:

  1. Tag `<table>` untuk membungkus tabelnya
  2. Tag `<thead>` untuk membungkus bagian kepala tabel
  3. Tag `<tbody>` untuk membungkus bagian body dari tabel
  4. Tag `<tr>` (*tabel row*) untuk membuat baris
  5. Tag `<td>` (*table data*) untuk membuat sel

Tag yang paling penting untuk diingat adalah tag `<table>`, `<tr>`, dan `<td>`. Sementara tag yang lain adalah tambahan (opsional), boleh digunakan boleh tidak.

Mari kita lihat contohnya:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Belajar Membuat Tabel HTML</title>
</head>
<body>

    <table>
        <tr>
            <td>Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr>
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>

</body>
</html>
```

{{< image 
  src="images/content/tutorial/html/tabel-tanpa-garis.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Kenapa tidak ada garisny?

Iya, Karena kita tidak menambhkan atribut `border` pada tabelnya.

Agar Tabelnya memiliki garis, Silahkan tambahkan atribut `border="1"` di dalam tag `<table>`.

Sehingga akan menjadi seperti ini:

```html
    <table boder="1">
        <tr>
            <td>Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr>
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>
```

Nilai `"1"` pada atribut `border` adalah ukuran garisnya. Semakin besar ukurannya, maka akan semakin besar pula ukuran garisnya.

Nilai `"1"` adalah ukuran garis yang paling kecil.

Hasilnya akan seperti ini

{{< image 
  src="images/content/tutorial/html/tabel-garis.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

## Mangatur Jarak Sel dengan Cellpadding

Atribut `cellpadding` adalah atribut untuk mengatur jarak teks dengan garis di dalam sel.

Atribut ini dapat kita berikan kepada tag `<table>`.

Contoh:

```html
    <table border="1" cellpadding="10">
        <tr>
            <td>Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr>
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>
```

Nilai "10" pada atribut cellpadding adalah ukuran jarak antara teks sel dengan garis.

Maka hasilnya:

{{< image 
  src="images/content/tutorial/html/cellpadding.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

##  Menambahkan Warna pada Sel dan Baris
Untuk menambahkan warna pada sel dan baris, kita bisa menambahkan atribut `bgcolor` di dalam tag `<td>` (untuk sel) atau `<tr>` (untuk baris).

Contoh:

```html
    <table border="1" cellpadding="10">
        <tr>
            <td bgcolor="yellow">Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr bgcolor="#00ff80">
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>
```

{{< image 
  src="images/content/tutorial/html/cellpadding.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Nilai atribut `bgcolor` bisa kita isi dengan kode warna dalam heksadesimal atau nama warna dalam bahasa inggris.

Maka hasilnya akan seperti ini:

{{< image 
  src="images/content/tutorial/html/warna.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

##  Menggabungkan Sel Tabel
Atribut yang digunakan untuk menggabungkan sel tabel adalah rowspan dan colspan:

rowspan untuk menggabungkan baris;
colspan untuk menggabungkan kolom.
Atribut ini bisa kita berikan kepada tag `<td>` atau `<th>`.

{{< image 
  src="images/content/tutorial/html/rowspan-colspan.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Mari kita lihat contohnya:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Belajar Membuat Tabel HTML</title>
</head>
<body>
    <table border="1">
        <tr>
            <th rowspan="2" bgcolor="yellow">Bulan</th>
            <th colspan="2" bgcolor="#00ff80">Hasil Panen</th>
        </tr>
        <tr>
            <th>Padi</th>
            <th>Kacang</th>
        </tr>
        <tr>
            <td>Januari</td>
            <td>500 Kg</td>
            <td>231 Kg</td>
        </tr>
        <tr>
            <td>Februari</td>
            <td>342 Kg</td>
            <td>423 Kg</td>
        </tr>
        <tr>
            <td>Maret</td>
            <td>432 Kg</td>
            <td>124 Kg</td>
        </tr>
        <tr>
            <td>April</td>
            <td>453 Kg</td>
            <td>523 Kg</td>
        </tr>
    </table>

</body>
</html>
```

Hasilnya:

{{< image 
  src="images/content/tutorial/html/tabel-rowspan-colspan.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

## Menyisipkan Elemen yang Lain ke dalam Sel
Di salam sel <td> dan <th>, kita bisa menyisipkan elemen HTML yang lain, seperti gambar, link, video, list, dsb.

Contoh:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Belajar Membuat Tabel HTML</title>
</head>
<body>
    <table border="1">
        <tr>
            <th colspan="3" bgcolor="yellow">Produk Unggulan</th>
        </tr>
        <tr>
            <td rowspan="4">
                <img src="https://www.petanikode.com/img/bibit.png" width="200" />
            </td>
        </tr>
        <tr>
            <td>Nama</td>
            <td>Benih Kode</td>
        </tr>
        <tr>
            <td>Harga</td>
            <td>Rp 192.000</td>
        </tr>
        <tr>
            <td>Fitur</td>
            <td>
                <ul>
                    <li>Dilengkapi Dokumentasi</li>
                    <li>Ukuran: 31MB</li>
                    <li>Masa Tanam: 6 Bulan</li>
                    <li>Lisensi: MIT</li>
                </ul>
            </td>
        </tr>
    </table>

</body>
</html>
```

{{< image 
  src="images/content/tutorial/html/elemen-dalam-tabel.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

## Apa Selanjutnya?
Menurut saya, bagian tersulit saat membuat tabel di HTML adalah saat menggabungkan sel. Karena kita harus teliti, berapa ukuran sel yang akan digabungkan dengan `rowspan` dan `colspan`.

Saran saya:

Sering-sering latihan dengan contoh kasus tertentu. Coba lihat tabel-tabel yang ada di sekeliling kita, lalu coba buat tabel tersebut dalam HTML.

Berikutnya, silakan pelajari:

- [Belajar HTML #11: Membuat Form pada HTML](../html-form)