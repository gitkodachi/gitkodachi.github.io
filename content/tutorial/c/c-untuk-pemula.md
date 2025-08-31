---
title: "Belajar Pemrograman C #01: Pengenalan Bahasa Pemrograman C"
linkTitle: "Belajar Pemrograman C #01: Pengenalan Pemrograman C untuk Pemula"
description: "Pelajari dasar-dasar Bahasa C untuk pemula."
author: "default"
date: 2025-06-27
thumbnail: "/images/cover/c.png"
image: "/images/thumbnail/c.webp"
show_tutorial_list: true
completed: false
current: true 
weight: 1
series: "c"
tutorial: ["C"]
topik: ["C"]
---

Ada yang bertanya:

Belajar bahasa C, masih worth it ga?

Jawabannya akan tergantung dari tujuanmu.

Biasanya saya akan tanya balik:

Worth it dari segi apa dulu?

Kalau melihat lowongan kerja yang membutuhkan programmer C, memang agak jarang sekarang.

Jadi, jawabannya kurang worth it jika kamu hanya belajar C untuk tujuan mencari kerja saja.

Tapi buat kamu yang penasaran tentang bahasa C dan ingin memahami lebih dalam tentang bahasa ini..

..gas aja!

Bahasa C masih worth it kok untuk dipelajari.

Bahasa C memang memang cukup tua, tapi masih digunakan hingga saat ini.

Beberapa project software masih menggunakan C. Bahkan di survey StackOverflow tahun 2023, bahasa C menduduki urutan ke-7 sebagai bahasa yang paling banyak dipelajari. [^1]

{{< image 
    src="/images/content/tutorial/C/stack-overflow-survey.avif" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Bahasa pemrograman C memang tidak menempati urutan pertama.

Tapi perlu kamu ketahui…

Bahasa C banyak menginspirasi bahasa-bahasa pemrograman lain seperti Java, Javascript, C++, C#, PHP, dan sebagainya.

Bahasa-bahasa tersebut memiliki sintaks yang mirip dengan bahasa C.

Bahkan C sampai dijuluki “God’s programming language”…

{{< embed url="https://x.com/petanikode/status/1129552265893752832/photo/1" >}}

Jadi dengan memahami bahasa C, kamu juga nanti akan mudah memahami bahasa-bahasa yang lainnya.

### Berikut beberapa keuntungan belajar bahasa C:

- Kita akan mudah memahami bahasa pemrograman yang lain, karena sintaknya hampir sama dengan C;
- Bahasa C mudah dipelajari, cocok untuk pemula yang baru pertama kali belajar coding;
- Bahasa C bisa digunakan di berbagai macam platform (Windows, Linux, MacOS, Android);
- Bahasa C masih digunakan hingga saat ini;
- _____________ (tambahkan sendiri)

## Apa itu Bahasa Pemrograman C?

C (dibaca `/si:/` seperti membaca huruf C dalam bahasa inggris) adalah bahasa pemrograman gerneral-purpose dan imprative yang mendukung pemrograman terstruktur dan rekursif. Bahasa C menggunakan static typing yang artinya tipe datanya harus ditentukan secara manual. 2

General-purpose artinya bisa digunakan untuk berbagai kebutuhan. Seperti mau buat aplikasi CLI, Desktop, Sistem Operasi, IoT, Game, dan sebagainya.

Jadi, nggak cuma dipakai di satu kebutuhan tertentu.

{{< image 
    src="/images/content/tutorial/C/bahasa-c-mindmap.avif" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Bahasa C menggunakan paradigma imperative artinya penulisan kode program di bahasa C menggunakan statement atau perintah-perintah. 3

Karena menggunakan paradigma imperative, bahasa C juga tentunya mendukung paradigma struktural dan prosedural. Namun C belum mendukung OOP.

Jika ingin menggunakan OOP, sebaiknya pakai C++ karena di sana sudah ditambahkan fitur OOP seperti Class, Object, Interface, dan sebagainya.

Btw, paradigma itu apaan?

Paradigma pemrograman adalah cara atau teknik dalam penulisan kode program. Bisa juga dibilang sebagai sudut padang dalam menyelesaikan masalah.

Buat kamu yang baru pertama kali coding, mungkin akan bingung dengan istilah ini. Tapi tak masalah, nanti juga kamau akan paham dengan sendirinya setelah mempelajari beberapa bahasa pemrograman.

Okay, lanjut kita bahas tentang:

## Sejarah Singkat Bahasa Pemrograman C

Awal mula kemunculan bahasa pemrograman C dimulai saat pengembangan sistem operasi Unix oleh Dennis Ritchie dan Ken Thompson. [^2]

{{< image 
    src="/images/content/tutorial/C/Ken_Thompson_and_Dennis_Ritchie--1973.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Waktu itu sistem operasi Unix masih menggunakan bahasa assembly pada komputer PDP-7. PDP-7 adalah sebuah komputer mini yang dibuat oleh Digital Equipment Corporation. [^4]

{{< image 
    src="/images/content/tutorial/C/Pdp7-oslo-2005.jpeg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Nah si Ken Thomspon membutuhkan sebuah bahasa pemrograman untuk membuat sebuah program di komputer ini. Ia pun mencoba membuat kompilator (*compiler*) untuk bahasa Fortran, akan tetapi tidak berhasil.

Berikutnya ia membuat bahasa B, yang merupakan bentuk sederhana dari bahasa BCPL.

Akan tetapi…

Bahasa pemrograman B sangat lambat, sehingga tidak banyak yang menggunakannya.

Kemudian pada tahun 1972, Denis Ritchie meningkatkan bahasa pemrograman B dan membuat bahasa pemrograman baru bernama C.

Sejak saat itu C mulai digunakan pada sistem operasi Unix versi 2.

Kemudian pada Unix versi 4 (November 1973), kernel-nya ditulis ulang dengan bahasa C.

> **FYI:** Kernel adalah program inti dari sebuah sistem operasi

Bahasa C semakin berkembang, pada tahun 1978 buku pertama *“The C Programming Language*” diterbitkan. Lalu di tahun 1980, bahasa C menjadi semakin populer dan banyak digunakan.

{{< image 
    src="/images/content/tutorial/C/timeline-sejarah-c.avif" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Hingga saat ini bahasa C masih digunakan untuk beberapa project seperti IoT, Sistem Operasi, Game, dan sebagainya

## Versi Bahasa Pemrograman C

Bahasa pemrograman memiliki versi, sama seperti bahasa manusia.

Contohnya:

Versi bahasa indonesia yang sekarang dengan yang dulu pasti berbeda.

Begitu juga dengan bahasa pemrograman. Versi yang dulu dengan versi yang sekarang akan memiliki banyak perbedaan.

Berikut ini versi-versi bahasa pemrograman C:

### ANSI C dan ISO C

ANSI C adalah versi yang menjadi standar awal bahasa pemrograman C. Versi ini juga dikenal dengan `C89`, `C90`.

Angka `89` dan `90` menandakan tahun diterbitkannya versi tersebut.

#### C99
`C99` adalah bahasa C versi tahun 1999. Pada versi ini dikenalkan beberapa fitur baru seperti inl*ine function*, tipe data baru, *variable-length array*, dll.

#### C11
`C11` adalah versi bahasa pemrograman C yang terbit pada tahun 2011.

Pada versi ini ditambahkan beberapa fitur dan library seperti *generic macros, anonymous structures*, peningkatan dukungan terhadap unicode, *atomic operation*, multi-threading, dll.

#### C18
`C18` adalah versi bahasa pemrograman C yang terbit pada bulan Juni 2018. `C18` adalah versi yang menjadi standar saat ini.

### Contoh Program yang dibuat dengan C
Program yang seperti apa sih yang bisa dibuat dengan bahasa C?

Mari kita lihat contohnya:

#### 1. Kernel Unix Versi 2
Seperti yang sudah kita ketahui dalam sejarah C, Kernel Unix ditulis ulang menggunakan bahasa pemrograman C.

Kernel merupakan program inti dari sebuah sistem operasi. Fungsinya untuk mengatur sumber daya komputer seperti hardware dan software.

#### 2. Kernel Linux
Kernel Linux dibuat dengan bahasa pemrograman C oleh Linus Torvalds. [^5]

{{< image 
    src="/images/content/tutorial/C/Linux_3.0.0_boot.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Kernel ini kemudian berkembang menjadi distro-distro Linux seperti Ubuntu, Fedora, Debian, dll.

Bahkan juga dipakai di sistem operasi Android.

#### 3. Game
Beberapa Game FPS seperti DOOM, Quacke, dan Wolfenstein 3D dibuat dengan C.

{{< image 
    src="/images/content/tutorial/C/Doom_ingame_1.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

…dan masih banyak lagi contoh program yang dibuat dengan bahasa pemrograman C yang tidak bisa saya sebutkan.

Cukup dua itu saja dulu, sebagai penyemangat.

Baik, lalu…

## Apa Selanjutnya?
Kita sudah mengenal bahasa pemrograman C, mulai dari sejarah, pembuat, hingga versi-versinya.

Selanjutnya silakan persiapkan peralatan untuk memulai pemrograman C:

- [Belajar Pemrograman C #2: Persiapan Pemrograman C di Windows](#)
- [Belajar Pemrograman C #2: Persiapan Pemrograman C di Linux](../c-linux)

Setelah itu, lanjutkan dengan memahami struktur dasar, variabel, tipe data, dll.

- [Belajar Pemrograman C #3: Memahami Struktur Dasar Program C](#)

[^1]: [Survey StackOverflow 2023](https://survey.stackoverflow.co/2023/#most-popular-technologies-language-learn)

[^2]: [https://en.wikipedia.org/wiki/C_programming_language](https://en.wikipedia.org/wiki/Imperative_programming)

[^3]: [https://en.wikipedia.org/wiki/Imperative_programming](https://en.wikipedia.org/wiki/Imperative_programming)

[^4]: [https://en.wikipedia.org/wiki/PDP-7](https://en.wikipedia.org/wiki/PDP-7)
[^5]: [https://en.wikipedia.org/wiki/Linus_Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)