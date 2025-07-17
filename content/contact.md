---
title: "Kontak Kami"
date: 2025-06-27
layout: "single"
type: "page"
---

## Hubungi Kami

### Informasi Kontak
Email: info@example.com  
Telepon: +62 21 1234 5678  
Alamat: Jl. Teknologi No. 99, Jakarta


Silakan kirimkan pertanyaan atau pesan Anda melalui formulir berikut. Kami akan segera merespons:

<form 
  action="https://formspree.io/f/xgvygjeb" 
  method="POST"
  class="mt-6 space-y-4"
>
  <!-- Anti-spam (honeypot) -->
  <input type="text" name="_gotcha" style="display:none">

  <!-- Redirect setelah sukses -->
  <input type="hidden" name="_next" value="https://peaplesmart.github.io/terima-kasih/">

  <div>
    <label class="block mb-1 font-semibold">Nama Lengkap</label>
    <input 
      type="text" 
      name="name" 
      class="w-full p-2 border border-gray-300 rounded" 
      required 
      autocomplete="name"
    >
  </div>

  <div>
    <label class="block mb-1 font-semibold">Email</label>
    <input 
      type="email" 
      name="email" 
      class="w-full p-2 border border-gray-300 rounded" 
      required 
      autocomplete="email"
    >
  </div>

  <div>
    <label class="block mb-1 font-semibold">Pesan</label>
    <textarea 
      name="message" 
      class="w-full p-2 border border-gray-300 rounded" 
      rows="5" 
      required
    ></textarea>
  </div>

  <div>
    <button 
      type="submit" 
      class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg"
    >
      Kirim Pesan
    </button>
  </div>
</form>