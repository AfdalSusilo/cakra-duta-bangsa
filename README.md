# Landing Page Profil Perusahaan

Website landing page dinamis untuk profil perusahaan. Semua data diatur dari satu file `config.js`.

## 🚀 Deploy ke Vercel via GitHub

### Step 1: Push ke GitHub

```bash
cd ~/cakra-duta-bangsa
git add .
git commit -m "Dynamic landing page"
git push origin master
```

### Step 2: Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Login dengan akun GitHub
3. Klik **"Add New Project"**
4. Pilih repository `cakra-duta-bangsa`
5. Klik **"Deploy"**
6. Selesai! Website sudah live 🎉

## 📁 Struktur File

```
cakra-duta-bangsa/
├── index.html      # Template utama
├── config.js       # ⭐ SEMUA DATA DI SINI (edit ini saja!)
├── app.js          # Logika dinamis
├── logo.svg        # Logo perusahaan
└── README.md       # Dokumentasi ini
```

## ✏️ Cara Edit Data

**Cukup edit file `config.js`!** Semua data website diambil dari sana.

### Contoh Edit:

```javascript
// Ganti nama perusahaan
company: {
    name: "PT Contoh Indonesia",
    tagline: "Solusi Terbaik untuk Anda",
    description: "Deskripsi perusahaan..."
}

// Ganti kontak
contact: {
    phone: "08123456789",
    whatsapp: "628123456789", // Format internasional
    email: "info@contoh.com"
}

// Tambah layanan
services: [
    {
        title: "Layanan Baru",
        description: "Deskripsi layanan baru",
        icon: "scale" // scale, building, home, users, file, phone
    }
]

// Tambah anggota tim
team: [
    {
        name: "Nama Baru",
        position: "Jabatan",
        description: "Deskripsi",
        initial: "N" // Huruf awal untuk avatar
    }
]
```

## 🎨 Fitur

- ✅ **100% Dinamis** - Semua data dari config.js
- ✅ **Responsive** - Mobile & Desktop
- ✅ **Dark Theme** - Navy + Gold profesional
- ✅ **Logo SVG** - Tajam di semua ukuran
- ✅ **Modal Detail** - Klik layanan/tim untuk detail
- ✅ **Form → WhatsApp** - Langsung ke chat WA
- ✅ **Smooth Scroll** - Navigasi halus
- ✅ **Animasi** - Fade-in saat scroll
- ✅ **Mobile Menu** - Hamburger menu di HP
- ✅ **Testimoni** - Rating bintang
- ✅ **Social Media** - Instagram, FB, LinkedIn, dll

## 📱 Responsive

| Elemen | HP | Tablet | Desktop |
|--------|-----|--------|---------|
| Navbar | Hamburger | Full menu | Full menu |
| Hero | Stack | Side-by-side | Side-by-side |
| Layanan | 1 kolom | 2 kolom | 3 kolom |
| Tim | 1 kolom | 2 kolom | 4 kolom |
| Kontak | Stack | 2 kolom | 2 kolom |

## 🔗 WhatsApp Integration

Form otomatis mengirim pesan ke WhatsApp dengan format:

```
*KONSULTASI*

Nama: [Input User]
No HP: [Input User]
Layanan: [Pilihan]
Pesan: [Input User]
```

## 🛠️ Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Data tidak muncul | Cek syntax di config.js |
| WA tidak buka | Pastikan format `628xxx` (tanpa +) |
| Logo tidak tampil | Pastikan logo.svg ada di folder |
| Animasi tidak jalan | Pastikan app.js ter-load |

## 📞 Support

Edit `config.js` untuk mengubah semua konten website.
