---
title: "Github Workflow: Cara Berkontribusi di Proyek Open Source"
linkTitle: "Belajar Git #11: Cara Berkontribusi di Proyek Open Source dengan Git"
date: 2025-06-27
thumbnail: "/images/cover/github-workflow.png"
image: "/images/cover/github-workflow.png"
show_tutorial_list: true
completed: false
current: true 
weight: 11
series: ["git"]
tutorial: ["Git"]
topik: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

Github saat ini sudah menjadi rumah bagi proyek-proyek open source.

Jutaan programmer dari seluruh dunia menaruh kodenya di sana.

Bahkan proyek open source seperti [Linux](https://github.com/torvalds/linux), [Cinnamon](https://github.com/linuxmint/Cinnamon), [Laravel](https://github.com/laravel/laravel), [BlankOn](https://github.com/BlankOn), dll. menggunakan Github.

Bagaimana proyek-proyek itu digarap bersama?

Itulah yang akan kita pelajari pada artikel ini.

Kita akan belajar tentang Git dan Github workflow atau alur kerja Github untuk berkontribusi pada proyek open source.

Kita akan langsung melakukan kontribusi pada proyek “dummy” yang sudah saya siapkan.

Sebelumnya siapkan dulu alat-alat berikut:
1. [Akun Github](https://github.com/)
2. [Git](https://gitkodachi.github.io/topik/git/)
3. [Teks Editor](#).

### Langkah-langkah Berkontribusi pada Proyek Open Source di Github

Ada beberapa langkah yang harus dilakukan untuk berkontribusi di Proyek open source:

1. Baca Aturan Berkontribusi

Jika kamu tertarik berkontribusi pada sebuah proyek di Github, pastikan membaca aturan kontribusi.

Pada aturan kontribusi, biasanya akan ada larangan dan tata cara berkontribusi yang harus dipatuhi bersama.

Aturan berkontribusi biasanya ditulis pada file **CONTRIBUTING.md** dan **README.md**.

Contoh aturan berkontribusi pada [proyek Hugo](https://github.com/gohugoio/hugo):

  {{< image 
  src="/images/content/git/contributing.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Apa yang akan terjadi bila saya tidak mengikuti aturan berkontribusi?

Bisa jadi kontribusimu akan ditolak oleh admin.

Karena itu, bacalah aturan berkontribusi dengan teliti dan seksama.

2. Fork & Clone Repository

Setelah kita selesai membaca aturan berkontribusi, langkah selanjutnya adalah melakukan fork repository ke akun kita.

Fork bisa kita artikan sebagai menyalin repository dari akun orang lain atau organisasi ke akun kita sendiri.

Nah untuk mempraktikannya, saya sudah menyiapkan proyek bernama [belajar-git](https://github.com/petanikode/belajar-git).

Silakan buka proyek tersebut, lalu klik tombol Fork.

  {{< image 
  src="/images/content/git/fork.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Tunggu beberapa saat, repository sedang di-fork.

  {{< image 
  src="/images/content/git/forking.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Setelah itu, akan ada repository baru bernama **belajar-git** di akun kita.

  {{< image 
  src="/images/content/git/hasil-fork.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sekarang repository **belajar-git** telah menjadi milik kita dan bebas melakukan apapun terhadapnya.

Selanjutnya silakan *clone* (download) repository tersebut ke komputer lokal.

  {{< image 
  src="/images/content/git/clone-github.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  HTTPS:

```bash
git clone https://github.com/octocatcode/belajar-git.git
```

SSH:

```bash
git clone git@github.com:octocatcode/belajar-git.git
```

Saya biasanya [menggunakan SSH](../github-ssh), biar tidak memasukkan password saat melakukan push.

  {{< image 
  src="/images/content/git/git-clone.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

3. Lakukan Modifikasi

Setelah kita melakukan clone ke komputer lokal, selanjutnya silakan buka dengan teks editor dan lakukan modifikasi.

Sebagai contoh, saya membukanya dengan [VS Code](https://www.petanikode.com/text-editor-vscode).

  {{< image 
  src="/images/content/git/vscode-belajar-git.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Buatlah beberapa perubahan dan simpan perubahan yang kamu lakukan dengan **Git**.

Lakukan *commit* terhadap apa yang kamu rubah.


  {{< image 
  src="/images/content/git/commit-perubahan.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Perlu diperhatikan juga:

- Gunakan pesan *commit* yang informatif dan mewakili apa yang sudah kamu ubah.
- Hindari menggunakan **git add .** untuk melakukan *commit* ke semua file.

4. Push Kontribusimu

Setelah kita selesai melakukan perubahan dan commit, langkah berikutnya adalah melakukan push.

Push-nya ke mana?

Ya ke repository hasil fork tadi.

Repository yang kita clone dari Github, akan otomatis membuat [remote bernama](/tutorial/git/git-remote) **origin**.

Untuk melihatnya, gunakan perintah **git remote -v**.

  {{< image 
  src="/images/content/git/git-remote.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Alamat tujuan push dan *fetch* mengarah ke alamat repository di akun kita.

Silakan melakukan *push* dengan perintah berikut.

```bash
git ush origin master
```

Tunggulah beberapa saat…

  {{< image 
  src="/images/content/git/git-push.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah selesai, coba lihat repository **belajar-git** di akun Github-mu.

Apakah berhasil di-push atau tidak?

Kalau berhasil, silakan lanjutkan ke langkah berikutnya.

5. Membuat Pull Request

Pull Request adalah istilah yang bisa kita artikan sebagai permintaan untuk menggabungkan kode.

Kita sudah membuat perubahan di repository hasil fork, lalu ingin menggabungkan dengan repository sumber.

Maka kita harus membuat *Pull Request*.

Silakan klik tombol *New Pull Request* pada repository **belajar-git**.

  {{< image 
  src="/images/content/git/new-pull-req.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah itu, Github akan melakukan komparasi.

Apakah ada kode yang bentrok atau tidak?

Kalau tidak ada yang bentrok biasanya akan muncul tulisan hijau *“Able to merge*”.

Selanjutnya silakan klik tombol *Create Pull Request*.

  {{< image 
  src="/images/content/git/create-pull.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Silakan isi judul *Pull Request* dan pesan yang ingin disampaikan ke komunitas.

  {{< image 
  src="/images/content/git/diskusi-pull.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah itu admin atau owner akan melakukan review kontribusimu.

Biasanya akan terjadi diskusi untuk membahas *pull request* yang telah kita buat.

Apakah akan ditolak atau diterima?

Kalau diterima, biasanya akan ada tulisan *“Merged*” berwarna ungu.

  {{< image 
  src="/images/content/git/marged.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Selesai.

Jika ingin berkontribusi lagi, pastikan repository lokal tetap terupdate dengan repository sumber.

Update bisa dilakukan dengan perintah **git pull** atau **git fetch**.

Pelajari caranya di sini: Bekerja dengan [Remote Repository](/tutorial/git/git-remote).