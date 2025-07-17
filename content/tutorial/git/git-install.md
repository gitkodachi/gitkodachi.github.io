---
title: "Belajar Git #1: Cara Install Git dan Konfigurasi Awal Yang Harus dilakukan"
linkTitle: "Belajar Git #02: Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan"
date: 2025-06-27
image: "/images/cover/git-petanikode.png"
series: "git"
tags: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

{{< image 
    src="/images/cover/git-petanikode.png" 
    alt="Deskripsi gambar" 
    caption="*Suber Gambar Petani Kode*" 
    class="rounded-lg shadow-md"
>}}

Kita sudah mengenal Git pada [tulisan sebelumnya]({{< ref "tutorial/git/git-untuk-pemula" >}}). Selanjutnya Kita akan melakukan instalasi dan persiapan untuk mulai belajar Git.

Tulisan ini terbagi menjadi tiga bagian:

1. Cara Instalasi Git di Linux.
2. Cara Instalasi Git di Windows.
3. Konfigurasi Awal yang Harus dilkaukan Setelah Menginstal Git.

Mari kita mulai...

# **1. Cara Install Git di Linux**

```bash
sudo apt install git
```

atau

``` bash
sudo apt-install git
```

Pada Fedora:

```bash
yum install git
```

Setelah itu , coba periksa versi yang terinstal dengan perintah:

```bash
git --version
```

{{< image 
    src="/img/git/versi-git-petanikode.png" 
    alt="Deskripsi gambar" 
    caption="*Suber Gambar Petani Kode*" 
    class="rounded-lg shadow-md"
>}}
