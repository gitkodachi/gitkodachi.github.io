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


%% Git Remote Setup Diagram
flowchart TD
    A[Local Repository] -->|Add Remote| B{Remote Repositories}
    B --> C["`**github**`\nURL: https://github.com/petanikode/belajar-git.git"]
    B --> D["`**petanikode**`\nURL: www.petanikode.com"]
    
    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#e6ffed,stroke:#22863a
    style D fill:#e6ffed,stroke:#22863a