---
title: "Belajar HTML #06: Text Formatting di HTML (Bold, Italic, Underline, dll)"
linkTitle: "Belajar HTML #06: Text Formatting di HTML"
author: "default"
date: 2025-07-10
weight: 6
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

Coba perhatikan kedua paragraf ini:

  {{< image 
  src="images/content/tutorial/html/plain-vs-rich.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Kamu lebih tertarik baca yang mana?

..yang terformat, atau yang polos (*plain text*)?

Teks yang terformat akan lebih mudah dibaca, karena ada **penegasan** seperti **teks tebal**, *miring*, dan <u>garis bawah</u>.

Saat kita mencari kata atau kalimat penting.. mata kita akan lebih mudah menemukannya pada teks yang terformat dibandingkan plain text.

Karena itu, dalam membuat web.. ada baiknya menggunakan format teks.

Nah, di HTML terdapat tag-tag yang khusus digunakan untuk text formatting.

Apa saja itu?

Mari kita bahas..

Membuat Teks Tebal
Teks tebal biasanya digunakan untuk memberikan penegasan pada teks tertentu, misalnya seperti judul, subjudul, huruf penting, dll.

Tag yang digunakan untuk membuat teks tebal di HTML adalah tag `<b>` (*bold*) dan tag `<strong>`. Kamu bebas mau pakai yang mana saja, hasilnya akan sama-sama tebal.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Tebal di HTML</title>
</head>
<body>
  <h1>Text Tebal di HTML</h1>
  <p>
    <strong>Teks formatting itu penting!</strong> Karena dapat membuat tulisan 
    terlihat lebih menarik sehingga akan membuat <b>pengunjung senang</b> 
    membacanya.
  </p>
</body>
</html>
```

Hasilnya:
  
  {{< image 
  src="images/content/tutorial/html/contoh-bold.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

###  Membuat Teks Miring

Teks miring biasanya digunakan untuk menegaskan sebuah kata atau istilah baru. Teks miring di HTML dapat kita buat dengan tag `<i>` (*italic*) dan juga tag `<em>` (emphasis).

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Miring di HTML</title>
</head>
<body>
  <h1>Text Miring di HTML</h1>
  <p>
    Gunakan <i>teks miring</i> untuk memberikan penekanan pada teks,
    sehingga akan <em>menarik perhatian</em> pembaca. Biasanya
    digunakan pada <i>istilah asing</i> atau kata serapan dari 
    <em>bahasa daerah</em>.
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-italic.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Membuat Garis Bawah pada Teks

Garis bawah biasanya digunakan untuk menandai teks yang disisipkan atau teks yang memiliki arti penting dibandingkan teks normal lainnya.

Garis bawah di HTML dapat kita buat dengan tag `<u>` (underline) atau juga tag `<ins>` (insert).

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Garis Bawah di HTML</title>
</head>
<body>
  <h1>Garis Bawah di HTML</h1>
  <p>
    <u>Text formatting itu penting</u>, karena dapat membuat teks terlihat
    lebih menarik dibandingkan <del>text biasa</del> <ins>plain text</ins>.
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-underline.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pada contoh di atas, kita menggunakan tag `<del>` untuk membuat teks tercoret. Lalu diikuti dengan teks yang ditambahkan (*insert*).

### Membuat Teks Tercoret

Teks tercoret memiliki arti teks yang dihapus. Biasanya untuk memberitahu pembaca bahwa teks tersebut tidak dipakai atau dihapus.

Tag untuk membuat teks tercoret di HTML adalah tag `<s>` (*strikethrough*) atau bisa juga dengan tag `<del>` (*delete*).

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Tercoret di HTML</title>
</head>
<body>
  <h1>Text Tercoret di HTML</h1>
  <p>
    Coretlah teks yang tidak <s>dibutuhkan</s> terpakai, ini bisa memberitahu 
    pembaca tentang perbaikan dari teks tersebut. Kadang juga teks <del>tercoret</del> 
    <ins>yang dicoret</ins>, diperbaiki dengan menambahkan teks dengan garis bawah.
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-del.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Membuat Pangkat di HTML

Pangkat biasanya digunakan pada rumus. Ada dua jenis pangkat yang bisa dibuat di HTML, yakni pangkat yang berada di atas (*superscript*) dan pangkat di bawah (*subscript*).

Tag untuk membuat pangkat di HTML adalah tag `<sup>` dan `<sub>`.

- `<sup>` untuk membuat pangkat di atas
- `<sub>` untuk membuat pangkat di bawah

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Membuat Pangkat di HTML</title>
</head>
<body>
  <h1>Membuat Pangkat di HTML</h1>
  <p>
    Rumus luas persegi adalah S<sup>2</sup>, di mana <i>S</i> adalah sisi dari 
    persegi. Lalu O<sub>2</sub> adalah rumus kimia dari oksigen.
  </p>
</body>
</html>
```

  {{< image 
  src="images/content/tutorial/html/contoh-pangkat.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Membuat Marker untuk Teks

Marker bisanya digunakan untuk menandai teks yang penting atau kata kunci yang penting. Marker di HTML dapat kita buat dengan tag `<mark>`.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Membuat marker teks di HTML</title>
</head>
<body>
  <h1>Membuat marker teks di HTML</h1>
  <p>
    Marker biasanya digunakan untuk menandai bagian teks yang penting.
    Kalau di dunia nyata, kita <mark>menggunakan stabilo</mark> untuk 
    membuat marker.
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-marker.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Warna default marker adalah kuning. Warna ini bisa kita ubah dengan style CSS.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Membuat marker teks di HTML</title>
</head>
<body>
  <h1>Membuat marker teks di HTML</h1>
  <p>
    Marker biasanya digunakan untuk menandai bagian teks yang penting.
    Kalau di dunia nyata, kita <mark style="background-color: pink">menggunakan stabilo</mark> untuk 
    membuat marker.
  </p>
</body>
</html>
```

Maka hasilnya, marker akan berwarna pink:

  {{< image 
  src="images/content/tutorial/html/marker-pink.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Teks Formatting untuk Komputer

Selain dari teks formatting di atas, ada juga teks formatting yang khusus untuk menandai teks yang berasal dari komputer. Berikut ini beberapa tag yang digunakan untuk memformat teks dari komputer:

- `<code>` untuk menandai bagian dari kode program;
- `<samp>` untuk menandai output dari program komputer;
- `<kbd>` untuk menandai tombol keyboard;
- `<var>` untuk menandai sebuah variabel;
- `<pre>` untuk preformatting teks.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Formatting untuk Teks dari komputer</title>
</head>
<body>
  <h1>Text Formatting untuk Teks dari komputer</h1>
  <p>
    Perintah javascript untuk menampilkan teks ke console adalah
    <code>console.log()</code>. Kita juga bisa menampilkan isi variabel
    dengan fungsi ini. Misalkan kita punya variabel <var>name</var>,
    maka kode programnya bisa ditulis seperti ini:

    <pre>
      var name = "Petani Kode";
      console.log(name);
    </pre>

    Maka hasil outputnya: <samp>Petani Kode</samp>
  </p>
  <p>
    Untuk menjalankan ulang program, lakukan refresh dengan menekan tombol
    <kbd>F5</kbd>
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-teks-komputer.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Menggabungkan Format

Apakah format teks dapat digabungkan?

Misalkan kita ingin membuat teks tebal dan garis bawah, apakah bisa?

Tentu saja bisa.

Caranya:

Ya tinggal dipakai saja tag-tagnya, misal mau menggabungkan bold dengan *underline*.. maka kita tinggal pakai tag `<b>` dan `<u>`.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Penggabungan Format Teks di HTML</title>
</head>
<body>
  <h1>Penggabungan Format Teks di HTML</h1>
  <p>
    Penggabungan format teks bisa dilakukan dengan menuliskan tag-tag yang
    akan dipakai. Misalkan <b><u>tebal dan garis bawah</u></b>, maka kita
    tinggal pakai tag <b>b</b> dan tag <b>u</b>.
  </p>
</body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-penggabungan.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Dalam menggabungkan format, kamu perlu memperhatikan tag mana yang ditulis duluan dan yang terakhir.

Jangan sampai salah menutup..

Yang dibuka duluan, harus ditutup terakhir.

Ingatlah konsep **“ibu memasak ubi”**:

{{< embed url="https://www.youtube.com/watch?v=MaaMdWyek6Y" >}}

### Apa Selanjutnya?

Teks formatting akan sering kita pakai dalam membuat konten di web, pastikan kamu mengingat tag-tag yang digunakan untuk teks formatting.

Selanjutnya silakan pelajari tentang:

- [Belajar HTML #07: Membuat Link pada HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}