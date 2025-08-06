---
title: "Bagaimana cara mengaktifkan Windows/Office?"
date: 2025-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/blog_card.png"
image: "/images/cover/mas.png"
kategori: ["tutorial-lainya"]
topik: ["windows", "office"]
---


## Skrip Aktivasi Microsoft (MAS)

Aktivator Windows dan Office open-source dengan berbagai metode aktivasi termasuk HWID, Ohook, TSforge, KMS38, dan Online KMS, dilengkapi fitur troubleshooting lanjutan.

---

### Cara Mengaktivasi Windows/Office

#### Metode 1 - PowerShell (Windows 8 dan yang lebih baru) ❤️
---

{{< details summary="Metode 1" >}}

1.  **Buka Powershell**  
	Untuk melakukannya, tekan tombol Windows + X, lalu pilih PowerShell atau Terminal.

2.  **Salin dan tempel kode di bawah ini, lalu tekan enter.**  
    ```
    irm https://get.activated.win | iex
    ```
    Alternatifnya, Anda dapat menggunakan yang berikut ini (ini akan ditinggalkan di masa mendatang):  
    ```
    irm https://massgrave.dev/get | iex
    ```

3.   Anda akan melihat opsi aktivasi. Pilih opsi aktivasi yang disorot dengan warna hijau. 

4.   Selesai Itu saja

{{< /details >}}

#### Metode 2 - Tradisional (Windows Vista dan yang lebih baru)

{{< details summary="Metode 1" >}}
1. Download dari salah satu link:
   - **Github**: [https://github.com/...](https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip)
   - **Mirror**: [https://git.activated.win/...](https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip)

2.  Matikan sementara windows defender  atau antivirus lainya jika ada.    
2.  Klik kanan pada file zip yang diunduh dan ekstrak.
3.  Pada folder hasil ekstraksi, cari folder yang bernama `All-In-One-Version`.
4.  Jalankan file bernama `MAS_AIO.cmd`.
5.  Anda akan melihat opsi aktivasi. Ikuti petunjuk di layar.
6.  Selesai Itu saja.
{{< /details >}}


- Untuk mengaktifkan produk tambahan seperti **Office untuk macOS, Visual Studio, RDS CAL, dan Windows XP**, check [disini](unsupported_products_activation.md).
- Untuk menjalankan skrip dalam mode tanpa pengawasan, centang [disini](command_line_switches.md).

### Tidak bekerja ❓

{{< note title="Catatan" >}}
- Jika Anda tidak dapat meluncurkan MAS menggunakan metode PowerShell, lihat Metode 2 di atas.
- Jika MAS diluncurkan tetapi menampilkan kesalahan, periksa langkah pemecahan masalah yang disorot dengan warna biru dan ikuti.
- Jika masalah masih berlanjut, jangan ragu untuk menghubungi kami [disini](troubleshoot.md).
{{< /note >}}

{{< info title="Informasi" >}}
- Perintah IRM di PowerShell mengunduh skrip dari URL tertentu, dan perintah IEX mengeksekusinya.
- Selalu periksa ulang URL sebelum menjalankan perintah dan verifikasi sumbernya dapat dipercaya saat mengunduh file secara manual.
- Berhati-hatilah, karena beberapa orang menyebarkan malware yang menyamar sebagai MAS dengan mengubah URL dalam perintah IRM.
{{< /info >}}

## MAS Rilis Terakhir

Rilis Terakhir - v3.4 (3-June-2025)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Azure DevOps](https://dev.azure.com/massgrave/_git/Microsoft-Activation-Scripts) / [Self-hosted Git](https://git.activated.win/massgrave/Microsoft-Activation-Scripts)

## Fitur

- **HWID (Lisensi Digital)** Metode Aktivasi Windows Permanen
- **Ohook** Metode Aktivasi Office Permanen
- **TSforge** Metode Aktivasi Windows/ESU/Office Permanen
- **KMS38** Metode Aktivasi Windows Hingga Tahun 2038
- **KMS Online** Metode Aktivasi Windows/Office Selama 180 Hari (Seumur Hidup dengan Tugas Perpanjangan)
- Pemecahan Masalah Aktivasi Lanjutan
- Folder $OEM$ untuk Pra-aktivasi
- Ubah Edisi Windows
- Ubah Edisi Office
- Periksa Status Aktivasi Windows/Office
- Tersedia dalam Versi All-in-One dan File Terpisah
- Sepenuhnya Open Source dan Berbasis Skrip Batch
- Lebih Sedikit Deteksi Antivirus

## Activations Summary

| Activation Type | Supported Product      | Activation Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | Yes, needed on build 19041 and later |
| KMS38           | Windows 10-11-Server   | Till the Year 2038                   | No                  |
| Online KMS      | Windows / Office       | 180 Days. Lifetime With Renewal Task | Yes                 |

Untuk detail lebih lanjut, gunakan detail aktivasi masing-masing di Dokumen dan [grafik perbandingan](chart.md).  
Untuk mengaktifkan produk yang tidak didukung seperti **Office di Mac**, centang [disini](unsupported_products_activation.md).

## Screenshots

![MAS_AIO](/images/content/tutorial/MAS_AIO.png)

![MAS_HWID](/images/content/tutorial/MAS_HWID.png)

![MAS_Ohook](/images/content/tutorial/MAS_Ohook.png)

![MAS_TSforge](/images/content/tutorial/MAS_TSforge.png)

![MAS_Troubleshoot](/images/content/tutorial/MAS_Troubleshoot.png)

![MAS_change_windows_edition](/images/content/tutorial/MAS_change_windows_edition.png)

![MAS_change_office_edition_1](/images/content/tutorial/MAS_change_office_edition_1.png)

![MAS_change_office_edition_2](/images/content/tutorial/MAS_change_office_edition_2.png)

![MAS_change_office_edition_3](/images/content/tutorial/MAS_change_office_edition_3.png)

Dibuat dengan Cinta ❤️