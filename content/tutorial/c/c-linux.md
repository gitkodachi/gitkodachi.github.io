---
title: "Belajar Pemrograman C #02: Persiapan Pemrograman C di Linux"
linkTitle: "Belajar Pemrograman C #02: Persiapan Pemrograman C di Linux"
description: "Pelajari dasar-dasar Bahasa C untuk pemula."
author: "default"
date: 2025-06-27
thumbnail: "/images/cover/c.png"
image: "/images/thumbnail/c.webp"
show_tutorial_list: true
completed: false
current: true 
weight: 2
series: "c"
tutorial: ["C"]
topik: ["C"]
---

Pada tutorial sebelumnya, kita sudah membahas [pengenalan bahasa pemrograman C](../c-untuk-pemula).

Berikutnya kita akan membahas tentang peralatan apa saja yang harus dipersiapkan untuk belajar pemrograman C di Linux.

Baiklah mari kita mulai…

## Apa saja yang harus dipersiapkan untuk belajar C di Linux?
Pada dasarnya kita hanya membutuhkan dua alat saja, yaitu: teks editor dan *compiler*.

Teks editor adalah program yang digunakan untuk menulis kode program C…

…dan compiler adalah program yang digunakan untuk *menerjemahkan* bahasa C ke dalam bahasa mesin sehingga *dapat dimengerti* oleh komputer.

{{< image 
    src="/images/content/tutorial/C/flow-pemrograman.webp" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Pemrograman C dilakukan juga menggunakan IDE (*Integrated Development Environment*).

IDE adalah teks editor khusus yang di dalamnya sudah ada *compiler*.

Nanti kita akan bahas lebih dalam tentang ini…

### Teks Editor
Ada banyak sekali pilihan teks editor yang bisa kita gunakan untuk menulis program C.

Ada Notepad, Notepad++, Gedit, Geany, Mousepad, Kate, Atom, VS Code, Sublime Text, dsb.

Pilihlah teks editor yang kamu sukai dan bisa gunakan.

{{< image 
    src="/images/content/tutorial/C/Teks-editor-Atom.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}

Saya anggap kamu sudah menyediakan teks editor. Kalau belum, silakan diinstal dulu.

Silakan baca:

- [Review] [Teks editor VS Code](../../../post/text-editor-vscode/)
- [Review] Teks editor Atom
- Teks Editor berbasis teks di Linux

### 2. Compiler
*Compiler* adalah program yang berfungsi untuk menerjemahkan bahasa C menjadi bahasa mesin, sehingga dapat dimengerti oleh komputer.

*Compiler* C juga ada banyak jenisnya, ada GCC (*GNU C Compiler*), Clang, lcc, LuxCC, Tiny C Compiler, Borland Turbo C, VBCC, XL C, Small-C, dll.1

Pada tutorial ini, kita akan menggunakan *compiler* GCC (*GNU C Compiler*).

Silakan instal GCC di Ubuntu dengan perintah berikut:

```bash
sudo apt install gcc
```

Untuk pengguna Windows, bisa pakai [MinGW](https://www.mingw.org/), [Cygwin](https://sourceware.org/cygwin/), atau WSL (ubuntu).

Setelah itu, coba ketik perintah `gcc --version` untuk memeriksa versi yang terinstal.

{{< image 
    src="/images/content/tutorial/C/versi-gcc.png" 
    alt="Deskripsi gambar" 
    caption="*Keterangan gambar opsional*" 
>}}
Sekarang semua alat sudah kita persiapkan. Berikutnya, kita bisa mulai membuat program.