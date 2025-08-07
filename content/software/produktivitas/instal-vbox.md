---
title: "Cara Menginstall Virtualbox di Windows"
author: "default"
description: "VirtualBox perangkat lunak virtualisasi sumber terbuka dan gratis oleh Oracle digunakan untuk menjalankan berbagai sistem operasi dalam lingkungan Windows"
software: ["produktivitas"]
os: ["Windows", "macOS", "Linux", "Android", "iOS"]
thumbnail: "/images/content/software/vbox/vbox-1.png"
---

VirtualBox perangkat lunak virtualisasi sumber terbuka dan gratis oleh Oracle digunakan untuk menjalankan berbagai sistem operasi dalam lingkungan Windows 10 Anda yang ada. Hal ini memungkinkan Anda menguji perangkat lunak baru, menjelajahi sistem operasi yang berbeda, atau bahkan menjalankan aplikasi lama yang mungkin tidak kompatibel dengan sistem Anda saat ini.

Panduan ini akan memandu Anda melalui prosedur untuk menginstal VirtualBox Windows memastikan pengaturan yang lancar dan sukses serta ikhtisar tentang cara menggunakan VirtualBox di Windows.

### Pengertian Virtualisasi

Virtualisasi pada dasarnya menciptakan mesin virtual sebuah program perangkat lunak yang meniru komputer fisik. Mesin virtual ini kemudian dapat menjalankan sistem operasinya, terpisah dari mesin host. Hal ini memungkinkan Anda untuk bereksperimen dengan sistem operasi yang berbeda tanpa mempengaruhi sistem utama Anda atau menyediakan lingkungan yang aman untuk menguji perangkat lunak yang tidak tepercaya. Berikut adalah beberapa manfaat utama menggunakan VirtualBox:

 - Instal dan jalankan berbagai sistem operasi seperti Linux, macOS, atau versi Windows yang lebih lama dalam lingkungan Windows Anda.
 - Uji perangkat lunak atau aplikasi baru di lingkungan sandbox tanpa mempertaruhkan sistem utama Anda
 - Jaga agar aplikasi lama yang mungkin tidak kompatibel dengan sistem operasi Anda saat ini tetap berfungsi.
 - VirtualBox memungkinkan Anda mengalokasikan sumber daya tertentu seperti inti RAM dan CPU ke setiap VM yang mengoptimalkan pemanfaatan sumber daya.

### Persyaratan Sistem

Sebelum melanjutkan, pastikan sistem Windows Anda memenuhi persyaratan minimum untuk menjalankan VirtualBox secara efektif:

1. Prosesor 64-bit.
2. Minimal 4GB Ram degan setidaknya 2GB dialokasikan untuk VM.
3. Hardisk 300Mb atau gunakan SSD agar respon baik untuk aplikasi **VirtualBox** dan ruang tambahan untuk setiap mesin virtual.
4. Extensi virtualisasi perangkat keras diaktifkan di pengaturan **BIOS** anda.

Mengaktifkan Virtualisasi Perangkat Keras mungkin memerlukan memulai ulang sistem Anda. Merujuk ke posting kami [Cara Mengaktifkan Windows Sandbox di Windows](#) di mana Anda dapat menemukan teknik tentang bagaimana Anda dapat memverifikasi virtualisasi.

### Menginstal VirtualBox di Windows 

Sekarang setelah Anda memahami manfaatnya dan telah memeriksa persyaratan sistem Anda, mari kita lanjutkan dengan proses pengunduhan:

1. Klik [file disini](../../edukasi/vbox)
2. Temukan file penginstal yang diunduh di Anda **Downloads** folder atau di mana pun Anda menyimpannya. Klik dua kali file penginstal untuk meluncurkan VirtualBox Setup Wizard. Di layar selamat datang, klik “Next” untuk melanjutkan instalasi.
3.  Layar berikutnya menyajikan opsi penyesuaian untuk instalasi kotak virtual yang meliputi:
{{< image 
  src="/images/content/software/vbox/vbox-4.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}
4. Ikuti Perintah ini:
  - Layar berikutnya menyajikan opsi penyesuaian untuk instalasi kotak virtual yang meliputi:
  - Membuat ikon pintasan untuk VirtualBox di desktop Anda untuk memudahkan akses
  - Membuat entri untuk VirtualBox di menu Mulai Anda.
  - Adaptor jaringan memungkinkan Anda memilih adaptor yang akan digunakan VirtualBox.
  - Opsi USB memungkinkan Anda mengonfigurasi akses perangkat USB untuk mesin virtual.
5. Setelah Anda meninjau opsi penyesuaian, klik “Next” untuk melanjutkan, lalu opsi antarmuka Jaringan Peringatan muncul klik “Yes” untuk melanjutkan instalasi.
{{< image 
  src="/images/content/software/vbox/vbox-5.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}
6. Wizard Siap Instal muncul, Klik “Instal” untuk memulai instalasi.
{{< image 
  src="/images/content/software/vbox/vbox-6.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}
7. Setelah instalasi selesai, klik “Finish” untuk menyelesaikan proses instalasi.

### Membuat Mesin Virtual Pertama

Setelah menyelesaikan instalasi Anda dapat meluncurkan VirtualBox dengan mencarinya di Start Menu atau menggunakan pintasan desktop.

{{< image 
  src="/images/content/software/vbox/vbox-7.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Jendela VirtualBox Manager akan terbuka. Ini adalah antarmuka utama di mana Anda akan mengelola mesin virtual Anda. Untuk membuat mesin virtual pertama Anda, klik tombol “New” di toolbar.

{{< image 
  src="/images/content/software/vbox/vbox-8.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Wizard “Create Virtual Machine” akan memandu Anda melalui proses pengaturan. Anda akan diminta untuk menentukan berbagai opsi termasuk:

{{< image 
  src="/images/content/software/vbox/vbox-9.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  - **Nama dan sistem operasi**: Pilih nama deskriptif untuk mesin virtual Anda dan pilih jenis sistem operasi yang Anda rencanakan untuk diinstal.
  - **Memori RAM**: Alokasikan jumlah RAM yang cukup untuk mesin virtual Anda.
  - **Harddisk**: Pilih bagaimana Anda ingin membuat hard disk virtual. Anda dapat membuat hard disk virtual baru secara dinamis atau mengalokasikan ukuran tetap di muka.

{{< image 
  src="/images/content/software/vbox/vbox-10.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah menyelesaikan pengaturan Anda dapat melihat antarmuka VirtualBox menunjukkan sistem operasi yang diinstal di vbox. Klik “Start” untuk menjalankan sistem operasi.

{{< image 
  src="/images/content/software/vbox/vbox-11.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sekarang berhasil Anda dapat menjalankan sistem operasi Linux melalui VirtualBox. Penting untuk memeriksa persyaratan sistem untuk sistem operasi tamu yang Anda rencanakan untuk dipasang di dalam mesin virtual.

### Catatan Tambahan

Berikut adalah catatan tambahan tentang cara menginstal kotak virtual di Windows:

  - **Pemilihan Adaptor Jaringan**: Pemilihan adaptor jaringan default akan berfungsi dalam banyak kasus. Namun, jika Anda menemukan masalah konektivitas jaringan dengan mesin virtual Anda, Anda dapat mencoba mengubah adaptor jaringan di pengaturan VirtualBox.
  - **Paket Ekstensi VirtualBox**: Paket Ekstensi VirtualBox menyediakan fitur tambahan seperti dukungan USB 2.0 dan 3.0, mode mulus, dan kinerja video yang lebih baik. Meskipun tidak penting, ini dapat meningkatkan pengalaman mesin virtual Anda.
  - **Berbagi Folder**: VirtualBox memungkinkan Anda untuk dengan mudah berbagi folder antara mesin Windows 10 host Anda dan sistem operasi tamu yang berjalan di dalam mesin virtual.

  ### Kesimpulan

  Dengan pengaturan VirtualBox, Anda sekarang dapat menjelajahi eksperimen teknik virtualisasi dengan sistem operasi yang berbeda, atau membuat lingkungan yang aman untuk menguji perangkat lunak. Ingatlah untuk mengalokasikan sumber daya yang cukup untuk mesin virtual Anda untuk memastikan kinerja optimal.