# CV Cakra Duta Bangsa - Landing Page

Website profil hukum untuk CV Cakra Duta Bangsa.

## 🚀 Deploy ke Vercel via GitHub

### Step 1: Buat Repository GitHub

```bash
# Inisialisasi git
cd ~/cakra-duta-bangsa
git init
git add .
git commit -m "Initial commit - Landing page CV Cakra Duta Bangsa"

# Buat repository di GitHub (via CLI atau web)
gh repo create cakra-duta-bangsa --public --source=. --push
```

### Step 2: Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Login dengan akun GitHub
3. Klik **"Add New Project"**
4. Pilih repository `cakra-duta-bangsa`
5. Klik **"Deploy"**
6. Selesai! Website sudah live 🎉

### Custom Domain (Opsional)

1. Di Vercel Dashboard → Project → Settings → Domains
2. Masukkan domain yang diinginkan (misal: `cakradutabangsa.com`)
3. Ikuti instruksi DNS yang diberikan Vercel

## 📁 Struktur File

```
cakra-duta-bangsa/
├── index.html      # Halaman utama
├── logo.svg        # Logo perusahaan (SVG tajam)
└── README.md       # Dokumentasi ini
```

## 🎨 Fitur

- ✅ Responsive (mobile-first)
- ✅ Dark theme profesional (navy + gold)
- ✅ Logo "Panah Cakra" (SVG)
- ✅ Animasi scroll (fade-in)
- ✅ Form konsultasi → WhatsApp
- ✅ Tombol WhatsApp floating
- ✅ Section: Tentang, Layanan, Tim, Kontak
- ✅ SEO meta tags

## 🛠️ Edit Konten

### Ganti Nomor WhatsApp

Cari `6281330102647` di `index.html` dan ganti dengan nomor yang diinginkan.

### Tambah/Edit Layanan

Cari section `<!-- Layanan -->` dan duplikat card yang ada.

### Edit Profil Tim

Cari section `<!-- Tim Kami -->` dan ubah data sesuai kebutuhan.

## 📞 Kontak

- **Alamat:** Jl. Panggreman 1-B No.13, Kel. Kranggan, Kec. Kranggan, Kota Mojokerto, Jawa Timur
- **Telepon:** 0813-3010-2647
- **Email:** cvcakradutabangsa@gmail.com
- **NIB:** 2809210023601
