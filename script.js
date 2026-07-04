document.getElementById('btnKlik').addEventListener('click', function() {
    const pesan = document.getElementById('pesan');
    if (pesan.classList.contains('hidden')) {
        pesan.classList.remove('hidden');
        pesan.classList.add('show');
    } else {
        pesan.classList.remove('show');
        pesan.classList.add('hidden');
    }
});