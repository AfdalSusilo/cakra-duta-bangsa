// ============================================
// CONFIG - EDIT DATA DI SINI
// ============================================

const CONFIG = {
    // INFO PERUSAHAAN
    company: {
        name: "Nama Perusahaan Anda",
        tagline: "Tagline Perusahaan Anda",
        description: "Deskripsi singkat tentang perusahaan Anda. Ganti dengan deskripsi yang sesuai.",
        nib: "NIB Perusahaan",
        logo: "logo.svg"
    },

    // KONTAK
    contact: {
        address: "Alamat Lengkap Perusahaan",
        city: "Kota, Provinsi",
        phone: "08xxxxxxxxxx",
        whatsapp: "628xxxxxxxxxx", // Format internasional tanpa +
        email: "email@perusahaan.com",
        maps: "" // Link Google Maps (opsional)
    },

    // SOSIAL MEDIA (kosongkan jika tidak ada)
    social: {
        instagram: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        tiktok: ""
    },

    // STATISTIK
    stats: [
        { value: "10+", label: "Tahun Pengalaman" },
        { value: "100+", label: "Klien Dilayani" },
        { value: "5", label: "Tim Profesional" },
        { value: "95%", label: "Klien Puas" }
    ],

    // LAYANAN
    services: [
        {
            title: "Layanan 1",
            description: "Deskripsi layanan 1. Ganti dengan layanan Anda.",
            icon: "scale" // scale, building, home, users, file, phone
        },
        {
            title: "Layanan 2",
            description: "Deskripsi layanan 2. Ganti dengan layanan Anda.",
            icon: "building"
        },
        {
            title: "Layanan 3",
            description: "Deskripsi layanan 3. Ganti dengan layanan Anda.",
            icon: "home"
        },
        {
            title: "Layanan 4",
            description: "Deskripsi layanan 4. Ganti dengan layanan Anda.",
            icon: "users"
        },
        {
            title: "Layanan 5",
            description: "Deskripsi layanan 5. Ganti dengan layanan Anda.",
            icon: "file"
        },
        {
            title: "Layanan 6",
            description: "Deskripsi layanan 6. Ganti dengan layanan Anda.",
            icon: "phone"
        }
    ],

    // TIM
    team: [
        {
            name: "Nama Anggota 1",
            position: "Jabatan 1",
            description: "Deskripsi singkat tentang anggota tim 1.",
            initial: "A"
        },
        {
            name: "Nama Anggota 2",
            position: "Jabatan 2",
            description: "Deskripsi singkat tentang anggota tim 2.",
            initial: "B"
        },
        {
            name: "Nama Anggota 3",
            position: "Jabatan 3",
            description: "Deskripsi singkat tentang anggota tim 3.",
            initial: "C"
        },
        {
            name: "Nama Anggota 4",
            position: "Jabatan 4",
            description: "Deskripsi singkat tentang anggota tim 4.",
            initial: "D"
        }
    ],

    // TESTIMONI (opsional)
    testimonials: [
        {
            name: "Nama Klien 1",
            company: "Perusahaan 1",
            text: "Testimoni dari klien 1. Ganti dengan testimoni asli.",
            rating: 5
        },
        {
            name: "Nama Klien 2",
            company: "Perusahaan 2",
            text: "Testimoni dari klien 2. Ganti dengan testimoni asli.",
            rating: 5
        }
    ],

    // FORM KONSULTASI
    form: {
        services: [
            "Pilih Layanan",
            "Konsultasi Umum",
            "Layanan 1",
            "Layanan 2",
            "Layanan 3"
        ]
    },

    // PENGATURAN TAMPILAN
    theme: {
        primaryColor: "#d4a843", // Warna utama (emas)
        darkColor: "#0a1628",    // Warna gelap (navy)
        fontFamily: "Inter"      // Font utama
    }
};
