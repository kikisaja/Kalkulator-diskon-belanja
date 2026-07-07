# 🛍️ Kalkulator Diskon Ceria (Pop Art Edition)

Sebuah aplikasi web satu halaman (*Single Page Application*) interaktif untuk menghitung pemotongan diskon belanja secara instan. Dirancang khusus dengan gaya **Pop Art & Bright Modern UI** yang cerah dan bersih.

Proyek ini sangat cocok dijadikan modul belajar pertama bagi siswa SMK Jurusan RPL untuk memahami interaksi dasar formulir HTML dan pengolahan logika matematika di JavaScript.

---

## 🚀 Fitur Utama

* **Bright Pop Art UI:** Desain minimalis yang tidak monoton dengan border tebal (*stroke solid*) dan skema warna kontras tinggi.
* **Smart Input Validation:** Mencegah kalkulasi eror jika input kosong, bernilai minus, atau persentase diskon di luar batasan standar ($0\% - 100\%$).
* **Interactive Conditional Theme:** Panel hasil kalkulasi akan berubah warna menjadi hijau cerah secara dinamis jika pengguna memasukkan diskon besar (lebih dari atau sama dengan $40\%$).
* **Local Currency Formatter:** Menggunakan fungsi bawaan `.toLocaleString('id-ID')` untuk mengubah format angka biasa menjadi format mata uang Rupiah secara rapi otomatis.
* **Dual Trigger Action:** Proses hitung dapat dijalankan dengan mengklik tombol utama atau cukup menekan tombol **Enter** dari keyboard.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur input, label formulir, dan wadah teks hasil
├── style.css        # Variabel warna cerah, animasi pop-in, dan bayangan pop art
└── javascript.js    # Validasi input, rumus kalkulasi matematika, dan manipulasi DOM
