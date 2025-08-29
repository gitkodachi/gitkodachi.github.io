---
title: "Tutorial Git #08: Perbedaan Git checkout, Git Reset, dan Git Revert"
linkTitle: "Belajar Git #08: Perbedaan Git checkout, Git Reset, dan Git Revert"
author: "default"
date: 2025-06-27
thumbnail: "/images/cover/git-petanikode.png"
image: "/images/cover/git-petanikode.png"
show_tutorial_list: true
completed: false
current: true 
weight: 8
series: "git"
tutorial: ["Git"]
topik: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

Pada [tutorial ke-6](../git-revert), kita sudah membahas cara membatalkan revisi menggunakan perintah git checkout, git reset, dan git revert.

Sekilas, tiga perintah tersebut melakukan hal yang sama. Akan tetapi ada perbedaannya.

Apa itu?

Mari kita bahas…

### Git Checkout

Perintah **git checkout** seperti mesin waktu, kita bisa kembalikan kondisi file proyek seperti waktu yang dituju.

Misalnya:

```bash
git checkout 06f735af7724558164c87f6b1ce3ca7778eb1c1b
```
Maka semua file akan dikembalikan seperti keadaan pada nomer *commit* tersebut.

{{< image 
    src="/images/content/git/git-checkout-masa-lalu.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Akan tetapi, ini bersifat temporer (sementara). Pengembalian ini tidak disimpan dalam database Git.

{{< alert type="tips" title="Tips" >}}
  - "Untuk kembali dari masa lalu gunakan perintah: *git checkout master*"
{{< /alert >}}

Selain itu juga, perintah ini digunakan untuk berpindah dan membuat cabang. Ini bisa kita gunakan untuk membuat perubahan baru berdasarkan kode di masa lalu.

Contoh:

Misalnya kita ingin membuat cabang baru berdasarkan kondisi kode di masa lalu, maka kita bisa menggunakan perintah:

```bash
git checkout -b nama_cabang <nomer_commit>
```

Maka nanti cabang baru akan terbentuk dari commit sebelumnya.

{{< image 
    src="/images/content/git/membuat-cabang-baru-dari-commit-masa-lalu.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Cara ini bisa kita ibaratkan seperti menulis cerita baru dengan plot yang berbeda.


### Git Reset

Perintah **git reset** sering disebut sebagai perintah berbahaya yang dapat menghancurkan catatan sejarah perubahan.

Hati-hati! Perintah ini membuat kita tidak bisa kembali lagi ke masa depan. Mau tidak mau, kita harus menulis ulang sejarah.

{{< image 
    src="/images/content/git/dampak-git-reset.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Perintah ini memiliki tiga argumen atau opsi utama, yaitu --**soft**, **--mixed**, dan **--hard**.

- **--soft** akan mengembalikan dengan kondisi file dalam keadaan *staged*.
- **--mixed** akan mengembalikan dengan kondisi file dalam keadaan *modified*.
- **--hard** akan mengembalikan dengan kondisi file dalam keadaan *committed*.

Contoh penggunaan:
```bash
git reset --soft 06f735af7724558164c87f6b1ce3ca7778eb1c1b
```

Maka kita akan dikebalikan dengan file dalam keadaan *staged*.

{{< image 
    src="/images/content/git/git-reset-soft.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Coba periksa catatan perubahan dengan perintah **git log**, pasti ada yang hilang dan kita tidak akan bisa kembali lagi ke masa depan. Ini seperti melakukan Re:Zero 😄.

{{< alert type="warning" title="Hati-hati" >}}
  - "*Jangan lakukan git reset pada repositori yang sudah di bagikan ke publik, karena dapat merusaknya*."
{{< /alert >}}

### Git Revert

*Revert* artinya mengembalikan. Perintah ini lebih aman daripada **git reset**, karena tidak akan menghapus catatan sejarah revisi.

*Revert* akan akan mengambil kondisi file yang ada di masa lalu, kemudian menggabungkannya dengan *commit* terakhir.

{{< image 
    src="/images/content/git/git-revert-petanikode.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Masih belum paham?

Mari kita coba lakukan sedikit eksperimen…

Sebelumnya, berikut ini adalah kondisi repositori yang dijadikan bahan percobaan.

{{< image 
    src="/images/content/git/kondisi-repositori-project-01.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Ada empat commit di sana, kemudian kita ingin melakukan revert ke *commit* ke-2.

{{< image 
    src="/images/content/git/konterjadi-konflik-saat-revert.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Terjadi error, karena ada file yang bentrok.

{{< image 
    src="/images/content/git/file-index-bentrok-karena-di-revert.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Silakan atasi konflik ini, setelah itu lakukan commit.

{{< image 
    src="/images/content/git/commit-hasil-dari-revert.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Nah, sekarang kita sudah punya lima catatan revisi/commit di dalam repositori.

### Kesimpulan

- Perintah **git checkout** mengembalikan file dalam kondisi sebelumnya, tapi bersifat sementara.
- Perintah **git reset**, akan mengembalikan file ke kondisi sebelumnya, kemudian menghapus catatan sejarah *commit* berikutnya.
- Perintah **git revert** mengembalikan file dengan tidak menghapus sejarah *commit*.

Kira-kira seperti itulah perbedaan perintah **git checkout**, **git reset**, dan **git revert**.

Referensi:

- http://stackoverflow.com/a/4114122
- https://www.atlassian.com/git/tutorials/undoing-changes