---
title: "Belajar Git #03: Simpan Perubahan Revisi dengan Git Commit"
date: 2025-06-27
thumbnail: "/images/cover/git-petanikode.png"
image: "/images/cover/git-petanikode.png"
series: "git"
tutorial: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

Pada [tutorial Git yang kedua](../git-init), kita sudah membuat repositori kosong. Belum ada apa-apa di sana.

Sekarang coba tambahkan sebuah file baru.

Sebagai contoh, saya akan menambahkan tiga file HTML kosong.

{{< image 
    src="/images/content/git/project-01_repositori-git-petanikode.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Setelah ditambahkan, coba ketik perintah git status untuk melihat status repositorinya.

{{< image 
    src="/images/content/git/git-status.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Berdasarkan keterangan di atas, saat ini kita berada cabang *(branch)* master dan ada tiga file yang belum ditambahkan ke Git.

### Tiga Kelompok Kondisi FIle dalam Git

Sebelum kita membuat revisi, kita akan berkenalan dulu dengan tiga kondisi file dalam Git.

#### 1. Modified
*Modified* adalah kondisi di mana revisi atau perubahan sudah dilakukan, tetapi belum ditandai dan belum disimpan di version control. Contohnya pada gambar di atas, ada tiga file HTML yang dalam kondisi *modified*.

#### 2. Staged
*Staged* adalah kondisi di mana revisi sudah ditandai, tetapi belum disimpan di version control. Untuk mengubah kondisi file dari modified ke staged gunakan perintah **git add nama_file**. Contoh:

```bash
git add index.html
```

#### 3. Committed
*Committed* adalah kondisi di mana revisi sudah disimpan di version control. perintah untuk mengubah kondisi file dari staged ke committed adalah **git commit**.

### Membuat Revisi Pertama
Baiklah, sekarang kita akan sudah tahu kondisi-kondisi file dalam Git. Selanjutnya, silakan ubah kondisi tiga file HTML tadi menjadi staged dengan perintah **git add**.

```bash
git add index.html
git add about.html
git add contact.html
```

Atau kita bisa melakukannya seperti ini:

```bash
git add index.html about.html contact.html
```

atau:

```bash
git add *.html
```

Atau seperti ini (semua file dan direktori):

```bash
git add .
```

Setelah itu, cobalah ketik perintah **git status** lagi. Kondisi filenya sekarang akan menjadi **staged**.

{{< image 
    src="/images/content/git/kondisi-file-staged-di-git.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Setelah itu, ubah kondisi file tersebut ke committed agar semua perubahan disimpan oleh Git.

```bash
git commit -m "Commit pertama"
```

Setelah itu, coba cek dengan perintah **git status** lagi.

{{< image 
    src="/images/content/git/commit-pertama-git.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selamat, revisi pertama sudah kita buat. Selanjutnya cobalah untuk membuat revisi kedua.

### Membuat Revisi Kedua

Ceritanya ada perubahan yang akan kita lakukan pada file **index.html**. Silakan modifikasi isi file **index.html**. Sebagai contoh saya mengisinya seperti ini.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Belajar Git - Project 01</title>
    </head>
    <body>
        <p>Hello Semua, Saya sedang belajar Git</p>
    </body>
</html>
```

Setelah itu ketik lagi perintah **git status**.

{{< image 
    src="/images/content/git/git-status-revisi-kedua.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Terlihat di sana, file **index.html** sudah dimodifikasi. Kondisinya sekarang berada dalam modified. Lakukan commit lagi seperti revisi pertama.

```bash
git add index.html
git commit -m "ditambahkan isi"
```

Dengan demikian, revisi kedua sudah disimpan oleh Git. Mungkin anda belum tahu maksud dari argumen **-m**, argumen tersebut untuk menambahkan pesan setiap menyimpan revisi.

{{< image 
    src="/images/content/git/timeline-dua-revisi.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Sekarang Git sudah mencatat dua revisi yang sudah kita lakukan. Kita bisa ibaratkan revisi-revisi ini sebagai checkpoint pada Game. Apabila nanti ada kesalahan, kita bisa kembali ke checkpoint ini.

Sekian untuk tutorial ke-3 ini, mudah-mudahan bermanfaat.

Selanjutnya: [Tutorial Git 04 - Melihat Log Revisi](../git-log)
