---
title: "Belajar HTML #05: Cara Membuat Komentar di HTML"
linkTitle: "Belajar HTML #05: Cara Membuat Komentar"
date: 2025-07-10
weight: 5
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

Sampai ditahap ini.. apakah kamu sudah ingat semua tag HTML yang dipelajari?

Sudah lupa?

Tidak apa-apa, itu adalah sifat dari manusia. Otak kita memang tidak seperti komputer yang bisa mengingat dengan cepat dan permanen.

Karena itu, kita membutuhkan catatan agar bisa mengingat.

Coba perhatikan ini:

  {{< image 
  src="images/content/tutorial/html/komentar-office.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Yang saya lingkari merah itu adalah komentar atau catatan yang akan mengingatkan saya tentang pekerjaan yang harus dilakukan di bagian tersebut.

Karena tulisan saya sangat panjang, jadi komentar ini sangatlah berguna.

Nah, di HTML juga kita akan menemukan hal yang demikian. Nantinya, dokumen HTML kita akan semakin banyak dan panjang.

Agar bisa mengingat strukturnya, sebaiknya ditambahkan komentar.

Bagaimana cara membuatnya?

Mari kita pelajari..

### Apa tiu Komentar dalam HTML?

Komentar adalah elemen yang akan diabaikan oleh browser. Ia tidak akan ditampilkan di dalam web.

Komentar biasanya digunakan untuk memberikan informasi tambahan pada kode HTML dan kadang juga digunakan untuk menon-aktifkan beberapa kode HTML.

### Cara Membuat komentar diHTML

Komentar dapat kita buat dengan tag `<!-- -->`.

  {{< image 
  src="images/content/tutorial/html/komentar.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Belajar Membuat Komentar di HTML</title>
    </head>
    <body>
      <!-- ini adalah komentar -->
      <p>Hello World!</p>
      <!-- ini juga komentar
      dan ditulis dalam dua baris -->
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/contoh-hasil-komentar.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Komentar tidak akan ditampilkan oleh browser, tapi kita bisa melihatnya dengan cara view source.

Klik kanan pada browser, lalu pilih view page source.

  {{< image 
  src="images/content/tutorial/html/view-source.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Jalan Pintas untuk Membuat Komentar

Jika kamu menggunakan teks editor [Visual Studio Code](https://www.petanikode.com/text-editor-vscode), kamu bisa membuat komentar dengan menekan `Ctrl+/`.

  {{< image 
  src="images/content/tutorial/html/komentar-vscode.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Cara ini lebih cepat dibandingkan dengan harus menulis secara manual tag komentarnya.


### Atribut untuk Komentar

Komentar tidak bisa ditambahkan atribut. Jika kamu mencoba menambahkannya, itu akan sia-sia. Soalnya komentar merupakan elemen yang tidak akan diproses oleh browser.

### Fungsi Komentar

Komentar memang tidak akan ditampilkan di web, namun bukan berarti ia tidak memiliki fungsi.

Berikut ini beberapa fungsi komentar:

#### 1. Komentar untuk Menjelaskan Arti Tag
Saat belajar HTML, kamu mungkin akan kesulitan mengingat fungsi dan arti dari tag HTML. Karena itu, kamu harus membuat catatan untuk mengingatnya.

Ini bisa kamu lakukan dengan mencatat di buku, maupun media lain. Tapi, alangkah baiknya memanfaatkan komentar untuk mencatat.

Contoh:

```html
<!DOCTYPE html> <!-- ini tag untuk menentukan type dokumen -->
<html lang="en">
    <head>
      <title>Belajar Membuat Komentar di HTML</title>
        <!-- tag title berfungsi untuk membuat judul web dan akan ditampilkan
        pada title bar di browser -->
    </head>
    <body>
      <p>Ini tag paragraf yang aktif</p>
      <!-- 
        tag <p> adalah tag untuk membuat paragraf 
      -->
    </body>
</html>
```

Jika kita lupa, kita bisa membuka kembali dan mempelajari kode tersebut.

Tapi ingat, jangan buat komentar seperti ini pada proyek websitemu. Karena akan sangat mengganggu dan membuat kode sulit terbaca.

Sebaiknya, komentar yang berisi penjelasan semacam ini dibuat pada kode HTML yang kita pakai untuk belajar. Bukan kode HTML untuk web asli.

#### 2. Komentar untuk Menyimpan Todo List
Komentar kadang sering digunakan juga untuk menyimpan todo list, ini akan membantu kita mengingat apa yang harus dikerjakan pada bagian HTML tertentu.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Belajar Membuat Komentar di HTML</title>

        <!-- TODO: Tambahkan tag meta di sini -->
    </head>
    <body>
      <h1>Komentar di HTML</h1>

      <!-- TODO: Buat konten web di ini -->
    </body>
</html>
```


Jika kita sudah mengerjakan apa yang dituliskan di todo list tersebut, kita bisa hapus komentarnya.

#### 3. Komentar untuk Menonaktifkan Kode HTML
Komentar kadang sering digunakan untuk menon-aktifkan kode HTML.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Belajar Membuat Komentar di HTML</title>
    </head>
    <body>
      <p>Ini tag paragraf yang aktif</p>
      <!-- 
        <p>ini tag paragraf yang tidak aktif
        karena berada di dalam komentar
        </p> 
      -->
      <p>ini paragraf yang lainnya</p>
    </body>
</html>
```

Hasilnya:

  {{< image 
  src="images/content/tutorial/html/disable-code.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Apa Selanjutnya?

Itulah cara membuat komentar di HTML, intinya kamu hanya perlu mengingat tag untuk membuatnya.

- [Belajar HTML #06: Text Formatting di HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}