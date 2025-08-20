---
title: "Belajar Hugo #2: Setup Proyek Hugo dari Awal"
linkTitle: "Belajar Hugo #02: Setup Proyek hugo dan Konfigurasi Awal yang Harus Dilakukan"
author: "default"
date: 2025-06-27
image: "/images/cover/Hugo-01.png"
thumbnail: "/images/cover/Hugo-01.png"
show_tutorial_list: true
completed: false
current: true 
weight: 2
series: "hugo"
tutorial: ["Hugo"]
topik: ["Hugo"]
description: "Langkah-langkah membuat proyek baru Hugo, inisialisasi git, dan struktur folder."
---

## Mebuat Proyek Baru

Setup Proyek Hugo

{{< code title="Membuat Proyek Baru" lang="Go" >}}
hugo new site my-hugo-project
{{< /code >}}


## Masuk ke folder proyek

```bash
cd my-hugo-proyek
```

## Inisialisai git repository

```bash
git init
```

## Menambahkan '.gitignore'

```bash
/public/
/resources/
/node_modules/
/.DS_Store
hugo_stats.json
```

## Struktur folder dasar hugo

```bash
my-hugo-project/
├── archetypes/
├── assets/
├── content/
├── data/
├── layouts/
├── static/
├── themes/
├── config.toml
```

✅ Proyek Hugo siap digunakan dan sudah terhubung dengan Git!