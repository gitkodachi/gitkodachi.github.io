---
title: "Belajar Hugo #3: Menambahkan Tema & Integrasi Tailwind CSS"
linkTitle: "Belajar Git #03: Menambahkan Tema & Integrasi Tailwind CSS"
date: 2025-06-27
image: "/images/cover/Hugo-01.png"
thumbnail: "/images/cover/Hugo-01.png"
weight: 2
series: "hugo"
tutorial: ["Hugo"]
topik: ["Hugo"]
description: "Cara menghubungkan tema Hugo dan mengintegrasikan Tailwind CSS menggunakan PostCSS."
---

## Clone Tema Hugo

Contoh menggunakan tema **ananke**:

```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

atur config.toml:

```bash
theme = "anake"
```

## Install Tailwind CSS via NPM

```bash
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Buat postcss.config.js diroo:
{{< code title="postcss.config.js" lang="JS" >}}
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
{{< /code >}}

## Install Tailwind CSS via NPM
{{< code title="postcss.config.js" lang="JS" >}}
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
{{< /code >}}

## Jalankan Build CSS (Development)
```bash
npm run dev
```

## Jalankan Build CSS (Production)
```bash
npm run build
```

✅ Tailwind CSS sekarang terintegrasi dengan Hugo kamu!