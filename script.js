// --- 1. SELEKSI ELEMEN DOM ---
const inputHarga = document.getElementById("harga-asli");
const inputDiskon = document.getElementById("persen-diskon");
const btnHitung = document.getElementById("btn-hitung");
const resultBox = document.getElementById("result-box");
const txtHemat = document.getElementById("total-hemat");
const txtHargaAkhir = document.getElementById("harga-akhir");

// --- 2. FUNGSI UTAMA: KALKULASI DISKON ---
function hitungDiskonBelanja() {
    // Ambil nilai mentah dari input dan ubah menjadi tipe data Angka (Float)
    const hargaAsli = parseFloat(inputHarga.value);
    const persenDiskon = parseFloat(inputDiskon.value);

    // --- VALIDASI JAGA-JAGA ---
    // Cek apakah inputan kosong atau bukan angka (NaN)
    if (isNaN(hargaAsli) || isNaN(persenDiskon)) {
        alert("Harap isi kedua kolom input dengan angka terlebih dahulu! ⚠️");
        return;
    }

    // Cek batasan logika angka minus atau diskon melebihi 100%
    if (hargaAsli < 0 || persenDiskon < 0 || persenDiskon > 100) {
        alert("Input tidak valid! Pastikan harga tidak minus dan diskon di antara 0 - 100% ⚠️");
        return;
    }

    // --- RUMUS LOGIKA MATEMATIKA ---
    const totalHemat = (persenDiskon / 100) * hargaAsli;
    const hargaAkhir = hargaAsli - totalHemat;

    // --- FORMAT ANGKA KE RUPIAH (IDR) ---
    txtHemat.innerText = formatRupiah(totalHemat);
    txtHargaAkhir.innerText = formatRupiah(hargaAkhir);

    // --- FITUR INTERAKTIF KONDISIONAL ---
    // Jika diskon lebih dari atau sama dengan 40%, ubah visual panel menjadi hijau (Super Hemat)
    if (persenDiskon >= 40) {
        resultBox.classList.add("super-hemat");
    } else {
        resultBox.classList.remove("super-hemat");
    }

    // Tampilkan panel hasil dengan menghapus class 'hidden'
    resultBox.classList.remove("hidden");
}

// --- 3. FUNGSI AUXILIARY: FORMATTER RUPIAH Sederhana ---
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}

// --- 4. EVENT LISTENERS ARSITEKTUR ---
// Jalankan fungsi saat tombol diklik
btnHitung.addEventListener("click", hitungDiskonBelanja);

// Fitur Kenyamanan: Jalankan fungsi jika user menekan tombol 'Enter' di dalam input
inputDiskon.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        hitungDiskonBelanja();
    }
});
