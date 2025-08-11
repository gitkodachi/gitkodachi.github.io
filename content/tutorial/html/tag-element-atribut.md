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
