---
title: "Belajar Git #09: Berkerja Dengan Remote Repository"
date: 2025-06-27
thumbnail: "/images/cover/git-petanikode.png"
image: "/images/cover/git-petanikode.png"
series: "git"
tutorial: ["Git"]
topik: ["Git"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---


{{< mermaid >}}
flowchart TD
    A[Local] -->|git push| B(Remote)
    B --> C{GitHub}
    C -->|PR| D[Merge]
    
    style A fill:#f0abfc,stroke:#333
    style B fill:#a5b4fc,stroke:#333
{{< /mermaid >}}