# Next.js Payment Gateway & Auth Project

Proyek ini merupakan sebuah studi kasus dan sarana pembelajaran untuk mengintegrasikan sistem autentikasi modern dan _payment gateway_ ke dalam aplikasi web menggunakan Next.js. Fokus utamanya adalah pada fungsionalitas inti (MVP) untuk memahami alur kerja **Midtrans** dan **Supabase Auth**.

---

## 🚀 Live Demo & Tampilan

Lihat aplikasi ini secara langsung untuk merasakan fungsionalitasnya.

**[➡️ Kunjungi Live Demo](https://masukkan-url-live-demo-anda.com)**

---

## ✨ Fitur Utama

Proyek ini mencakup serangkaian fitur yang esensial untuk aplikasi e-commerce sederhana dan dashboard admin.

### 🔐 Autentikasi Pengguna

- **Pendaftaran & Login:** Pengguna dapat membuat akun dan masuk menggunakan email & password.
- **Login dengan Google:** Opsi login sekali klik menggunakan akun Google (OAuth).
- **Manajemen Password:** Fitur untuk lupa password dan memperbarui password melalui email.

### 🛍️ Alur Belanja Pengguna

- **Checkout Tanpa Login:** Pengguna dapat langsung melakukan _checkout_ produk tanpa perlu membuat akun, menyederhanakan proses transaksi.

### dashboard Admin/Pengguna

- **Akses Terproteksi:** Halaman dashboard hanya bisa diakses setelah pengguna berhasil login.
- **CRUD Produk:** Admin dapat membuat, membaca, memperbarui, dan menghapus data produk.
- **Pencarian Produk:** Mencari produk berdasarkan nama produk.
- **Manajemen Transaksi:**
  - Melihat riwayat semua transaksi yang telah dilakukan.
  - Mencari transaksi spesifik berdasarkan nama produk.
  - Memfilter transaksi berdasarkan statusnya (e.g., `pending`, `paid`, `failed`).

---

## 🛠️ Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) - Framework React untuk aplikasi web modern.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn/ui](https://ui.shadcn.com/) - Untuk desain antarmuka yang cepat dan responsif.
- **Autentikasi & Database:** [Supabase](https://supabase.io/) - Sebagai backend (BaaS) untuk autentikasi dan database PostgreSQL.
- **Payment Gateway:** [Midtrans](https://midtrans.com/) - Untuk memproses pembayaran dengan berbagai metode.
- **Validasi Skema:** [Zod](https://zod.dev/) - Untuk validasi tipe data dan skema form.

---

## 🧠 Fokus Pembelajaran

Karena ini adalah proyek untuk pembelajaran, beberapa keputusan desain diambil untuk fokus pada tujuan utama:

1.  **Checkout Tanpa Login:** Fitur ini sengaja dibuat untuk mempelajari alur transaksi Midtrans secara terisolasi, di mana identitas pengguna tidak menjadi prasyarat untuk pembayaran.
2.  **Auth untuk Dashboard:** Sistem autentikasi (login/register) secara spesifik digunakan untuk melindungi rute admin/dashboard, tempat manajemen data (CRUD) dan pemantauan transaksi terjadi.

Pendekatan ini memisahkan dua logika inti (pembayaran dan manajemen) untuk pemahaman yang lebih terstruktur.

---

## routes Aplikasi

Aplikasi ini memiliki rute publik dan rute yang dilindungi.

- **Public Routes:** Dapat diakses oleh siapa saja.
  - `/`
  - `/sign-in`
  - `/sign-up`
  - `/forgot-password`
- **Protected Routes:** Memerlukan login untuk mengakses.
  - `/product`
  - `/transaction`

---

## ⚙️ Panduan Instalasi Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori**

    ```bash
    git clone [https://github.com/username-anda/nama-repositori-anda.git](https://github.com/username-anda/nama-repositori-anda.git)
    cd nama-repositori-anda
    ```

2.  **Instalasi Dependensi**

    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Konfigurasi Environment Variables**
    Buat file `.env.local` di root proyek dengan menyalin dari `.env.example`.

    ```bash
    cp .env.example .env.local
    ```

    Kemudian, isi file `.env.local` dengan kredensial dari Supabase dan Midtrans Anda.

4.  **Jalankan Server Development**

    ```bash
    npm run dev
    # atau
    yarn dev
    ```

    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📄 Lisensi

Proyek ini didistribusikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.
