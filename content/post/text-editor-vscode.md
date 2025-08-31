---
title: "[Review] Text Editor Visual Studio Code di Linux"
date: 2025-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/visual-studio-code.png"
image: "/images/cover/visual-studio-code.png"
topik: ["Text Editor", "Vscode"]
---

Visual Studio Code atau VS Code adalah teks editor open-source berbasis Electron yang diracik oleh Microsoft.

Saya sering melihat foto-foto programmer yang saya ikuti di instagram menggunakan VS Code.

Jadi penasaran dan ingin mencobanya…

Beberapa minggu ini, saya sudah mencobanya…dan ingin menulis sedikit review tentangnya.

Pertama saya akan membahas cara instalasinya, kemudian performa, pengenalan antarmuka, review beberapa fitur, dukungan bahasa, rekomendasi extension, dan ditutup dengan permasalahan yang saya temukan.

## Cara Instal VS Code di Linux

Pertama download VS Code di website resminya: [code.visualstudio.com.](https://code.visualstudio.com/

{{< image 
  src="/images/content/tutorial/download-vscode.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pilih sesuai sistem operasi yang kamu gunakan.

Saya menggunakan Distro Linux keluarga Debian, maka saya harus download yang `deb`.

Setelah itu lakukan instalasi dengan `dpkg` atau paket manajemen sejenisnya.

```bash
sudo dpkg -i code_1.14.1-1499973263_amd64.deb
```

## Performa VS Code di Linux