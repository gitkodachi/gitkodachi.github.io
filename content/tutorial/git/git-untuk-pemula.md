---
title: "Apa itu Git dan Kenapa Penting bagi Programmer?"
linkTitle: "Belajar Git #01: Apa itu Git dan Kenapa Penting Bagi Programmer?"
date: 2025-06-27
image: "/images/thumbnail/git-sqr.png"
thumbnail: "/images/cover/git-petanikode.png"
series: "git"
tags: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

Git adalah salah satu tool yang sering digunakan dalam proyek pengembangan software.

Git bahkan menjadi tool yang wajib dipahami oleh programmer, karena banyak digunakan di mana-mana.

Pada kesempatan ini kita akan belajar Git dari dasar.

Artikel ini hanya akan membahas pengenalan Git saja. Untuk mempelajari Git lebih lanjut, saya sudah menyediakan link di bagian akhir.

## Mengenal Git

Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak yang diciptakan oleh Linus Torvalds.

Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.

Git dikenal juga dengan distributed revision control (VCS terdistribusi), artinya penyimpanan database Git tidak hanya berada dalam satu tempat saja.

{{< image 
    src="/images/content/git/sistem-git.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
    class="rounded-lg shadow-md"
>}}

Semua orang yang terlibat dalam pengkodean proyek akan menyimpan database Git, sehingga akan memudahkan dalam mengelola proyek baik online maupun offline.

Dalam Git terdapat [Merge](./git-branch.md) untuk menyebut aktifitas penggabungan kode.

Sedangkan pada VCS (Version Control System) yang terpusat… database disimpan dalam satu tempat dan setiap perubahan disimpan ke sana.

{{< image 
    src="/images/content/git/vcs-terpusat.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
    class="rounded-lg shadow-md"
>}}

VCS terpusat memiliki beberapa kekurangan:
 - Semua tim harus terkoneksi ke jaringan untuk mengakses source-code;
 - Tersimpan di satu tempat, nanti kalau server bermasalah bagaimana?

Karena itu, Git hadir untuk menutupi kekurangan yang dimiliki oleh VCS terpusat.

## Apa yang dilakukan oleh Git?

Git sebenarnya akan memantau semua perubahan yang terjadi pada file proyek. Lalu menyimpannya ke dalam database.

Sebelum menggunakan Git:

{{< image 
    src="/images/content/git/revisi-tanpa-git.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
    class="rounded-lg shadow-md"
>}}

Setelah menggunakan Git:

{{< image 
    src="/images/content/git/database-git.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
    class="rounded-lg shadow-md"
>}}

Apa perbedaannya?

Saat kita ingin menyimpan semua perubahan pada file, biasanya kita membuat file baru dengan “save as”. Lalu, file akan menumpuk dalam direktori proyek seperti pada ilustrasi di atas.

Tapi setelah menggunakan Git…

Hanya akan ada satu file dalam proyek dan perubahannya disimpan dalam database.

Git hanya akan menyimpan delta perubahannya saja, dia tidak akan menyimpan seluruh isi file yang akan memakan banyak memori.

Git memungkinkan kita kembali ke versi revisi yang kita inginkan.

## Kenapa Git Penting Bagi Programmer?

{{< image 
    src="/images/content/git/jutsu-kolaborasi.jpg" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
    class="rounded-lg shadow-md"
>}}

Jadi selain untuk mengontrol versi, git juga digunakan untuk kolaborasi.

Saat ini Git menjadi salah satu tool terpopuler yang digunakan pada pengembangan software open source maupun closed source.

Google, Microsoft, Facebook dan berbagai perusahaan raksasa lainnya menggunakan Git.

Jadi, buat kamu yang punya impian ingin bekerja di sana, maka kamu harus bisa Git.

Selain itu, berikut ini ada beberapa menfaat yang akan kamu rasakan setelah bisa menggunakan Git.

1. Bisa menyimpan seluruh versi source code;
2. Bisa paham cara kolaborasi dalam proyek;
3. Bisa ikut berkontribusi ke proyek open-source;
4. Lebih aman digunakan untuk kolaborasi, karena kita bisa tahu apa yang diubah dan siapa yang mengubahnya.
5. Bisa memahami cara deploy aplikasi modern;
6. Bisa membuat blog dengan SSG.
7. dan sebagainya…

## Apa Selanjutnya?

Jadi, apakah kamu sudah mengenal git?

Bagus, selanjutnya silakan ikuti tutorial git berikut ini.

  - [Tutorial Git #01: Cara Install Git dan Konfigurasi Awal yang harus dilakukan]({{< ref "tutorial/git/git-install" >}})
  - [Tutorial Git #02: Membuat Repositori Baru dalam Proyek]({{< ref "tutorial/git/git-init" >}})
