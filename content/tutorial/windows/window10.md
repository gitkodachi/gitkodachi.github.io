---
title: "Cara masuk ke BIOS (Windows 10 & 11)"
linkTitle: "Tutorial Windows #01: Cara Masuk Ke bios"
author: "default"
date: 2025-06-25
weight: 1
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/Komponen-BIOS.webp"
image: "/images/cover/ASUS-BIOS.jpg"
kategori: ["tutorial-lainnya"]
topik: ["windows", "office"]
tutorial: ["windows"]
series: "troubleshooting"
show_tutorial_list: true
completed: true
current: true 
---

## Apakah BIOS?
BIOS (*Basic Input/Output System*) adalah komponen vital komputer Anda yang menginisialisasi komponen perangkat keras seperti prosesor, memori dan drive saat Anda memulai sistem. Ini bertindak sebagai antarmuka antara perangkat keras dan perangkat lunak komputer Anda. Jika Anda Luncurkan **BIOS**, Anda dapat mengkonfigurasi pengaturan seperti urutan boot, dan waktu sistem, dan melakukan optimasi sistem kritis. Jika Anda perlu mengakses pengaturan ini, berikut panduan terperinci tentang cara melakukannya jalankan **BIOS** pada Windows 10 dan 11.

{{< alert type="note" title="Catatan Teknis" >}}
 Meskipun langkah-langkah yang disediakan di sini umumnya berlaku untuk sebagian besar sistem, beberapa variasi mungkin ada berdasarkan versi pabrikan dan BIOS. Beberapa sistem yang lebih baru menggunakan UEFI (Unified Extensible Firmware Interface), yang mungkin memiliki metode yang berbeda untuk mengakses dan menggunakan BIOS.
{{< /alert >}}

## 6 Metode Untuk Masuk Ke Pengaturan BIOS pada Windows 10 & 11

BIOS (Basic Input/Output System) atau UEFI (Unified Extensible Firmware Interface) adalah komponen penting dari komputer. Ini membantu mengontrol pengaturan perangkat keras dan memungkinkan sistem operasi berinteraksi dengan berbagai komponen perangkat keras seperti CPU, memori, dan perangkat penyimpanan. Jika Anda perlu menyesuaikan pengaturan sistem tertentu seperti boot order, pengaturan boot aman, atau overclocking, memasukkan BIOS diperlukan. Berikut adalah berbagai metode untuk mengakses BIOS pada sistem Windows 10 dan 11.

### Metode 1: Akses BIOS saat Startup

Cara paling tradisional untuk mengakses BIOS adalah selama proses BIOS boot awal. Ketika Anda menyalakan PC Anda, menekan tombol tertentu segera setelah sistem dimulai akan memungkinkan Anda untuk masuk ke BIOS.

#### Langkah 1: Restart Komputer Anda dan Segera tekan tombol BIOS

Cukup mulai dengan me-restart komputer Anda dan segera setelah logo muncul tekan BIOS Key untuk masuk ke BIOS. Kunci BIOS dapat bervariasi tergantung pada produsen komputer Anda. Kunci umum meliputi `Del`, `F2`, `F10`, `Esc`, dan `F12`. Anda biasanya akan melihat pesan di layar yang mengatakan, "Tekan [kunci] untuk memasukkan pengaturan" selama boot. Pastikan untuk menekan tombol tepat setelah menyalakan, sebelum Windows mulai memuat.

#### Dafatar Kunci Bios pada Keyboard
{{< tabs >}}
  {{< tab name="Tombol Bios Di Keyboard" >}}
   - F2
   - Dellete (*del*)
   - Esc
   - F10
   - Ctrl + Alt + Del
   - Ctrl + Alt + Esc
   - Fn + F2 (*untuk beberapa laptop*)
   {{< /tab >}}

  {{< tab name="Tombol Bios di Keyboard menurut produsen" >}}
   - Acer: F2 atau Del
   - ASUS: F2 (untuk sebagian besar PC), F2 atau Del (untuk beberapa motherboard)
   - Dell: F2 atau F12
   - HP: F10
   - Lenovo: F1 (desktop), F2 atau Fn+F2 (laptop), Masukkan lalu F1 (ThinkPads)
   - MSI: Del
   - Tablet Permukaan Microsoft: Tombol Volume Up
   - Samsung: F2
   - Toshiba: F2 
   {{< /tab >}}
{{< /tabs >}}



#### Langkah 2: Tunggu layar BIOS muncul

{{< image 
  src="/images/content/tutorial/windows/pengertian-BIOS.jpg" 
  alt="Deskripsi gambar" 
  caption="*Tampilan bios Lama*" 
>}}

Setelah Anda berhasil menekan tombol, Anda harus melihat antarmuka BIOS atau UEFI. Di sini, Anda dapat mengonfigurasi pengaturan seperti urutan boot, boot aman, atau waktu sistem.

### Metode 2: Akses BIOS dari Pengaturan Windows

Di Windows 10 dan 11, Anda dapat mengakses BIOS langsung dari menu Pengaturan. Ini adalah metode yang sangat berguna jika Anda tidak dapat mengakses BIOS menggunakan penekanan tombol tradisional saat startup.

#### Langkah 1: Buka menu Pengaturan
- Tekan **Windows + I**  Untuk membuka aplikasi `Settings`.
- Alternatifnya, Anda dapat mengklik `Start` menu dan pilih `Settings`.

#### Langkah 1: Buka menu Pengaturan

Di jendela Pengaturan, buka `Pembaruan & Keamanan` dan pilih `Recovery` dari sidebar kiri.

#### Langkah 3: Klik Restart Sekarang di bawah Advanced Startup

Under the `Advanced Startup` bagian, klik pada `Restart` Sekarang. Ini akan me-restart PC Anda ke menu khusus untuk pemecahan masalah tingkat lanjut.


#### Langkah 4: Pilih Pengaturan Firmware UEFI dan Mulai Ulang

Setelah komputer Anda restart, Anda akan disajikan dengan menu. Choose `Memecahkan masalah` > `Opsi Lanjutan` > `Pengaturan Firmware UEFI`, kemudian klik pada `Restart`.

{{< image 
  src="/images/content/tutorial/windows/advanced-option.webp" 
  alt="Deskripsi gambar" 
  caption="*advanced option*" 
>}}

{{< alert type="tip" title="" >}}
Tip Penting: Metode ini sangat membantu jika Anda tidak dapat menekan tombol BIOS tepat waktu selama boot-up.
{{< /alert >}}

### Metode 3: Akses BIOS melalui Shift + Restart

Anda dapat menggunakan `Shift + Restart` kombinasi untuk mengakses `BIOS` tanpa perlu menavigasi melalui menu Pengaturan. Metode ini sangat berguna bagi pengguna yang kesulitan menekan tombol `BIOS` pada waktu yang tepat.

#### Langkah 1: Klik pada menu Start

Di menu Mulai(*start*), klik tombol `Power`.

#### Langkah 2: Tahan tombol Shift dan klik Restart

Tekan dan tahan pada keyboard tombol `Shift` dan kemudian klik `Restart` dari pilihan power. ini akan memulai menu `Advanced Startup`.

#### Langkah 3: Arahkan ke Pengaturan Firmware UEFI

{{< alert type="tip" title="" >}}
Tip Tambahan: Metode ini bekerja pada kedua Windows 10 dan Windows 11, menyediakan cara untuk mengakses BIOS tanpa menggunakan kunci BIOS selama startup.
{{< /alert >}}

### Metode 4: Akses BIOS Menggunakan Setup Key

Pada beberapa komputer, terutama yang lebih baru, Anda mungkin dapat mengakses BIOS menggunakan tombol "Setup", biasanya selama urutan boot awal. Metode ini biasanya tersedia untuk sistem dengan firmware UEFI.

#### Langkah 1: Matikan komputer Anda

Pastikan PC Anda benar-benar dimatikan sebelum melanjutkan.

#### Langkah 2: Tekan tombol Setup saat menyalakan komputer

Nyalakan komputer, dan segera tekan `Setup` key (umumnya `F2`, `F12`, atau `Del`) ketika logo produsen muncul.

Berikut daftar kunci pengaturan BIOS umum oleh produsen:

#### Daftar Kunci Pengaturan BIOS PC Desktop atau Laptop

| **Produsen Laptop**  | **Produsen Desktop** |
|:------------------   |:---------------------|
| Acer: F2             | Acer: F2 atau Del    |
| ASUS: F2 atau Esc    | ASRock: F2 atau Del  |
| Dell: F2 atau F12    | ASUS: F2 atau Esc    |
| HP: F10              | Dell: F2 atau F12    |
| Lenovo: F2 atau Fn+F2| Gigabyte: F2 atau Del|
| MSI: Del             | HP: F10              |
| Samsung: F2          | Lenovo: F1           |
| Toshiba: F2          | MSI: Del             |
| Axioo: F2            | Samsung: F2 atau F10 |

#### Perangkat Lain Daftar Kunci Pengaturan BIOS

{{< alert type="tip" title="" >}}

- Tablet Permukaan Microsoft: Tombol Volume Up
- Apple MacBook: Perintah + Opsi + P + R

{{< /alert >}}


#### Langkah 3: Tunggu BIOS Setup muncul

Setelah menekan tombol, layar pengaturan BIOS akan muncul, memungkinkan Anda melakukan perubahan pada pengaturan sistem Anda.

{{< alert type="tip" title="" >}}
Tip: Jika Anda tidak melihat prompt untuk kunci Setup, Anda dapat merujuk ke manual komputer Anda atau situs web produsen untuk kunci yang tepat untuk ditekan.
{{< /alert >}}

### Metode 5: Akses BIOS Melalui Windows Command Prompt

Pilihan lain untuk mengakses BIOS adalah dengan menggunakan Command Prompt untuk memulai restart ke Advanced Startup. Ini adalah metode yang ideal bagi pengguna yang lebih suka menggunakan perintah atau membutuhkan metode alternatif ketika pendekatan lain gagal.

#### Langkah 1: Buka Command Prompt sebagai Administrator

Press `Windows + X` dan pilih `Command Prompt` (Admin) atau `Windows PowerShell` (Admin) dari menu.

#### Langkah 2: Masukkan Perintah untuk Restart ke Startup Lanjutan

Ketikkan perintah berikut dan tekan Enter:
```powershell
shutdown /r /o /f /t 00
```

Perintah ini akan me-restart komputer Anda ke dalam `Opsi Startup` Tingkat `Lanjut` screen.

#### Langkah 3: Pilih Pengaturan Firmware UEFI dan Mulai Ulang

Dari menu Advanced Startup Options, pilih `Memecahkan masalah > Opsi Lanjutan > Pengaturan Firmware UEFI`, dan kemudian klik pada `Restart`.

{{< alert type="tip" title="" >}}
Tip Penting: Metode ini sangat berguna jika Anda merasa nyaman menggunakan Command Prompt dan memerlukan cara cepat untuk mengakses BIOS.
{{< /alert >}}

### Metode 6: Menggunakan Dialog Jalankan untuk Mengakses BIOS

Metode ini memungkinkan Anda mengakses `BIOS` melalui Run kotak dialog, yang merupakan cara lain untuk mencapai `Opsi Startup` Tingkat Lanjut.

#### Langkah 1: Tekan Windows + R untuk membuka dialog Jalankan

Di kotak dialog Jalankan, ketik `msconfig` dan memukul `Enter`.

#### Langkah 2: Buka Boot Tab di Konfigurasi Sistem

Di Konfigurasi Sistem jendela, klik pada `Boot` tab.

#### Langkah 3: Aktifkan Safe Boot dan Restart

Periksa `Aman Boot` opsi, klik `OK`, dan restart komputer Anda. Ini akan memunculkan menu Advanced Startup Options.

#### Langkah 4: Arahkan ke Pengaturan Firmware UEFI

Dari menu restart, pilih `Memecahkan masalah` > `Opsi Lanjutan` > `Pengaturan Firmware UEFI` dan klik Restart.

#### Tips Mengatasi Masalah
- `Kunci BIOS Tidak Bekerja`: Jika Anda tidak dapat menekan tombol yang benar saat startup, itu mungkin terlalu cepat. Coba aktifkan `Boot Cepat` opsi di `BIOS` Anda atau sesuaikan `Prioritas Boot` dalam pengaturan `firmware UEFI`.

- `Tidak Ada Opsi BIOS yang Ditampilkan`: Jika Anda tidak melihat opsi BIOS saat menekan tombol atau menggunakan metode di atas, bisa jadi sistem Anda menggunakan UEFI. Pastikan untuk mengakses `Pengaturan Firmware UEFI` sebaliknya.

- `Tidak Dapat Mengakses BIOS Setelah Beberapa Upaya`: Jika Anda tidak dapat memasuki BIOS setelah beberapa kali mencoba, pastikan keyboard Anda terhubung dengan benar, terutama jika Anda menggunakan keyboard nirkabel atau USB. Keyboard berkabel umumnya lebih dapat diandalkan selama proses booting.

### Kesimpulan

Mengakses BIOS pada Windows 10 dan 11 dapat dilakukan dengan beberapa cara tergantung pada pabrikan dan konfigurasi sistem Anda. Apakah Anda menggunakan metode penekanan tombol tradisional atau salah satu opsi alternatif yang tersedia dalam Windows, setiap metode menyediakan cara yang andal untuk mengakses pengaturan sistem penting. Selalu lanjutkan dengan hati-hati saat membuat perubahan di BIOS, karena pengaturan yang tidak tepat dapat menyebabkan ketidakstabilan sistem. Jika Anda tidak yakin tentang pengaturan tertentu, sebaiknya konsultasikan manual sistem Anda atau halaman dukungan pabrikan.

{{< referensi 
  name="Geeksforgeeks" 
  url="https://www.geeksforgeeks.org/techtips/how-to-enter-bios-windows-10-11/" >}}