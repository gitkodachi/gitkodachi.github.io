# gitkodachi.github.io

✅ 1) Pahami alur branch dasar
1. main → untuk produksi, jangan ngoding langsung di sini
   - main → https://username.github.io
2. dev → buat pengembangan
   - dev → https://username.github.io/dev/
3. fitur/apa atau fix/apa → kalau ada task kecil

✅ 2) Selalu pull dulu sebelum kerja

```bash
git checkout dev
git pull origin dev
```

✅ 3) Selesai coding, commit ke dev

```bash
git add .
git commit -m "Fitur baru: search modal"
git push origin dev
```

```bash
{{ partial "components/post-grid.html" (dict "ctx" .) }}
```

✅ 4) Setelah yakin fix & rapi → baru merge ke main pakai Pull Request (PR)

> Note: Jangan merge manual di VS Code kecuali ngerti konfliknya.
Lebih aman pakai GitHub PR, karena bisa lihat diff & konflik.

✅ 5) Kalau ada konflik, baca & resolve pelan-pelan
Jangan asal hapus, pastikan paham bagian mana yang harus dipilih.

✅ ToDos:
   - 🚀 Alur kerja simple buat kamu

   - 🛠️ Cheat sheet command Git dasar

   - 🔄 Workflow auto deploy per branch

   - 👨‍💻 Cara merge via GitHub PR