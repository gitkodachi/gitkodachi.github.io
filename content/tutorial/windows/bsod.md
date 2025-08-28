---
title: "Blue Screen Windows (BSOD)"
linkTitle: "Tutorial Windows #02: Blue Screen Windows (BSOD)"
date: 2025-06-25
author: "default"
weight: 2
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/bsosd.webp"
image: "/images/cover/bsosd.webp"
kategori: ["tutorial-lainnya"]
topik: ["windows", "office"]
tutorial: ["windows"]
series: "troubleshooting"
show_tutorial_list: true
completed: true
current: true 
---

### Awal Mula Kemunculan BSOD Windows

Sebagai catatan, BSOD pertama kali hadir di awal 1990-an. Di masa Windows 3.1, layar biru dikenal dengan sebutan blue screen of unhappiness, yang muncul saat pengguna menekan control-alt-delete untuk menutup program yang macet. Kemudian, pada 1993, istilah blue screen of death mulai digunakan di Windows NT ketika sistem benar-benar tidak bisa dipulihkan lagi.

Sebenarnya, layar hitam bukan hal baru sepenuhnya. Microsoft pernah memperkenalkannya pada Windows 11 di 2021, tapi kali ini desain dan pesan yang muncul telah diperbarui agar lebih ringkas dan relevan.

{{< image 
  src="/images/content/tutorial/windows/bsod_blackscreen.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar blackscreen*" 
>}}

### Ada beberapa alasan yang dapat menyebabkan Kesalahan Layar Biru:

{{< image 
  src="/images/content/tutorial/windows/bsosd.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar bluescreen*" 
>}}

Perubahan ini akan mulai dirasakan pengguna Windows 11 yang menjalankan versi 24H2 pada musim panas tahun ini. Tidak hanya soal warna, Microsoft juga menyebut bahwa pengalaman saat perangkat mengalami restart mendadak kini dirancang lebih sederhana dan cepat. Dalam blog resminya, perusahaan mengklaim proses reboot kini hanya memerlukan waktu sekitar dua detik bagi sebagian besar pengguna.

### Pemecahan Masalah - Blue Screen Errors di Windows (BSOD)

Kesalahan Layar Biru akan terjadi jika masalah menyebabkan sistem Anda tidak normal atau restart secara tidak terduga karena masalah perangkat lunak atau perangkat keras. Ini juga disebut BSOD (Blue Screen of Death, seperti gambar berikut).


{{< alert type="note" title="Catatan Teknis" >}}
  - Jika layar membeku pada tampilan berikut dan menjadi tidak responsif, mencegah tindakan apa pun, coba shutdown paksa terlebih dahulu. Tekan dan tahan tombol daya hingga lampu daya mati untuk mematikan perangkat. Setelah perangkat dimulai ulang, ikuti langkah-langkah pemecahan masalah di bawah ini untuk menghindari masalah di masa mendatang.
{{< /alert >}}

{{< alert type="tip" title="Penyebab BSOD" >}}
- Dari paket Windows, seperti yang disebabkan oleh Windows Update
- Masalah kompatibilitas antara perangkat keras baru yang diperluas dan perangkat, atau perangkat keras mengalami kesalahan
- Masalah kompatibilitas antara perangkat lunak dan sistem yang diinstal
- Virus sistem
{{< /alert >}}

​​​​​​​Dalam banyak kasus ketika Windows 11 dimulai ulang tiba-tiba, masalah diatasi oleh mulai ulang dan tidak diperlukan tindakan lebih lanjut. Namun, jika Windows 11 sering dimulai ulang karena kesalahan kode berhenti yang sama, cobalah langkah-langkah pemecahan masalah dasar ini untuk mengatasi masalah ini: 

1. **Lepaskan Perangkat yang Terhubung**.  Jika Anda menambahkan perangkat keras baru ke PC sebelum kesalahan, matikan PC, hapus perangkat keras, dan coba mulai ulang.

2. **Mulai PC Anda dalam mode aman**. Jika mengalami masalah saat memulai ulang, Anda dapat memulai PC dalam mode aman. Lihat Memulai [PC Anda dalam mode aman di Windows 11](#) untuk detailnya. Dari mode aman, Anda dapat mencoba langkah-langkah pemecahan masalah yang tersisa. 

3. **Periksa Manajer Perangkat**. Klik kanan tombol **Mulai** dan **pilih Manajer Perangkat**.  Periksa apakah ada perangkat yang ditandai dengan tanda seru (!). Klik kanan perangkat dan pilih **Perbarui driver**.  Jika memperbarui driver tidak membantu, coba nonaktifkan atau hapus instalan perangkat.

4. **Periksa apakah ada cukup ruang kosong pada hard drive**. Sistem operasi dan beberapa aplikasi memerlukan ruang kosong yang cukup untuk membuat file swap dan melakukan fungsi lainnya. Berdasarkan konfigurasi sistem, persyaratan yang tepat bervariasi, tetapi ada baiknya memiliki ruang kosong 10% hingga 15%.

5. **Instal Windows 11 Updates terbaru**. Untuk memeriksa pembaruan, pilih *Mulai* 🪟 Pengaturan ⚙️ > > **Windows Update** , lalu pilih [Periksa pembaruan](#).

6. **Pulihkan Windows 11**. Jika tidak ada langkah-langkah ini yang membantu, coba pulihkan Windows 11 menggunakan titik pemulihan sistem, atau salah satu opsi lain yang tercantum di [opsi Pemulihan di Windows 11](#).  Pilih opsi pemulihan yang paling sesuai dengan skenario Anda.

Jika Anda seorang profesional TI atau pengguna tingkat lanjut, Anda dapat mencoba Langkah pemecahan masalah tingkat lanjut untuk layar biru Windows, layar hitam, dan kesalahan kode berhenti.

{{< referensi 
  name="Microsoft" 
  url="https://support.microsoft.com/id-id/windows/memecahkan-masalah-windows-yang-tidak-diharapkan-memulai-ulang-dan-menghentikan-kesalahan-kode-60b01860-58f2-be66-7516-5c45a66ae3c6#id0edd=windows_11" >}}