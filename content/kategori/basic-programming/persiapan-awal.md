---
title: "Window 11 Untuk Programming"
linkTitle: "Persiapan Basic #01: System Operasi Yang digunakan?"
date: 2025-06-25
thumbnail: "/images/content/basic/window-11.png"
image: "/images/content/basic/window-11.png"
kategori: ["basic-programming"]
topik: ["windows", "office"]
show_tutorial_list: true
completed: false
current: true 
---

## Pendahuluan

Sebagai developer pemula, memilih dan menyiapkan sistem operasi yang tepat adalah langkah pertama yang krusial. Windows 11 menawarkan pengalaman development yang powerful dengan dukungan yang luas untuk berbagai tool dan teknologi. Dalam panduan ini, kita akan mengoptimalkan Windows 11 untuk kebutuhan pemrograman.

### Mengapa Windows 11 untuk Programming?

Windows 11 meberikan beberapa keunggulan untuk developers:

1. `Kompatible luas` dengan bebagai tool development.
2. `Windows Subsytem for Linux`(*WSL2*) - mejalakan lingkungan Linux secara native.
3. `Support untuk Container` dengan *Docker Desktop*.
4. `Visual Studo Integration` yang seamless.
5, `GUI` yang user friendly untuk manajemen proyek

### Persiapan Awal windows 11

#### 1. Aktifkan Developer Mode

  {{< image 
  src="/images/content/basic/aktif-developer-mode.jpg" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

- Buka `Settings` -> `Privacy & security` -> `For developers`.
- Aktifkan `Developer Mode`.
- Ini akan mengaktifkan fitur seperti `device discovery`, `remote debugging`, dan instalasi app dari sumber lain.

#### 2. Update Windows 11 ke Versi Terbaru

Pastikan Windows 11 sudah Updated:

- `Window Update` -> Check for Updates.

  {{< image 
  src="/images/content/basic/update-windows-cek.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  {{< image 
  src="/images/content/basic/uptodates.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

- Install semua `Update` yang tersedia termasuk opsional updates.

  {{< image 
  src="/images/content/basic/update-options.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

#### 3. Konfigurasi Power Plan

Untuk development, kita perlu `perfomance` optimal:

- Buka `Control Panel` -> `Hardware and sound -> Power Options

  {{< image 
  src="/images/content/basic/change-power-mode-settings-in-win11-3.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

- Pilih `High performance` atau buat cutom plan

  {{< image 
  src="/images/content/basic/change-power-mode-settings-in-win11-4.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}
   
   atau buat `Custom Plan`

  {{< image 
  src="/images/content/basic/change-power-mode-settings-in-win11-5.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

- `Adjust advanced setting` untuk mencegah sleep saat idle atau tidak di gunakan.

  {{< image 
  src="/images/content/basic/change-power-mode-settings-in-win11-6.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### Install WSL2 (*Windows Subsytem for Linux*)
WSL2 adalah `game-changer` untuk development di windows:

#### Langkah instalasi:

```PowerShell
# Buka PowerShell sebagai Administrator
wsl --install

# Install distro Linux tertentu (contoh: Ubuntu)
wsl --install -d Ubuntu

# Cek versi WSL
wsl --version

# Set WSL2 sebagai default
wsl --set-default-version 2
```

#### Konfigurasi WSL2:
1. Install Windows `Terminal` dari `Microsoft Store`.
2. Set default profile ke *WSL* distro pilihan.
3. Customize shell (*bash, zsh dengan Oh My zsh`).

### Package management dengan Winget dan Chocolatey

Winget (*Built-in Windows Package Manager*).

```PowerShell
# Cari package
winget search nodejs

# Install package
winget install Node.js
winget install Python
winget install Git.Git
```
### Chocolatey (Third-party Package Manager)

```PowerShell
# Install Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install packages dengan Chocolatey
choco install visualstudiocode -y
choco install docker-desktop -y
choco install postman -y
```

### Setup Development Environtment

1. Install Git

```PowerShell
winget install Git.Git

# Konfigurasi
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main
```

2. Install Visual Studio Code

```PowerShell
winget install Microsoft.VisualStudioCode

# Extension penting untuk VS Code:
# - Prettier (code formatting)
# - ESLint (JavaScript linting)
# - Live Server (web development)
# - Remote - WSL (integrasi dengan WSL)
```

3. Install Bahasa Pemprograman

Node.js dan npm:

```PowerShell
winget install OpenJS.NodeJS.LTS
```

python:

```PowerShell
winget install Python.Python.3.11
```

Java:

```PowerShell
winget install EclipseAdoptium.Temurin.17.JDK
```

### Optimasi Performance untuk Development
#### 1. Adjust Visual Effects
1. `System Properties` -> Advanced -> Performance Settings
2. Pilih "*Adjust for best performance*" atau custom:
    - Pertahankakn "*Smooth edge of screen fonts"
    - Nonaktifkan animasi yang tidak perlu

#### 2. Konfigurasi Virtual Memory
1. `System Properties` -> Advanced -> Performance -> Settings -> Advanced
2. `Change Virtual Memory` -> Custome size
3. `Set initialsize` = `1.5x RAM`, Maximum Size = `3x RAM`

#### 3. SSD Optimization
1. `Defragment` dan optimized drives (*khusus SSD*)
2. `Enable TRIM` (*sudah otomatis di windows 11*)


### Checklist Final Setup

1. Aktifkan `*Developer Mode*`

2. Install *`WSL2`* dan distro `Linux` pilihan

3. Install Windows `Terminal` dan konfigurasi

4. Install `Git` dan konfigurasi

5. Install `Visual Studio Code` dengan extension penting

6. Install bahasa pemrograman (*Node.js, Python, Java*)

7. Install Docker Desktop dengan *`WSL2`* backend

8. Install browser *development* (Chrome, Firefox Dev)

9. Install database tools yang diperlukan

10. Optimasi power plan dan virtual memory

### Kesimpulan

Windows 11 telah menjadi platform development yang powerful, terutama dengan hadirnya WSL2 yang memadukan kekuatan Linux dan kemudahan Windows. Dengan setup yang tepat, Anda dapat memiliki environment development yang robust dan produktif.

Di tutorial selanjutnya, kita akan membahas setup specific language environments dan project pertama Anda di Windows 11.

Tips: Selalu backup konfigurasi dan environment variables setelah setup sukses untuk memudahkan recovery di masa depan.