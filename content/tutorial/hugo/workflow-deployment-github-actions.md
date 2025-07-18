---
title: "Belajar Hugo #6: Workflow Deployment Hugo dengan GitHub Actions"
linkTitle: "Belajar hugo #06: Workflow Deployment Hugo dengan GitHub Actions"
date: 2025-06-27
image: "/images/cover/Hugo-01.png"
thumbnail: "/images/cover/Hugo-01.png"
series: "hugo"
tags: ["Hugo"]
description: "Belajar cara setup workflow CI/CD menggunakan GitHub Actions untuk Hugo project dengan Tailwind CSS."
---

## Apa itu Workflow?

Workflow di GitHub Actions adalah alur otomatis yang berjalan saat ada event tertentu, misalnya:
- Push ke branch `main`
- Pull Request dibuka
- Manual dispatch

---

## Contoh Basic Workflow untuk Hugo + Tailwind CSS

Buat file di `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy Hugo Site

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: '0.147.9'
          extended: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies
        run: npm ci

      - name: Build Tailwind + Hugo
        run: hugo --minify

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

### File yang Perlu Ada

  - package.json ➔ Tailwind + PostCSS setup
  - config.toml ➔ BaseURL sesuai GitHub Pages
  - public/ ➔ Hasil build Hugo
  - .github/workflows/deploy.yml ➔ Workflow CI/CD

### Best Practice
  - ✅ Simpan workflow di branch main
  - ✅ Cek hasil build di tab Actions
  - ✅ Gunakan hugo --minify untuk versi production
  - ✅ Pastikan URL di config.toml sudah benar

### Deployment Otomatis:
  - ✅ Push ke main ➔ GitHub Actions jalan otomatis
  - ✅ Website langsung live di GitHub Pages

> Info: 🚀 Dengan workflow ini, kamu tidak perlu deploy manual lagi.
Cukup commit dan push — Hugo + Tailwind langsung build & deploy otomatis!

### Next Step:
> Note: 🔥 Mau lanjut ke Branching & Pull Request Workflow?