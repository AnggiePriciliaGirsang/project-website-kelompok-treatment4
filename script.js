// Menunggu interaksi tombol verifikasi dari pengguna
document.getElementById('btnVerifikasi').addEventListener('click', function () {
    const statusAlert = document.getElementById('statusAlert');

    // Fitur toggle (buka-tutup) alert status kelulusan tugas CPMK
    if (statusAlert.classList.contains('hidden')) {
        statusAlert.classList.remove('hidden');
        this.textContent = "Sembunyikan Status";
    } else {
        statusAlert.classList.add('hidden');
        this.textContent = "Verifikasi Status Kelompok";
    }
});