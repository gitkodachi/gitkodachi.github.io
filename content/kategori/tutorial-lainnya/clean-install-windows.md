---
title: "Install Windows"
date: 2025-06-25
author: "default"
avatar: /images/global/avatar.png
thumbnail: "/images/thumbnail/blog_card.png"
image: "/images/cover/mas.png"
kategori: ["tutorial-lainya"]
topik: ["windows", "office"]
---

Panduan tentang cara mencadangkan data dan menginstal ulang Windows.
---

## Prasyarat
- File ISO Windows asli, Anda dapat mengunduhnya dari https://devcomp.fun/microsoft-download-list/
- Versi terbaru Rufus dari https://rufus.ie/
- Drive USB minimal 8GB 
- Ikuti [panduan] ini(remove_malware.md) sebelum membuat USB yang dapat di-boot jika Anda merasa sistem tersebut terkena malware.

{{< details summary="Sistem bersih lainnya jika sistem Anda saat ini terinfeksi dengan malware File infector." >}}
**Mengapa?** 
  Karena malware penginfeksi file dapat menyalin dirinya sendiri ke USB yang dapat di-boot yang akan Anda buat untuk melakukan instalasi bersih.
  Anda perlu menggunakan sistem bersih lain untuk membuat USB yang dapat di-boot dan mencolokkannya ke sistem yang terinfeksi saat ini hanya jika tidak menjalankan Windows secara langsung. 
**Bagaimana cara memeriksa apakah Anda memiliki malware penginfeksi file?** 
  Buka PowerShell sebagai admin dan masukkan
  `sc.exe start "sppsvc" > $null 2>&1; Write-Host "Error code: $LASTEXITCODE"`  
  If the output is 577 or 225, then most likely chances are that the system is infected with File infector malware. 
  
**Bagaimana jika Anda tidak memiliki sistem bersih lainnya?**
  Anda dapat mencoba Dr.Web https://free.drweb.com/download+cureit/gr untuk menghapus malware penginfeksi file. Namun dalam beberapa kasus, mungkin tidak dapat menghapus semuanya, oleh karena itu sebaiknya buat USB yang dapat di-boot pada sistem lain yang bersih.
{{< /details >}}

---

## Cadangkan data Anda

Proses instalasi bersih akan memformat drive C tempat Windows diinstal; jika Anda memiliki data apa pun di drive C, Anda perlu mencadangkannya.


