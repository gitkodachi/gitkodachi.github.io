---
title: "{{ replace .Name "-" " " | title }}"
author: "azam"
penulis: "Nama Penulis"
penerbit: "Nama Penerbit"
halaman: "0 Halaman"
rilis: "01 Jan 2021"
format: "eBook (PDF, ePub)"
harga: "Rp 0"
link: "https://example.com/buku"
cover: "/images/content/buku/{{ .Name }}.avif"
image: "/images/content/buku/{{ .Name }}.avif"
date: {{ .Date }}
layout: "single-buku"
draft: false
---
