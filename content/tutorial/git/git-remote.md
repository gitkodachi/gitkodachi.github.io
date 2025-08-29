---
title: "Tutorial Git #09: Berkerja Dengan Remote Repository"
linkTitle: "Belajar Git #09: Bekerja dengan Remote Repositori"
author: "default"
date: 2025-06-27
thumbnail: "/images/cover/git-petanikode.png"
image: "/images/cover/git-petanikode.png"
show_tutorial_list: true
completed: false
current: true 
weight: 9
series: "git"
tutorial: ["Git"]
topik: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

Pada proyek pengembangan software yang melibatkan banyak orang (tim), kita tidak hanya akan menyimpan sendiri repository proyeknya.

Semua tim yang terlibat dalam pengkodean (*coding*) akan menyimpan repository lokal di komputernya masing-masing.

Setelah itu, akan dilakukan penggabungan ke repository inti atau remote.

Biasanya akan ada repository pusat atau untuk menyimpan source code yang sudah digabungkan (*merge*) dari beberapa orang.

  {{< image 
  src="/images/content/git/sistem-git.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Di mana nyimpan repository remote-nya?

Bisa di server kantor atau bisa juga menggunakan layanan seperti Github, Gitlab, Bitbucket, dll.

Github adalah layanan yang paling populer untuk menyimpan (hosting) repository secara remote. Banyak proyek *open source* tersimpan di sana.

Kita akan menggunakan Github pada tutorial ini, pastikan kamu sudah memiliki akun Github.

### Mebuat Repository di Github

Silakan buka Github, kemudian buat sebuah repository dengan nama **belajar-git** seperti berikut ini.

  {{< image 
  src="/images/content/git/membuat-repository.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Maka sekarang kita punya repository kosong di Github.

  {{< image 
  src="/images/content/git/repository-kosong.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Jangan diapa-apakan dulu.

Silakan buka kembali repository lokal yang pernah kita buat, yaitu **project-01**.

Kita akan upload ke Github.

### Menambahkan dan Menghapus Remote
Sebelum kita bisa upload semua revisi yang ada di repository lokal, kita harus menambahkan remote-nya terlebih dahulu.

{{< alert type="tip" title="*Remote*" >}}
*"Remote dapat kita tambahkan dengan perintah seperti ini:"*
{{< /alert >}}

{{< mermaid >}}
flowchart TD
    A[Remote Control] -->|Sinyal Infrared| B(Receiver)
    B --> C{Decoder}
    C -->|Perintah ON/OFF| D[Power Control]
    C -->|Perintah Volume| E[Volume Control]
    C -->|Perintah Channel| F[Channel Selector]
    D --> G[Device]
    E --> G
    F --> G
{{< /mermaid >}}

Ada dua pilihan URL remote yang bisa kita berikan:

Melalui HTTPS:

```link
https://github.com/octocat/belajar-git.git
```

dan memelalui SSH:

```link
git@github.com:octocat/belajar-git.git
```

Apa bedanya?

Kalau kita menggunakan HTTPS, maka kita akan diminta password setiap kali melakukan *push*.

Sedangkan yang menggunakan SSH, kita tidak akan diminta password. Namun, kita harus melakukan [konfigurasi SSH](#) Key terlebih dahulu.

Saya lebih suka yang menggunakan SSH.

Maka perintah untuk menambahkan remotenya akan menjadi seperti ini:

```bash
git remote add github git@github.com:octocat/belajar-git.git
```

Setelah itu, silakan ketik perintah **git remote -v** untuk melihat remote apa saja yang sudah ditambahkan.

  {{< image 
  src="/images/content/git/git-remote.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Bagus, sekarang kita sudah menambahkan remote di dalam repository lokal.

Selanjutnya kita bisa melakukan *push* atau mengirim revisi ke repository remote (Github).

Nah untuk menghapus dan mengubah nama remote dapat dilakukan dengan perintah berikut:

Ubah nama remote:
```bash
git remote rename github kantor
```

Keterangan:

- github adalah nama lama
- kantor adalah nama baru

Hapus remote:

```bash
git remote remove github
```

keterangan:

- **github** adalah nama remote yang akan dihapus.

### Mengirim Revisi ke Remote Repository

Perintah yang kita gunakan untuk mengirim revisi ke repository remote adalah **git push**.

```bash
git push github master
```

Keterangan:

- **github** adalah nama remote.
- **master** adalah nama cabang tujuan.

Mari kita coba…

Pastikan repository lokal kita sudah memiliki remote.

  {{< image 
  src="/images/content/git/git-remote.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah itu lakukan beberapa revisi atau *commit*.
```bash
git add .
git commit -m "menambahkan beberapa revisi"
```

Sebagai contoh, saya memiliki 5 catatan revisi.

  {{< image 
  src="/images/content/git/git-log.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Maka tinggal kita kirim saja dengan perintah **git push github master**.

Jika muncul seperti ini, artinya *push* sukses dilakukan.

  {{< image 
  src="/images/content/git/git-push.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sekarang lihat ke [Github](#), pasti semuanya sudah ter-upload ke sana.

  {{< image 
  src="/images/content/git/repo-github.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Mudah bukan?

Biar mantap, coba buat revisi lagi di file **index.html**.

Misalnya perubahannya seperti ini:

  {{< image 
  src="/images/content/git/git-diff.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Lalu lakukan *commit* dan *push*.

```bash
git add index.html
git commit -m "mengubah judul dan teks di body"
git push github master
```

Jika berhasil, maka akan tampil seperti ini.

  {{< image 
  src="/images/content/git/git-push2.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Periksa kembali repository di Github dan perhatikanlah perubahannya.

  {{< image 
  src="/images/content/git/repo-github2.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Jika kita klik commit terakhir, maka kita akan dibawa ke **git diff**-nya Github.

Di sana kita bisa melihat perubahan apa saya yang dilakukan pada **commit** tersebut.

  {{< image 
  src="/images/content/git/git-diff-github.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Mengambil Revisi dari Remote Repository

Saat kita bekerja dengan repository yang memiliki banyak kontributor, kita seharusnya mengambil dulu revisi terbaru dari repository inti agar tidak bentrok.

Misalnya begini.

Pada repository remote ada kontributor lain yang sudah menambahkan dan mengubah sesuatu di sana.

  {{< image 
  src="/images/content/git/git-fetch-pull.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Maka kita harus mengambil perubahan tersebut, agar repository lokal kita tetap ter-update atau sama persis seperti repository remote.

Ada dua perintah untuk mengambil revisi dari repository remote:

1. **git fetch [nama remote] [nama cabang]**
2. **git pull [nama remote] [nama cabang]**

Apa perbedaannya?

Perintah **git fetch** hanya akan mengambil revisi (*commit*) saja dan tidak langsung melakukan penggabungan (*merge*) terhadap repository lokal.

Sedangkan **git pull** akan mengambil revisi (*commit*) dan langsung melakukan penggabungan (*merge*) terhadap repository lokal.

Terus kita harus pakai yang mana?

Tergantung dari situasi dan kondisi.

Bila kita sudah membuat perubahan di repository lokal, maka sebaiknya menggunakan **git fetch** agar perubahan yang kita lakukan tidak hilang.

Namun, bila kita tidak pernah melakukan perubahan apapun dan ingin mengambil versi terakhir dari repository remote, maka gunakanlah **git pull**.

### Mengambil Revisi dengan **git fetch**
Baiklah, sekarang mari kita coba praktikkan.

Silakan buka github, dan tambahkan file **README.md** melalui Github.

Klik tombol **add README**.

  {{< image 
  src="/images/content/git/add-readme.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah itu, isilah file **RAEDME.md** dengan apapun yang kamu inginkan.

Sebagai contoh, saya mengisinya seperti ini:

  {{< image 
  src="/images/content/git/isi-readme.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah selesai, simpan perubahan dengan melakukan commit langsung dari Github.

  {{< image 
  src="/images/content/git/commit-readme.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pesan commit bersifat opsional, boleh di isi boleh tidak. Karena Github akan membuatkannya secara otomatis.

Sekarang ada perubahan baru di repository remote dan kita akan mengambil perubahan tersebut.

Mari kita lakukan dengan perintah **git fetch**.

  {{< image 
  src="/images/content/git/git-fetch.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Revisi sudah diambil, tapi belum ada file **README.md** di dalam repository lokal.

Kenapa bisa begitu?

Ya, balik lagi dari pengertian **git fetch**. Dia hanya bertugas mengambil revisi saja dan tidak langsung menggabungkannya dengan repository lokal.

Coba kita cek dengan **git log**.

  {{< image 
  src="/images/content/git/git-log-remote.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pada gambar di atas terlihat perbedaan log antara repository lokal dengan repository remote.

Bila ingin mengecek apa saja perbedaannya, coba gunakan perintah **git diff**.

```bash
git diff master github/master
```

Keterangan:

- **master** adalah cabang **master** di repository lokal.
- **github/master** adalah cabang **master** di repository remote.

Hasil outputnya kira-kira akan seperti ini:

```diff
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..1174eb2
--- /dev/null
+++ b/README.md
@@ -0,0 +1,18 @@
+# belajar-git
+
+Repository ini adalah repository untuk belajar Git. Silakan baca materi tentang [git remote di Petani Kode](https://www.petanikode.com/git-remote).
+
+Atau mulai belajar Git dari awal:
+
+- [Tutorial Git 01 - Instalasi Git dan Persiapan Awal](https://www.petanikode.com/git-install/)
+- [Tutorial Git 02 - Membuat Repositori Git](https://www.petanikode.com/git-init/)
+- [Tutorial Git 03 - Membuat Revisi](https://www.petanikode.com/git-commit/)
+- [Tutorial Git 04 - Melihat Catatan Log Revisi Git](https://www.petanikode.com/git-log/)
+- [Tutorial Git 05 - Melihat Perbandingan Revisi Git](https://www.petanikode.com/git-diff/)
+- [Tutorial Git 06 - Membatalkan Revisi Git](https://www.petanikode.com/git-membatalkan-revisi/)
+- [Tutorial Git 07 - Percabangan](https://www.petanikode.com/git-branch/)
+- [Tutorial Git 08 - Perbedaan Git Checkout, Git Reset, dan Git Revert](https://www.petanikode.com/git-checkout-reset-revert/)
+- Tutorial Git 09 - Menulis Ulang Sejarah
+- [Tutorial Git 10 - Bekerja dengan Remote Repositori](https://www.petanikode.com/git-remote/)
+- Tutorial Git 11 - Git Tag
+- ...
```

Lalu sekarang bagaimana cara kita menggabungkan *commit* dari repository remote dengan lokal?

Gunakan perintah **git merge**.

```bash
git merge master github/master
```

Setelah itu coba ketik **ls** dan **git log** lagi…

  {{< image 
  src="/images/content/git/git-merge.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Kita sudah berhasil menggabungkan revisi dari remote dan lokal. 🎉

### Mengambil Revisi dengan git pull
Lakukan hal yang sama seperti tadi.

Kali ini kita akan membuat file baru bernama **register.html** melalui Github.

  {{< image 
  src="/images/content/git/github-add-file.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Berikan nama file dengan **register.html** dan isi dengan apa saja.

  {{< image 
  src="/images/content/git/isi-register.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Simpan revisi dan tambahkan pesan *commit* seperti ini.

  {{< image 
  src="/images/content/git/commit-register.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sekarang ada perubahan baru di repository remote dan kita akan mengambilnya dengan perintah **git pull**.

Silakan buka repository lokal dan ketik perintah berikut:

```bash
git pull github master
```
Maka semua revisi akan diambil dan langsung digabungkan (*merge*).

  {{< image 
  src="/images/content/git/git-pull.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Clone Remote Repository

Clone repository bisa kita bilang seperti copy repository dari remote ke lokal.

Perintah untuk melakukan clone adalah **git clone**.

```bash
git clone https://github.com/octocat/belajar-git.git [nama dir]
```

Keterangan:

- **https://...** adalah URL repository remote, kita juga bisa menggunakan SSH.
- **[nama dir]** (opsional) adalah nama direktori yang akan dibuat. Jika kita tidak berikan nama direktori, maka akan otomatis menggunakan nama repository.

Mari kita coba…

Sekarang saya akan pindah ke Desktop.
```bash
cd ~/Desktop
```

Setelah itu melakukan clone di sana.
```bash
git clone git@github.com:octocat/belajar-git.git
```
Maka akan ada direktori baru di sana.

  {{< image 
  src="/images/content/git/git-clone.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  {{< alert type="info" title="FYI" >}}
  - Saat kalian clone sebuah repository dari Github, nama remote origin akan diberikan secara otomatis
  {{< /alert >}}

  {{< image 
  src="/images/content/git/git-clone-log.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Apa Selanjutnya?

Kita sudah belajar beberapa perintah untuk bekerja pada remote repository, di antaranya **git remote**, **git fetch**, **git pull**, **git clone**, dll.

Semua perintah itu kita perlukan saat berkolaborasi dengan tim di proyek *open source* maupun *closed source*.

Apa selanjutnya?

Selanjutnya silakan banyak-banyak latihan dan sering-sering menggunakannya tiap hari agar terbiasa.

Terima kasih sudah mengikuti tutorial ini sampai akhir. Kalau ada saran dan pertanyaan, jangan sungkan-sungkan untuk berkomentar.