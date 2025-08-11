---
title: "Status Aktivasi"
date: 2025-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/blog_card.png"
image: "/images/cover/mas.png"
kategori: ["tutorial-lainya"]
topik: ["windows", "office"]
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


