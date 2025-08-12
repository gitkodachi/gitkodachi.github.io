---
# content/tutorial/html-untuk-pemula/tag-element-atribut.md
title: "Belajar HTML #02: Memahami Tag, Element, dan Atribut dalam HTML"
linkTitle: "Belajar HTML #02: Mengenal Tag, Elemen, dan Atribut dalam HTML"
author: "default"
date: 2025-06-27
weight: 2
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html.png"
image: "/images/cover/html.png"
show_tutorial_list: true
completed: false
current: true 
description: "Memahami tag, elemen, dan atribut dasar dalam HTML beserta fungsinya."
---

Tag, elemen, dan atribut merupakan tiga bagian penting yang ada di dalam HTML. Bagi kamu yang baru belajar HTML, wajib hukumnya untuk mengetahui ketiga Hal ini.

Apa itu Tag?

Apa itu Elemen?

Apa itu Atribut?

Serta apa perbedaan Tag, Elemen, dan Atribut?

Mari kita bahas…

### Apa itu Tag?

Tag adalah sebuah **penanda awalan** dan akhiran dari sebuah **elemen** di HTML. Tag dibuat dengan kurung sudut (<...>), lalu di dalamnya berisi nama tag dan kadang juga ditambahkan dengan atribut.

untuk membuat halaman web berikut[^1]

[^1]: https://id.wikipedia.org/wiki/HTML

Contoh: `<p>`, `<a>`, `<body>`, `<head>`, dan sebagainya.

Tag selalu ditulis berpasangan. Ada tag pembuka dan ada tag penutupnya. Namun, ada juga beberapa [tag yang tidak memiliki pasangan penutup](#). Tag penutup ditulis dengan menambahkan garis miring (/) di depan nama tag.

  {{< image 
  src="images/content/tutorial/html/tag.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setiap tag memiliki fungsi masing-masing. Ada yang digunakan untuk membuat judul, membuat link, membuat paragraf, heading, dan lain-lain.

Masih ingat sejarah HTML?

Dulu.. awalnya HTML cuma punya **18 tag**. Sekarang HTML sudah punya sekitar **250** tag.

Wah! banyak ya.

Apa semua tag ini harus kita hafal?

Jawabannya:

**Tidak harus**, saja juga tidak bisa menghafal semuanya. Cukup ketahui tag-tag dasar saja.

Berikut ini daftar tag-tag dasar, yang menurut saya harus kamu ingat.


|Tag	      |Fungsi                                           |
|:----------|:------------------------------------------------|
|`<html>`	  |untuk memulai dokumen HTML                       |
|`<head>`	  |untuk membuat bagian head                        |
|`<body>`	  |untuk membuat bagian body                        |
|`<h1>`     |sampai `<h6>`	untuk membuat heading pada artikel|
|`<p>`	    |untuk membuat paragraf                           |
|`<-!-- -->`|untuk membuat komentar                           |

Beberapa tag ini sudah kita coba pada [tutorial pertama](#) dan juga ada yang belum.

Tenang saja.. Nanti juga saya akan perkenalkan tag-tag lain yang umum digunakan dalam pembuatan web.

Untuk saat ini, cukup pahami: **Apa itu tag dan cara menulisnya**.

#### 1. Tag-tag wajib

Ada beberapa tag yang wajib ada di HTML. Tag ini harus kamu tulis.. kalau tidak, bisa jadi kode HTML-mu akan error menurut validator W3C.

Berikut ini daftar tag yang wajib ada di HTML:

- `<!DOCTYPE html>` — untuk deklarasi type dokumen;
- `<html>` — tag utama dalam HTML;
- `<head>` — untuk bagian kepala dari dokumen;
- `<title>` — untuk judul web;
- `<body>` — untuk bagian body dari dokumen.

#### 2. Gunakan Huruf Kecil

Hindari menggunakan huruf besar dalam menuliskan nama tag dan sebaiknya gunakan huruf kecil saja.

Huruf kecil lebih gampang diketik dan juga akan membuat kode HTML terlihat lebih bersih dan rapi.

Contoh: (bagus)

```html
<body>
<p>Belajar tentang tag di HTML</p>
</body> 
```

contoh: (buruk)

```html
<BODY>
<P>Belajar tentang tag di HTML</P>
</BODY> 
```

Tapi khusus untuk tag `<!DOCTYPE html>`.. ia ditulis dengan huruf besar. Sebenarnya bisa juga dengan huruf kecil dan akan valid menurut validator W3C.

Tapi untuk dokumen XHTML, menggunakan **DOCTYPE** dengan huruf kecil akan mengakibatkan error.

#### 3. Pastikan Menutup Tag dengan benar

Tag HTML nantinya akan ditulis bertumpuk-tumpuk. Artinya, di dalam tag ada tag lagi. Kadang kita sering salah dalam menutup tag yang bertumpuk ini. Akibatnya, kode HTML kita tidak valid.

Tapi tenang saja.. saya punya resep agar kamu mudah mengingatnya:

{{< embed url="https://www.youtube.com/watch?v=5GnFZ8XpMak&t=585s" >}}

Jika kamu paham maksud dari jokes di atas, maka bagus.. saya tidak perlu jelaskan lagi.

Tapi kalau belum paham, berikut ini penjelasannya:

Tag yang pertama dibuat, harus ditutup terakhir. Bukan ditutup pertama.

Contoh:

```html
<i><b><u>memasak</u></b></i>
```

Tag `<i>` ditutup terakhir, karena ia yang ditulis pertama. Lalu tag `</u>` ditutup pertama kali karena ia berada di dalam tag `<b>` dan `<i>`.

### Apa itu Elemen ?

Elemen dalam HTML adalah sebuah komponen yang menyusun dokumen HTML. Elemen kadang juga disebut sebagai node, karena ia merupakan salah satu jenis node yang menyusun dokumen HTML dalam diagram HTML tree.

  {{< image 
  src="images/content/tutorial/html/pohon-html.gif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Pada diagram tersebut, terdapat tiga macam node.. yakni: **Node elemen**, **Node atribut**, dan **Node teks**.

Elemen dibentuk dari **tag pembuka**, **isi tag**, dan t**ag penutup**. Kadang juga ditambahkan beberapa atribut.

Contoh:

  {{< image 
  src="images/content/tutorial/html/element.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pada contoh di atas, terdapat satu elemen `<p>` dengan atribut align="center" dan memiliki isi berupa teks, yakni Hello World!.

Elemen tidak selalu berisi teks, kadang ia juga akan berisi elemen lain. Ini biasanya kita sebut dengan nested element atau elemen di dalam elemen.

Bila digambarkan dalam bentuk kotak persegi, maka akan terlihat seperti ini:

  {{< image 
  src="images/content/tutorial/html/element-html.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Elemen HTML ada banyak jenisnya. Ada elemen khusus untuk teks, ada elemen untuk multimedia, script, tabel, metadata, dll. Nanti kita akan pelajari ini secara bertahap. Semua jenis elemen HTML bisa kamu baca di sini: [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

Beberapa elemen HTML kadang ditambahkan atribut sebagai pelengkap.

### Apa itu Atribut ?

Atribut adalah kata kunci khusus yang berada di dalam tag pembuka. Atribut juga disebut sebagai modifier yang akan menentukan perilaku dari elemen.

  {{< image 
  src="images/content/tutorial/html/atribut.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Atribut dapat ditambahkan pada elemen manapun. Ada juga elemen yang mewajibkan menggunakan atribut seperti elemen `<a>`, `<img>`, `<video>`, dll.

Contoh:

```html
<a href="https://petanikode.com">Petani Kode.com</a>
```

Tag `<a>` adalah tag untuk membuat link. Tag ini mewajibkan menambahkan atribut href untuk menyatakan halaman tujuan dari link.

Jumlah atribut pada elemen bisa lebih dari satu.

Contoh:

```html
<img src="gambar.jpg" width="100" height="100" />
```

Atribut src adalah atribut khusus untuk tag <img> yang fungsinya untuk menentukan gambar yang akan ditampilkan. Lalu atribut width dan height adalah atribut yang mengatur ukurannya.

### Jenis-jenis Atribut HTMl

Tiap-tiap elemen kadang memiliki atribut khusus yang hanya bisa digunakan pada elemen tersebut. Ada juga atribut yang bersifat global dan bisa ditambahkan ke semua elemen.

Berikut ini jenis-jenis atribut yang harus diketahui:


|**Nama Atribut**| **Deskripsi atau fungsi**                                                |
|:---------------|:-------------------------------------------------------------------------|
|accesskey	     | Menentukan tombol shortcut untuk mengaktifkan atau fokus pada elemen     |
|class	         | Menentukan class CSS yang akan digunakan                                 |
|contenteditable | Menentukan isi elemen bisa diedit atau tidak                             |
|data-*	         | Digunakan untuk menyimpan data                                           |
|dir	           | Menentukan arah teks dari elemen (kiri ke kanan atau sebaliknya)         |
|draggable	     | Menentukan apakah elemen bisa di drag atau tidak                         |
|hidden	         | untuk menyembunyikan elemen                                              |
|id	             | Menentukan id unik untuk elemen                                          |
|lang	           | Menentukan bahasa yang digunakan untuk isi elemen                        |
|spellcheck	     | Menentukan apakah isi elemen harus dilakukan pengejaan grammar atau tudak|
|style	         | Menentukan inline CSS untuk elemen                                       |
|tabindex	       | Menentukan urutan atau indeks tab dari elemen (saat tombol tab ditekan)  |
|title	         | Menentukan informasi tambahan tentang elemen                             |
|translate	     | Menentukan apakah konten dari elemen bisa diterjemahkan atau tidak       |

#### 2. Atribut Event

Atribut event adalah atribut yang digunakan untuk menentukan aksi yang akan dilakukan saat terjadi sesuatu pada elemen. Atribut ini nanti akan banyak digunakan pada [pemrograman Javascript](#).

Berikut ini daftar atribut event saat terjadi sesuatu pada Jendela browser:

|**Nama atribut**|	**Nilai**	     |   **Fungsi: Menjalankan script**                 |
|:---------------|:----------------|:-------------------------------------------------|
|onafterprint	   | kode javascript | setelah dokumen dicetak                          |  
|onbeforeprint	 | kode javascript | sebelum dokumen dicetak                          |
|onbeforeunload	 | kode javascript | sebelum saat dokumen tidak ter-load              |
|onerror	       | kode javascript | saat terjadi error                               |
|onhashchange	   | kode javascript | saat terjadi perubahan pada bagian anchor di URL |
|onload	         | kode javascript | setelah loading selesai                          |
|onmessage	     | kode javascript | saat ada pesan                                   |
|onoffline	     | kode javascript | saat tiba-tiba offline                           |
|ononline	       | kode javascript | saat tiba-tiba online                            |
|onpagehide	     | kode javascript | saat user tidak sedang membuka halaman web       |
|onpageshow	     | kode javascript | saat user membuka kembali halaman web            |
|onpopstate	     | kode javascript | saat history browser berubah                     |
|onresize	       | kode javascript | saat ukuran jendela browser berubah              |
|onstorage	     | kode javascript | saat area penyimpanan (Web Storage) di-update    |
|onunload	       | kode javascript | saat web browser ditutup                         |

Selain atribut tersebut, masih banyak lagi atribut event yang lainnya. Semuanya bisa kamu lihat di: [HTML Event Attributes](#).

#### 3. Atribut Khusus
Atribut khusus adalah atribut yang hanya bisa dipakai pada elemen tertentu dan kadang atribut ini tidak bisa digunakan pada elemen yang lain.

Contoh:


|**Nama atribut**	|**Bisa dipakai di tag**                        |
|:----------------|:----------------------------------------------|
|src	            |`<audio>`, `<embed>`, `<iframe>`, `<img>`, dll |
|href	            |`<a>`, `<link>`                                |
|action	          |`<form>`                                       |
|autoplay	        |`<audio>`, `<video>`                           |


### Cara Menulis Atribut yang Benar!

Penulisan atribut sebenarnya gampang.. kita hanya perlu menambahkannya pada tag pembuka dengan format seperti ini:

```html
bana-atribut="nilai"
```

Namun, ada beberapa hal yang perlu diperhatikan agar penulisannya benar dan valid:

#### 1. Gunakan Huruf Kecil

Menulis atribut dengan huruf besar sah-sah saja, dan bahkan valid menurut validator W3C.

Tapi saya sarankan menggunakan huruf kecil saja. Karena lebih umum digunakan dan juga mudah terbaca.

Contoh: (bagus)

```html
<p align="center">Belajar HTML di Petani Kode</p>
```

#### 2. Gunakan Tanda Kutip

Gunakan tanda petik untuk mengisi nilai atribut yang mengandung teks.

Mengapa?

Karena jika terdapat lebih dari satu kata, ia akan menciptakan spasi dan akan dianggap sebagai atribut baru.

Contoh: (bagus)

```html
<h1 title="tutorial HTML untuk pemula">Belajar HTML</h1>
```

Contoh: (buruk)

```html
<h1 title=tutorial HTML untuk pemula>Belajar HTML</h1>
```

Tanda petik yang digunakan, boleh petik ganda (") dan juga petik tunggal (').

Nah untuk nilai angka, boleh pakai tanda petik dan juga boleh tidak.

Contoh:

```html
<img src="gambar.jpg" width=120 height=120 />
```

Lalu, untuk atribut yang bernilai boolean (true dan false).. nilainya boleh ditulis dan boleh tidak.

Contoh:

```html
<input type="text" required="true" />
<input type="text" required />
```

#### 3. Penggunaan Spasi

Jika ada atribut yang memiliki lebih dari satu nama, maka ia ditulis dengan tanda min (-), bukan spasi.

Contoh:

```html
<img data-src="gambar.jpg" />
```

Lalu, spasi juga digunakan untuk memisahkan dua atau lebih atribut.

Contoh:

```html
<img class="lazyload" data-src="gambar.jpg" src="placeholder.jpg" />
```

Bisa juga ditulis seperti ini:

```html
<img class="lazyload" 
    data-src="gambar.jpg" 
    src="placeholder.jpg" />
```

### Apa Selanjutnya?

Kita baru saja belajar tentang Tag, Atribut, dan Elemen dalam HTML. Saya kira kamu sudah dapat membedakan ketiga hal ini.

Elemen adalah komponen yang menyusun dokumen HTML. Sedangkan Tag adalah penanda untuk memulai dan mengakhiri elemen. Lalu atribut adalah modifier untuk menentukan perilaku elemen.

Nah, selanjutnya kita akan berkenalan dengan elemen-elemen dasar di HTML seperti paragraf, heading, list, tabel, link, form, dan lain-lain.

Karena itu, silakan lanjutkan pelajari tentang:

- [Belajar HTML #03: Membuat Paragraf pada HTML](#)
- [Belajar HTML #04: Membuat Heading pada HTML](#)
- [Belajar HTML #05: Membuat Komentar pada HTML](#)
- [Belajar HTML #06: Text Formatting pada HTML](#)
- [Belajar HTML #07: Membuat link di HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}