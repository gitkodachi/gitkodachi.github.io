---
title: "Belajar Git #1: Cara Install Git dan Konfigurasi Awal Yang Harus dilakukan"
linkTitle: "Belajar Git #02: Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan"
date: 2025-06-27
thumbnail: "/images/cover/git-petanikode.png"
image: "/images/cover/git-petanikode.png"
series: "git"
tutorial: ["Git"]
topik: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

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

Pada komputer saya, versi yang terinstal adalah vers 2.50.0

{{< image 
    src="/images/content/git/git-version.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

### 2. Cara Install Git di Windows

Instalasi Git di Windows memang tidak seperti di Linux yang ketik perintah langsung terinstal.

Kita harus men-download dulu, kemudian melakukan ritual next>next>finish.

Tapi dalam ritual tersebut, ada pilihan yang harus diperhatikan agar perintah **git** dapat dikenali di CMD.

#### Download Git

Silakan buka website resminya [Git](https://git-scm.com/). Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64bit. Begitu juga kalau menggunakan 32bit.

#### Langkah-langkah Install Git di Windows

Baiklah, mari kita mulai ritual instalnya. Silakan klik 2x file instaler Git yang sudah diunduh.

{{< image 
    src="/images/content/git/programs-install.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Maka akan muncul informasi lisensi Git, klik Next > untuk melanjutkan.

{{< image 
    src="/images/content/git/proses-install.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya menentukan lokasi instalasi. Biarkan saja apa adanya, kemudian klik Next >.

{{< image 
    src="/images/content/git/lokasi-instal.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya pemilihan komponen, biarkan saja seperti ini kemudian klik Next >.

{{< image 
    src="/images/content/git/pemilihan-komponen.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya pemilihan direktori start menu, klik Next >.

{{< image 
    src="/images/content/git/pembuatan-start-menu.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya pengaturan *PATH Environment*. Pilih yang tengah agar perintah **git** dapat di kenali di Command Prompt (CMD). Setelah itu klik Next >.

{{< image 
    src="/images/content/git/path-environment.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya konversi line ending. Biarkan saja seperti ini, kemudian klik Next >.

{{< image 
    src="/images/content/git/konversi-line-ending.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya pemilihan emulator terminal. Pilih saja yang bawah, kemudian klik Next >.

{{< image 
    src="/images/content/git/pemilihan-emulator-terminal.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya pemilihan opsi ekstra. Klik saja Next >.

{{< image 
    src="/images/content/git/konfigurasi-opsi-extra.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selanjutnya pemilihan opsi eksperimental, langsung saja klik Install untuk memulai instalasi.

{{< image 
    src="/images/content/git/opsi-experiment.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Tunggu beberapa saat, instalasi sedang dilakukan.

{{< image 
    src="/images/content/git/installing.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Setelah selesai, kita bisa langsung klik Finish.

{{< image 
    src="/images/content/git/finish.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Selamat, Git sudah terinstal di Windows. Untuk mencobanya, silakan buka CMD atau PowerShell, kemudian ketik perintah **git --version**.

{{< image 
    src="/images/content/git/git-version.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

### Cara Install Git di MacOS

Buat kamu yang menggunakan MacOS, git bisa diinstal dengan **brew**.

Buka terminal lalu, ketik perintah berikut untuk menginstal Git:

```bash
brew install git
```

Tunggulah beberapa saat sampai proses instalasinya selesai. Setelah itu, coba ketik perintah berikut untuk mengecek versi git yang terinstal:

```bash
git --version
```

Maka hasilnya:

{{< image 
    src="/images/content/git/versi-git-macos.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Ini artinya, git **versi 2.42.0** sudah terinstal dengan benar di MacOS. Selanjutnya, kita bisa lakukan konfigurasi awal.

### 3. Konfigurasi Awal yang Harus Dilakukan

Ada beberapa konfigurasi yang harus dilakukan sebelum mulai menggunakan Git, seperti menentukan *name* dan *email*.

Silakan lakukan konfigurasi dengan perintah berikut ini.

```bash
git config --global user.name "Petani Kode"
git config --global user.email contoh@petanikode.com
```

Kemudian periksa konfigurasinya dengan perintah:

```bash
git config --list
```

Apabila berhasil tampil seperti gambar berikut ini, berarti konfigurasi berhasil.

{{< image 
    src="/images/content/git/git-terminal-list.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Konfigurasi **core.editor** bersifat opsional. Sedangkan name dan email wajib.

Jika kamu memiliki akun Github, Gitlab, Bitbucket atau yang lainnya…

maka username dan email harus mengikuti akun tersebut agar mudah diintegrasikan.

Selain konfigurasi awal ini, kamu juga bisa konfigurasi SSH key untuk Github, Gitlab, dan Bitbucket.

Silakan baca caranya di sini:

- [Cara Setup SSH Key untuk Github]({{< ref "#tutorial/git/github-workflow" >}})
   
- [Cara Setup SSH Key untuk Gitlab]({{< ref "#tutorial/git/github-workflow" >}})
- [Cara Setup SSH Key untuk Bitbucket]({{< ref "#tutorial/git/github-workflow" >}})

### Konfigurasi Deafult Branch saat ini

Secara default, repository Git akan menggunakan nama branch **master** ketika kita baru pertama membuat repository.

Nama ini sebenarnya mulai ditinggalkan dan disarankan pakai nama **main**. Soalnya di Github.. default branch atau branch utama yang digunakan adalah **main**.

Saat kita mau upload repo ke Github, nantinya kita akan diminta untuk mengubah **master** menjadi **main**.

Biar tidak repot, kita setup aja dari awal.

Lalu gimana caranya supaya Git otomatis menggunakan **main** secara default?

Gampang, kita cukup tambahkan konfigurasi ini.

Silakan ketik di Terminal atau CMD:

```bash
git config --global init.defaultBranch main
```

Dengan demikian, Git akan otomatis menggunakan nama **main** sebagai branch utama.

### Apa Selanjutnya?

Bagus, kita sudah mempersiapkan semuanya. Selanjutnya kita bisa langsung belajar membuat [repositori git]({{< ref "tutorial/git/git-init" >}}).