---
title: "Belajar Hugo #5: Membuat Komponen & Interaktifitas Frontend di Hugo"
linkTitle: "Belajar Git #05: Menambahkan Komponen Tema & Interaktifitas Frontend"
date: 2025-06-27
image: "/images/cover/Hugo-01.png"
thumbnail: "/images/cover/Hugo-01.png"
series: "hugo"
tags: ["Hugo"]
description: "Pelajari cara membuat komponen frontend reusable dan interaktif menggunakan Alpine.js dan Hugo Partial."
---

## Membuat Komponen Reusable

Hugo partial sangat cocok digunakan untuk membuat komponen kecil yang berulang, contohnya **Button**.

---

### Contoh Komponen Button (partials/components/button.html)

```html
<button class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded transition">
  {{ . }}
</button>
```

```html
{{ partial "components/button.html" "Klik Aku" }}
  {{ . }}
```

### Membuat Interaktifitas dengan Alpine.js
Alpine.js adalah framework ringan yang cocok untuk interaksi dasar.

### Contoh Toggle Button
```html
<div x-data="{ open: false }">
  <button @click="open = !open"
    class="bg-emerald-600 text-white px-4 py-2 rounded">
    Toggle
  </button>
  <div x-show="open" class="mt-2 p-4 bg-emerald-100 rounded">
    Konten ini bisa muncul & hilang!
  </div>
</div>
```

### Menambahkan Alpine.js di Layout
Tambahkan di bagian bawah baseof.html sebelum </body>:

```html
<script src="//unpkg.com/alpinejs" defer></script>
```

### Contoh Komponen Modal dengan Alpine.js + Hugo

```html
<div x-data="{ open: false }">
  <button @click="open = true" class="bg-emerald-500 text-white px-4 py-2 rounded">Buka Modal</button>
  <div x-show="open" class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Ini Modal!</p>
      <button @click="open = false" class="mt-2 text-red-500">Tutup</button>
    </div>
  </div>
</div>
```

Catatan
✅ Hugo Partial ➔ untuk UI komponen berulang
✅ Alpine.js ➔ untuk behavior interaktif dasar
✅ Tailwind CSS ➔ untuk styling cepat

> Note: 🎯 Dengan gabungan Hugo + Alpine.js + Tailwind, kamu bisa membuat website yang cepat, dinamis, dan ringan.