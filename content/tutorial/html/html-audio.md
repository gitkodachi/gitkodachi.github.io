---
title: "Belajar HTML #14: Menambahkan Audio pada HTML"
linkTitle: "Belajar HTML #14: Menambahkan Audio pada HTML"
author: "default"
date: 2025-07-10
weight: 14
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html-audio.png"
image: "/images/cover/html-audio.png"
show_tutorial_list: true
completed: false
current: true 
coming_soon: false  # untuk item "Coming soon"
description: "Belajar membuat tabel dengan HTML dan CSS untuk pemula."
---

Sekali lagi..

Konten dalam web, tidak hanya dalam bentuk teks dan gambar saja. Tapi juga bisa dalam bentuk multimedia seperti audio dan video.

Pada tutorial ini, kita akan fokus membahas tentang audio di HTML.

Konten audio biasanya berbentuk podcast, audiobook, dan musik.

Lalu pertanyaannya:

Bagaimana cara menambahkan audio di HTML?

Mari kita bahas…

## Cara Menambahkan Audio di HTML
Sebelum adanya HTML 5, audio di HTML ditambahkan dengan program eksternal seperti flash player.

Namun, kini HTML sudah punya tag sendiri yakni `<audio>`.

Tag `<audio>` adalah tag untuk membuat audio player. Lalu kita bisa memberikan file audio yang akan diputar dengan tag `<source>`.

{{< image 
  src="/images/content/tutorial/html/tag-audio.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Contoh: 📄 contoh-audio.html

  ```html
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Audio di HTML</title>
</head>
<body>
  <h1>Contoh Audio di Web</h1>
  <audio controls>
    <source src="Ngoni.mp3" type="audio/mpeg">
    Browsermu tidak mendukung tag audio, upgrade donk!
  </audio>
</body>
</html>
```