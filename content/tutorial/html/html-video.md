---
title: "Belajar HTML #13: Menampilkan Video pada HTML"
linkTitle: "Belajar HTML #13: Menampilkan Video pada HTML"
author: "default"
date: 2025-07-10
weight: 13
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html-video.png"
image: "/images/cover/html-video.png"
show_tutorial_list: true
completed: false
current: true 
coming_soon: false  # untuk item "Coming soon"
description: "Belajar membuat tabel dengan HTML dan CSS untuk pemula."
---

Pada tutorial sebelumnya, kita sudah belajar cara menambahkan gambar di HTML. Namun, ini belumlah cukup.. karena sekarang konten di web tidak hanya dalam bentuk teks dan gambar saja.

Konten lainnya yang bisa ditambahkan di HTML adalah audio dan juga video.

Nah, pada tutorial ini.. kita akan belajar cara menambahkan video di HTML.

Mari kita mulai…

## Cara Menambahkan Video di HTML

Kita membutuhkan sebuah media player untuk menampilkan video di HTML

Dulu...

Sebebelum ad HTML5, media player HTML dibuat dengan program external seperti adobe flash.

Namun, kini sudah tidak di pakai lagi.

{{< image 
  src="/images/content/tutorial/html/flash-html.jpg" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

HTML ekarang punya tag baru untuk media player, yakni tag `<video`>.

{{< image 
  src="images/content/tutorial/html/tag-video.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Jika tag video dibuka pada browser yang tidak didukungnya, maka teks `browser tidak mendukung tag video` akan di tampilkan.

  Tapi, jika mendukung, Videonya akan ditampilkan.

  Contoh:

  ```html
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Video di HTML</title>
</head>
<body>
  <h1>Contoh Video di HTML</h1>
  <video controls>
    <source src="cat-herd.webm" type="video/webm" />
    Browsermu tidak mendukung tag ini, upgrade donk!
  </video>
</body>
</html
```

> File videonya kamu bisa download di [ cat-herd.webm](https://www.petanikode.com/img/html-video/cat-herd.webm)

{{< video src_webm="/images/content/tutorial/html/contoh-video.webm" >}}

{{< details summary="Live Demo" >}}
{{< video src_webm="/images/content/tutorial/html/cat-herd.webm" >}}
{{< /details >}}

Pada contoh diatas, kita menuliskan secara langsung nama video yang akan di tampilkan. Ini karena videonya berada dalam satu folder dengan file HTML.

{{< image 
  src="images/content/tutorial/html/file-video.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Jika video tersebut tersimpan di folder yang berbeda, maka perlu ditulis alamat folder atau path-nya.

Misalkan, saya meneruh videonya di dalam folder `video`. Maka, alamat path yang digunakan adalah:

```html
<video>
<source src="video/nama-video.mp4">
</video>
```

..dan jika videonya berada di website yang berbeda, maka kita harus mengisi atribut `src` dengan URL lengkap dari video.

```html
<video>
<source src="https://www.git.com/img/html-video/cat-herd.webm">
</video>
```
## Format Video yang Didukung
Tidak semua format video dapat ditampilkan di HTML. Berikut ini beberapa format video yang didukung:[^1]

| Format File               | Media Type        |
|:--------------------------|:------------------|
| MP4                       | Video/MP4         |
| WebM                      | video/webm        |
| Ogg                       | video/ogg         |
|                           |                   |

Jika kamu punya video dengan format yang berbeda dari ketiga format tersebut, maka kamu harus mengubahnya agar bisa ditambah ke HTML.

## Atribut untuk Video

Tag `<video>` punya beberapa atribute yang diberikan:

| `Nama Atribut`        | `Nilai`           | `Fungsi`                                |
|:----------------------|:------------------|:----------------------------------------|
| `autoplay`            | `true`/`false`    | Agar video diputer otomatis             |
| `controls`            | `true`/`false`    | Untuk mengaktifkan control video player |
| `loop`                | `true`/`false`    | Untuk memutar video terus menerus       |
| `muted`               | `true`/`false`    | Untuk menonaktifkan audio               |
| `posoter`             | `Image Path`      | Untuk menentukan gambar cover dari video|
| `width` & `height`    | `Angka`           | Untuk menentukan tinggi dan lebar video |
| `playsinline`         | `true`/`false`    | Untuk memutar video secara ‘inline’     |
|                       |                   |                                         |

Jika atribut bernilai `true`, maka ia boleh ditulis namanya saja.

Contoh:

```html
<video loop="true">
<source src="video.mp4" />
</video>
```

Bisa disingkat menjadi:

```html
<video loop>
<source src="video.mp4" />
</video>
```

Jika nilai atribut bernilai `false`, maka atribut tersebut boleh tidak ditulis atau juga boleh ditulis.

Contoh:
```html
<video loop="false">
<source src="video.mp4" />
</video>

<!-- boleh juga seperti ini: -->
<video>
<source src="video.mp4" />
</video>
```

Nah, untuk atribut lainnya, kamu bisa cek di [MDN: The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes).

## Video Sebagai Gambar Animasi Gif

Banyak website modern saat ini menggunakan video sebagai ganti dari animasi gif. Bahkan juga Google menyarankan untuk menggunakan video daripada gif.[^2]

Mengapa?

Karena ukuran file dari video jauh lebih kecil dibandingkan dengan gif dan juga tentunya akan mempengaruhi kecepatan download.

Nggak percaya?

Mari kita bandingkan:

{{< image 
  src="images/content/tutorial/html/gif-vs-video.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

File `cat-herd.gif` punya ukuran `3,6 MB` setelah saya covert formatnya menjadi MP4 dan Webm, ukurannya menjadi sangat kecil.

Terbukti kan, file video lebih kecil daripada gif.

Lalu, bagaimana cara membuat video menjadi gambar gif di HTML.

Caranya sama seperti menambahkan video biasa, tapi kita harus mengaktifkan beberapa atribut seperti `autoplay`, `muted`, `playsinline` dan `loop`.

Contoh:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Video di HTML</title>
</head>
<body>
  <h1>Contoh Video sebagai gif</h1>
  <video autoplay loop muted playsinline>
    <source src="cat-herd.webm" type="video/webm" />
    <source src="cat-herd.mp4" type="video/mp4" />
  </video>  
</body>
</html>
```

{{< video src_webm="/images/content/tutorial/html/contoh-video.webm" >}}

{{< details summary="Live Demo" >}}
{{< video src_webm="/images/content/tutorial/html/cat-herd.webm" >}}
{{< /details >}}

## Subtitle untuk Video
Subtitle adalah teks yang akan ditampilkan dalam video. Biasanya digunakan untuk terjemahan atau alih bahasa dari video dan juga untuk membantu tuna rungu (orang tuli) untuk menyerap informasi pada video.

Subtitle pada HTML dapat kita tambahkan dengan tag `<track>`. Tag ini memiliki atribut src yang akan digunakan untuk menambahkan file subtitle.

{{< image 
  src="images/content/tutorial/html/tag-track.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Format file subtitle untuk video di dalam HTML adalah WebVTT (`.vtt`) atau Web Video Text Track. File `.vtt` ini bisa dibuat dengan teks editor.

Jika kamu punya subtitle dengan format SubRip Text (`.srt`), kamu bisa mengubahnya menjadi `.vtt` di [srt2vtt](https://atelier.u-sub.net/srt2vtt/).

Sekarang mari kita coba contohnya: `video-subtitle.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Video di HTML</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <h1>Video Subtitle</h1>
  <video controls>
    <source src="cat-herd.webm" type="video/webm"/>
    <source src="cat-herd.mp4" type="video/mp4"/>
    <track src="cat-herd-id.vtt" kind="subtitles" srclang="id" label="Indonesia"/>
  </video>  
</body>
</html>
```

Dan berikut ini isi file: `cat-herd-id.vtt`

```txt
WEBVTT

0
00:00:00.000 --> 00:00:03.000
Para penunggang kuda.

1
00:00:04.000 --> 00:00:08.000
Kucing berlari.
```

Hasilnya:

{{< video src_webm="/images/content/tutorial/html/contoh-video.webm" >}}


> Catatan penting:
>
> Subtitle tidak akan ditampilkan jika kita membuka file HTML secara langsung dari browser.
>
>Coba perhatikan di bagian address bar, jika di sana ada tulisan File.. berarti kita membuka file HTML secara langsung.

{{< image 
  src="images/content/tutorial/html/file-html-direct.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Namun, jika di address bar ada HTTP atau HTTPS.. itu artinya kita membuka file HTML melalui web server.

..dan juga jika format file `.vtt` tidak benar, subtile tidak akan ditampilkan.

Pastikan formatnya valid, silakan gunakan [Live WebVTT](https://quuz.org/webvtt/) Validator untuk pengecekan.

## Menmabahkan Video dari Youtube
Saat tidak ingin repot-repot mengubah format video, kita bisa manfaatkan Youtube.

Tinggal upload saja videonya ke Youtube. Nanti kita akan dapat id unik dari video. Id unik ini bisa kita dapatkan dari URL video.

Contoh: `N7iY-jNWeFc`

Youtube sendiri sudah punya media player, jadi kita tidak perlu membuatnya dengan tag `<video>`.

Tag yang kita butuhkan untuk menambahkan video dari Youtube adalah `<iframe>`. Tag ini sebenarnya berfungsi untuk menambahkan halaman lain dalam sebuah frame.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contoh Video di HTML</title>
</head>
<body>
  <h1>Video dari Youtube</h1>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/N7iY-jNWeFc"></iframe>
</body>
</html>
```

Perhatikan URL yang digunakan pada atribut `src`, di sana kita menggunakan `/embed/`. Ini adalah halaman yang digunakan khusus untuk embed video dari Youtube.

Hasilnya:

{{< image 
  src="images/content/tutorial/html/contoh-video-youtube.webp" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sebenarnya ada cara gampangnya..

Pada video Youtube yang ingin kita `embed`, klik saja tombol *share*.

{{< image 
  src="images/content/tutorial/html/btn-share.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Maka akan muncul opsi untuk share video, pilih saja *embed..*

{{< image 
  src="images/content/tutorial/html/embed.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

..dan kita akan mendapatkan kode HTML untuk *embed* videonya.

Kode ini bisa kita *copy* ke file HTML.

Apa Selanjutnya?
Kita sudah belajar cara menampilkan video. Baik itu video dari file lokal dan juga video dari Youtube.

Nah, berikutnya silakan pelajari tentang:

- Belajar [HTML #14: Menambahkan Audio pada HTML](../html-audio)

> 📖 lihat juga tutorial lainnya di [List Tutorial HTML](/tutorial/html/)


[^1]: [HTML Video](https://www.w3schools.com/html/html5_video.asp)
[^2]: [Replace GIFs with videos](https://web.dev/replace-gifs-with-videos/)
