---
title: "Belajar Hugo #4: Membuat Layout & Partial di hugo"
linkTitle: "Belajar Hugo #04: Menambahkan Layout Tema & Integrasi Tailwind CSS"
author: "default"
date: 2025-06-27
image: "/images/cover/Hugo-01.png"
thumbnail: "/images/cover/Hugo-01.png"
show_tutorial_list: true
completed: false
current: true 
weight: 4
series: "hugo"
tutorial: ["Hugo"]
topik: ["Hugo"]
description: "Cara menghubungkan tema Hugo dan mengintegrasikan Tailwind CSS menggunakan PostCSS."
---

## Struktur Layout Hugo

Hugo menggunakan folder `layouts/` dengan struktur seperti ini:

```bash
layouts/
├── _default/
│ ├── baseof.html
│ ├── list.html
│ └── single.html
├── partials/
│ ├── head.html
│ ├── header.html
│ ├── footer.html
│ └── navbar.html
```

### Membuat file 'baseof.html'

Contoh Dasar:

```bash
<!DOCTYPE html>
<html lang="id">
<head>
  {{ partial "head.html" . }}
</head>
<body>
  {{ partial "navbar.html" . }}
  <main>
    {{ block "main" . }}{{ end }}
  </main>
  {{ partial "footer.html" . }}
</body>
</html>
```

## Partial: Head (partials/head.html)

Contoh Dasar:

```bash
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ .Title }} — {{ .Site.Title }}</title>
<link rel="stylesheet" href="{{ "css/styles.css" | relURL }}">
```

## Membuat list.html dan single.html
list.html ➔ untuk halaman daftar (misal: blog list)

single.html ➔ untuk halaman konten tunggal

Contoh single.html:

```bash
{{ define "main" }}
<article class="prose dark:prose-invert mx-auto p-4">
  <h1>{{ .Title }}</h1>
  {{ .Content }}
</article>
{{ end }}
```

## Partial Navbar (partials/navbar.html)

Contoh partials/navbar.html:

```bash
<nav class="bg-emerald-600 p-4 text-white">
  <div class="container mx-auto flex justify-between">
    <a href="{{ "/" | relURL }}" class="font-bold">{{ .Site.Title }}</a>
  </div>
</nav>
```

✅ Dengan ini, kamu bisa mulai membangun halaman dengan struktur konsisten!
💡 Tips: Gunakan partial untuk komponen yang dipakai berulang.