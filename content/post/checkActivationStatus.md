---
title: "Status Aktivasi"
date: 2025-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/blog_card.png"
image: "/images/cover/mas.png"
kategori: ["windows", "office"]
topik: ["windows", "office"]
series: "windows"
show_tutorial_list: true
completed: true
current: true 
---

### Check Activation Status

Skrip Periksa Status Aktivasi di MAS merupakan pengembangan dari CAS oleh abbodi1406.
Anda dapat membaca lebih lanjut tentang fitur-fiturnya [disni](../cas).


{{< code lang="go" title="Contoh Golang" >}}
package main

import "fmt"

func main() {
    fmt.Println("Halo Dunia")
}
{{< /code >}}

{{< tabs >}}
  {{< tab name="Test A" >}} Isi A {{< /tab >}}
  {{< tab name="Test B" >}} Isi B {{< /tab >}}
{{< /tabs >}}

{{< details summary="Metode 1" >}}
contoh details
{{< /details >}}


{{< alert type="warning" title="Perhatian" >}}
  - type="tip" untuk saran praktis
  - type="note" untuk catatan teknis
  - type="warning" untuk peringatan risiko
  - type="danger" untuk konsekuensi kritis
  - type="info" untuk keterangan umum
{{< /alert >}}

{{< referensi 
  name="Nama Website/Sumber" 
  url="https://example.com/sumber-artikel" >}}

  {{< image 
  src="path image" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### flowchart LR
  {{< mermaid >}}
flowchart LR
    y("👫 You") --> h{"🤝 Found this helpful?"}
    h --> |Yes| r[/"⭐ Check out my featured posts!"/]
    h --> |No| su[/"📝 Suggest changes by clicking near the title"/]
    click r "/categories/featured" _blank
{{< /mermaid >}}

### gitGraph

{{< mermaid >}}
gitGraph
  commit
  branch feature
  checkout feature
  commit
  checkout main
  merge feature
{{< /mermaid >}}

{{< embed url="https://youtu.be/dQw4w9WgXcQ" >}}


{{< video src="/images/content/tutorial/html/image-link.webm" src_mp4="/images/content/tutorial/html/image-link.webm">}}

### Untuk Progress tutorial
kode di bawah ini untuk progress tutorial yang masih belom selesai tambahkan di didalam file layouts:
layouts/components/daftar-tutorial.html bisa ditambah kedalam file setelah tag `</ol>.`

```html
<div class="not-prose font-sans mt-8 p-4 bg-amber-100/50 dark:bg-yellow-300/10 rounded-md">
  <h5 class="font-semibold text-2xl mb-6">🚧 Work in Progress 🚧</h5>
  <p>Maaf jika ada link yang belum aktif. Link tersebut masih dalam draft
  atau sedang dikerjakan. Do'akan agar penulis tetap sehat dan tulisannya cepat terbit 🙏.
  Kamu juga bisa memberikan dukungan dengan <a class="font-bold underline" href="https://trakteer.id/ardianta" target="_blank">mentrakteer kopi</a> ☕ supaya penulis kuat begadang, hehe.</p>
</div>
</div>
```

**Atau** Difrontmatter tambahka kode ini:
```yaml
linkTitle: "Belajar HTML #10: Membuat Tabel pada HTML"
date: 2025-07-10
weight: 10
series: "HTML"
tutorial: ["HTML"]
topik: ["HTML"]
thumbnail: "/images/cover/html.png"
image: "/images/cover/html.png"
show_tutorial_list: true
completed: false
current: true 
coming_soon: true  # untuk item "Coming soon"
description: "Belajar membuat tampilan web modern dengan HTML dan CSS untuk pemula."
```

