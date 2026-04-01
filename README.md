# E-Commerce Cart

## Informasi Mahasiswa

- Nama : Muhamad Zidan Rabani
- NIM : 2410501036

## Deskripsi Aplikasi

Aplikasi My Shop adalah sebuah purwarupa (prototype) e-commerce sederhana berbasis seluler (React Native dan Expo) yang mensimulasikan fitur utama dari sebuah toko online interaktif. Aplikasi ini dibuat dengan mengedepankan pengalaman pengguna (UX) yang mulus melalui antarmuka navigasi yang intuitif, serta pengelolaan keranjang belanja yang handal dan cepat dengan memanfaatkan *Global State Management*.

## Fitur yang Diimplementasikan

- **Daftar Produk (Product List)**: Menampilkan halaman katalog berisi data produk (gambar, nama, harga) dari sumber data lokal aplikasi.
- **Manajemen Keranjang Belanja Berbasis Redux (Cart Management)**:
  - Penambahan produk ke dalam keranjang.
  - Penyesuaian fleksibel jumlah barang (kuantitas + dan -) pada halaman keranjang.
  - Penghapusan produk secara spesifik dari keranjang belanja.
  - Pengosongan interaktif keseluruhan keranjang hanya dengan satu tombol.
- **Kalkulasi Checkout Dinamis**: Menghitung secara instan (real-time) dan menampilkan total nilai keranjang, dilengkapi dengan tampilan standar mata uang Rupiah (Rp).
- **Pengaturan State Terpusat (Redux Toolkit)**: Implementasi manajemen data dengan Redux (`cartSlice`) untuk memastikan jumlah keranjang ter-sinkronisasi di seluruh aplikasi.
- **Navigasi Tab Bawah (Bottom Tabs)**: Memanfaatkan `@react-navigation/bottom-tabs` bersama ikon grafis dari `Ionicons` (via `@expo/vector-icons`) agar memudahkan perpindahan antara halaman Katalog Produk dan halaman Keranjang Belanja.

## Screenshot

### Product List
<p align="center">
  <img src="./assets/screenshots/product.jpeg" alt="Product" width="250" />
</p>

### Keranjang Belanjaan
<p align="center">
  <img src="./assets/screenshots/cart.jpeg" alt="Cart" width="250" />
</p>

## Cara Menjalankan

```bash
npm install && npx expo start
```