---
title: "Belajar HTML #04: Cara Membuat Heading di HTML"
linkTitle: "Belajar HTML #04: Membuat Heading di HTML"
author: "default"
date: 2025-07-10
weight: 4
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html-heading.png"
image: "/images/cover/html-heading.png"
show_tutorial_list: true
completed: false
current: true 
description: "Belajar membuat tampilan web modern dengan HTML dan CSS untuk pemula."
---

Bayangkan jika artikel yang sedang kamu baca ini tidak memiliki judul.

Pasti tidak akan menarik!

Tidak ada judul dan juga sub judul.

Kamu bisa saja akan bingung membacanya.

Karena itu..

Kita membutuhkan judul, atau dalam HTML dikenal dengan Heading.

Apa itu heading?

dan bagaimana cara membuatnya?

Ayo kita bahas!

### Apa itu Heading ?

**Heading adalah sebuah judul** yang biasanya di berikan pada halaman atau beberapa bagian dari artikel.

Jika kamu sering menulis artikel, pasti ini tidak asing buatmu.

  {{< image 
  src="images/content/tutorial/html/contoh-heading-artikel.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Lalu, bagaimana caranya membuat judul di HTML?

Mari kita bahas:

untuk membuat halaman web berikut[^1]

[^1]: https://id.wikipedia.org/wiki/HTML

### Cara Membuat Heading di HTML

Judul pada HTML dapat kita buat dengan tag `<h1>` sampai `<h6>`. Tag `<h1>` digunakan pada judul level pertama. Lalu tag lainnya digunakan pada sub heading atau level berikutnya.

Masing-masing judul akan ditampilkan dengan ukuran teks yang berbeda. Tag `<h1>` adalah yang paling besar, dan tag `<h6>` paling kecil.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Heading di HTML</title>
    </head>
    <body>
        <h1>Ini Judul Level 1</h1>
        <h2>Ini Judul Level 2</h2>
        <h3>Ini Judul Level 3</h3>
        <h4>Ini Judul Level 4</h4>
        <h5>Ini Judul Level 5</h5>
        <h6>Ini Judul Level 6</h6>
    </body>
</html>
```

Hasilnya :

  {{< image 
  src="images/content/tutorial/html/contoh-heding-html.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Tag `<h1>` biasanya dipakai pada judul artikel. Lalu tag `<h2>`, `<h3>`, `<h4>`, `<h5>`, dan `<h6>` dipakai pada sub judul atau sub heading.

Mari kita coba membuat sebuah artikel yang dilengkapi dengan heading. Buatlah file HTML baru kemudian isi dengan kode berikut:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Heading di HTML</title>
    </head>
    <body>
        <h1>Belajar Heading di HTML</h1>
        <p>
          Heading di HTML ada enam, yakni H1, H2, H3, H4, H5, dan H6.
          Heading berfungsi untuk membuat judul untuk artikel dan juga
          sub judul pada bagian artikel.
        </p>
        <h2>Membuat Sub Judul</h2>
        <p>
          Sub judul atau sub heading dimulai dengan tag H2. Lalu diikuti
          dengan tag selanjutnya hingga sampai H6. Sementara itu, tag H1
          hanya digunakan untuk judul artikel saja.
        </p>
    </body>
</html>
```

Hasilnya :

  {{< image 
  src="images/content/tutorial/html/heading-artikel.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Berdasarkan pengalaman saya—dalam menulis artikel—tag `<h5>` dan `<h6>` jarang sekali dipakai, karena judul yang dibuat hanya sampai pada level 2, 3, dan 4.

###  Urutan Penulisan Heading

Apakah boleh menulis judul yang tidak urut?

Maksudnya.. seperti menggunakan `<h6>` untuk judul awal, lalu berikutnya `<h4>` untuk sub judul.

Ini boleh-boleh saja, tapi kurang bagus untuk SEO. 1

Penulisan judul yang bagus adalah judul yang mengikuti levelnya.

  {{< image 
  src="images/content/tutorial/html/urutan-heading.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Judul `<h1>` pada level pertama, `<h2>` pada level ke-2, dan seterusnya.

### Atribut untuk Heading

Masih ingat tentang atribut?

Ya, dia adalah _______

Sudah lupa ya?

Coba buka lagi pembahasan tentang: [Apa itu Tag, Elemen, dan Atribut di HTML?](#)

Heading tidak memiliki atribut khusus. Ia biasanya menggunakan atribut global.

Contohnya seperti:

- `id` untuk memberikan nama id unik. Biasanya ini akan digunakan oleh link, CSS, dan Javascript;
- `class` untuk memberikan nama class yang akan dipakai oleh CSS;
- `style` untuk memberikan kode css secara langsung;
- `title` untuk menambahkan informasi tambahan;
dll.

Daftar atribut global, bisa kamu lihat di [MDN: HTML Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

### Perbedaan Heading dengan Title dan Header

Meskipun sama-sama digunakan untuk urusan judul, tapi tiga elemen ini berbeda.

- Heading adalah judul untuk artikel dan bagian artikel yang dibuat dengan tag `<h1>` sampai `<h6>`
- Title adalah judul dari web yang dibuat dengan tag `<title>`
- Header adalah bagian kepala (kop) pada web yang dibuat dengan tag `<header>`

Coba perhatikan gambar berikut:

  src="images/content/tutorial/html/heading-title-header.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Sudah jelas kan bedanya?

Tag `<title>` untuk judul yang ditampilkan di web browser. Tag `<header>` sama seperti kop surat. Lalu heading `<h1>` sampai `<h6>` menjadi judul untuk artikel.

### Bonus: Heading Style

Sebenarnya ini termasuk dalam pembahasan materi tentang CSS. Karena itu, saya menjadikannya bonus yang boleh kamu baca dan juga boleh tidak.

Jadi..

Heading Style adalah style CSS yang diberikan pada heading agar terlihat menarik.

Berikut ini beberapa style yang sering digunakan pada heading:

#### Heading dengan Garis Bawah

Heading dengan garis bawa bisa kita buat dengan memanfaatkan tag `<hr>` dan juga CSS.

Contoh menggunakan tag `<hr>`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Heading di HTML</title>
    </head>
    <body>
        <h1>Tutorial Membuat Heading di HTML</h1>
        <hr />
        <p>
            Heading adalah judul sebuah artikel dan bagian dari artikel.
            Ada Enam level heading pada HTML, yakni dimulai dari H1,
            H2, H3, sampai H6.
        </p>
    </body>
</html>
```

Hasilnya:

  src="images/content/tutorial/html/garis-bawah-hr.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Contoh menggunakan CSS:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Heading di HTML</title>
    </head>
    <body>
        <h1 style="text-decoration: underline;">Tutorial Membuat Heading di HTML</h1>
        
        <p>
            Heading adalah judul sebuah artikel dan bagian dari artikel.
            Ada Enam level heading pada HTML, yakni dimulai dari H1,
            H2, H3, sampai H6.
        </p>
    </body>
</html>
```

Hasilnya:

  src="images/content/tutorial/html/garis-bawah-css.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

#### Text Case untuk Heafding

Heading kadang ditulis dengan berbagai style case. Ada yang menggunakan huruf besar semua, ada juga yang menggunakan huruf kecil di awal kata saja.

contoh:

```hmtl
INI HEADING DENGAN HURUF BESAR SEMUA
Ini Heading Dengan Huruf Besar Di Depan Kata
```

Nah, untuk membuat style case heading ini, Kita bisa menggunakan CSS atribut `text-transform.`

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Heading di HTML</title>
    </head>
    <body>
        <h1 style="text-transform: uppercase;">Heading dengan huruf Besar semua</h1>
        <p>
            Heading adalah judul sebuah artikel dan bagian dari artikel.
            Ada Enam level heading pada HTML, yakni dimulai dari H1,
            H2, H3, sampai H6.
        </p>
        <h1 style="text-transform: capitalize;">Heading dengan huruf Besar di awal kata</h1>
        <p>
            Properti text-transform berfungsi untuk menentukan style case dari
            teks. Properti ini bisa diberikan nilai capitalize, uppercase,
            lowercase, initial, none, inherit.
        </p>
    </body>
</html>
```

Hasilnya:

  src="images/content/tutorial/html/heading-case.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Warna Untuk Heading

Sama sperti element yang lainya, heading juga dapat kita berikan warna dengan menggunakan CSS. Warna bisa kita berikan pada teks dan latar belakang atau background.

Contoh:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Tutorial Heading di HTML</title>
    </head>
    <body>
        <h1 style="color: red;">Heading dengan warna Merah</h1>
        <p>
            Atribut color adalah atribut CSS yang berfungsi untuk memberikan
            warna pada teks. Pada contoh ini, teks pada heading akan berwarna
            merah, karena kita memberikan warna red untuk color. 
        </p>
        <h2 style="background-color: yellow;">Heading dengan Latar Kuning</h2>
        <p>
            Atribut background-color adalah atribut untuk memberikan warna
            latar (background) pada elemen tertentu. Pada contoh ini, kita
            memberikan warna latar kuning untuk heading.
        </p>
    </body>
</html>
```

  src="images/content/tutorial/html/heading-color.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Nah untuk style lainya, silahkan berkresi sendiri.

### Apa Selanjutnya?

Kita sudah belajar tentang cara membuat heading di HTML. Hal yang perlu kamu ingat adalah tag-tag untuk membuat heading, yakni dimulai dari `<h1>` sampai `<h6>`.

Berikutnya, silakan pelajari tentang:

- [Belajar HTML #05: Membuat Komentar pada HTML](#)

{{< alert type="info" title="" >}}
"Untuk tutorial HTML lainnya, silakan cek di [List tutorial HTML](#)"
{{< /alert >}}