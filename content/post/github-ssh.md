---
title: "Cara Setup SSH Key untuk Github agar Bisa Ngepush Tanpa Password"
date: 2025-06-27
thumbnail: "/images/cover/github-ssh.png"
image: "/images/cover/github-ssh.png"
series: ["git", "SSH", "Github"]
tutorial: ["Git", "SSH", "Github"]
topik: ["Git", "SSH", "Github"]
description: "Pelajari dasar-dasar version control dengan Git untuk pemula."
---

Kita bisa melakukan push ke Github melalui dua metode yakni, melalui protokol HTTPS dan SSH.

Jika kita menggunakan HTTPS, maka kita akan dimintai password di setiap kali melakukan push. Sedangkan kalau pakai SSH, ini tidak perlu..

..karena password-nya akan diwakili oleh SSH Key.

Pada tutorial ini, kita akan belajar gimana cara setup SSH Key untuk Github. Sehingga nanti bisa melakukan push tanpa harus ngetik password terus menerus.

Mari kita mulai!

### Apa itu SSH Key?

SSH Key adalah Key yang dipakai untuk berkomunikasi dengan server melalui protokol SSH. SSH Key terdiri dari publik key dan private key.

Publik key akan kita taruh ke server dalam hal ini adalah Github, kemudian private key akan kita simpan di lokal.

Private key sebenarnya mewakili password, sehingga kamu tidak boleh sembarangan membagikannya.

Intinya, private key dan publik key akan dicocokan secara otomatis saat kita terhubung dengan SSH.

### 1. Cara Membuat SSH Key

Kita bisa membuat SSH Key dengan perintaih *ssh-keygen*, ini bisa kamu ketik di Terminal dan Git Bash.

Silakan buka Terminal, kemudian ketik perintah berikut untuk membuat SSH Key:

```bash
cd ~/.ssh/ #pindah ke direktori ssh

# membuat private key dan public key
ssh-keygen -t rsa
```

Pada perintah ini, kita masuk dulu ke folder .**ssh** yang ada di Home, kemudian kita generate SSH Key dengan **ssh-keygen**.

Berikutnya, kita akan diminta mengisi **id** dan **passpharse**.

  {{< image 
  src="/images/content/git/membuat-key.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Pada contoh di atas, saya mengisi **id** dengan **dian** dan **passpharse** tidak diisi. Langsung saja tekan **Enter** saat pengisian **passpharse**.

Jika kamu mengisi passpharse, maka akan diminta mengisinya lagi saat melakukan push melalui SSH.

Setelah selesai… akan ada dua file baru di dalam direktori **~/.ssh/**.

  {{< image 
  src="/images/content/git/ssh-key.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

*Private Key* berisi kunci rahasia yang tidak boleh diketahui siapapun dan Public Key berisi kunci *publik* yang akan kita taruh di Bitbucket.

### 2. Tambahkan SSH Key ke Github

Sebelumnya ambil dulu kunci publik yang sudah anda buat, gunakan perintah **cat**.

```bash
cat ~/.ssh/id_anda.pub
```

Copy semua teks yang ditampilkan.
  {{< image 
  src="/images/content/git/ssh-public-key.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Lalu masuk ke [Settings>SSH and GPG Keys](https://github.com/settings/keys), tambahkan SSH Key baru dengan mengelik *New SSH* Key.

Setelah itu masukkan atau paste public key yang kamu copy tadi.

  {{< image 
  src="/images/content/git/github-add-ssh-key.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Jangan lupa juga untuk kasi Title seperti nama komputermu biar gampang diingat, jika nanti kamu menambahkan banyak SSH Key.

### 3. Uji Coba SSH Key

Karena kita baru pertama kali buat SSH Key, kita harus tambahkan dulu identitas kita.

Caranya ketik perintah berikut:

```bash
ssh-add dian
```

Silakan ganti **dian** dengan **id** dari **SSH** key yang kamu buat tadi. Jika berhasil, maka akan muncul seperti ini:

  {{< image 
  src="/images/content/git/ssh-add.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Setelah itu, baru kita bisa tes konek ke Github dengan SSH.

Caranya, ketik perintah berikut:
```bash
ssh -T git@github.com
```

Jika hasilnya seperti berikut ini, berarti berhasil. Selanjutnya kita tinggal melakukan push dengan SSH.

  {{< image 
  src="/images/content/git/test-ssh-github.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

### 4. Konfigurasi Agar SSH Key Otomatis ditambahkan

Setelah komputer di-restart, SSH Key harus ditambahkan lagi agar bisa digunakan.

Nah, biar tidak mengetik perintah **ssh-add** berulang-ulang, kita bisa buat konfigurasi agar SSH Key otomatis ditambahkan.

Caranya:

1. Buat file baru di dalam direktori **~/.ssh/** bernama **config**.

  {{< image 
  src="/images/content/git/file-config.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

2. Isi file config dengan konfigurasi seperti ini:
```bash
# Github.com server
Host github.com
IdentityFile ~/.ssh/dian
```

Ganti dian dengan id SSH Key yang kamu buat.

  {{< image 
  src="/images/content/git/ssh-config.avif" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

Selesai.

### Apa Selanjutnya

Selamat, kamu sudah berhasil **setup SSH** Key untuk menggunakan Github melalui **SSH**.

Selanjutnya, Cobalah untuk **clone repository** dengan *SSH* dan lakukan *push* dan *pull*.

  {{< image 
  src="/images/content/git/clone-repository-dengan-SSH.png" 
  alt="Deskripsi gambar" 
  caption="*Gambar contoh dengan zoom*" 
  >}}

  Selamat Mencoba...!
