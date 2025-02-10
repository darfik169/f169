// Event listener untuk tombol hitung
document.getElementById("calculate").addEventListener("click", function () {
    const tanggal = parseInt(document.getElementById("tanggal").value);
    const bulan = parseInt(document.getElementById("bulan").value);
    const tahun = parseInt(document.getElementById("tahun").value);
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);

    // Validasi input
    if (isNaN(tanggal) || isNaN(bulan) || isNaN(tahun) || isNaN(latitude) || isNaN(longitude)) {
        alert("Semua input harus diisi dengan benar!");
        return;
    }

    // Hitung day of year
    const date = new Date(tahun, bulan - 1, tanggal);
    const dayOfYear = Math.floor((date - new Date(tahun, 0, 0)) / (1000 * 60 * 60 * 24));

    // Hitung declinasi matahari
    const declination = 23.45 * Math.sin(((360 / 365) * (dayOfYear - 81)) * (Math.PI / 180));

    // Hitung perata waktu (Equation of Time)
    const B = ((360 / 365) * (dayOfYear - 81)) * (Math.PI / 180);
    const perataWaktuDecimal = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
    const perataWaktu = perataWaktuDecimal /60;
    // Hitung waktu istiwa
    const ihtiyat = 2 / 60; // Tambahkan 2 menit (dalam jam)
    const selisihIstiwaWIB = perataWaktu - ((longitude - 105) / 15) + ihtiyat;
    const istiwaDecimal =  selisihIstiwaWIB; // Tambahkan 12 jam
    const jam = Math.floor(istiwaDecimal);
    const menit = Math.round((istiwaDecimal - jam) * 60);

    // Format waktu istiwa menjadi HH:MM
    const waktuIstiwa = `${jam}:${menit < 10 ? '0' : ''}${menit}`;

    // Tampilkan hasil di dalam ul#prayerTimesList
    const prayerTimesList = document.getElementById("prayerTimesList");
    prayerTimesList.innerHTML = ""; // Kosongkan isi sebelumnya
    const li = document.createElement("li");
    li.textContent = `Waktu Istiwa: ${selisihIstiwaWIB}`;
    prayerTimesList.appendChild(li);

    // Tampilkan juga declination dan perata waktu (jika diperlukan untuk validasi)
    document.getElementById("declinasi").value = declination.toFixed(2);
    document.getElementById("perataWaktu").value = perataWaktu.toFixed(2);
});

// Mendapatkan lokasi otomatis
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        document.getElementById("latitude").value = position.coords.latitude.toFixed(6);
        document.getElementById("longitude").value = position.coords.longitude.toFixed(6);
    }, () => {
        alert("Gagal mendapatkan lokasi otomatis.");
    });
} else {
    alert("Geolocation tidak didukung oleh browser ini.");
}

// Secara otomatis mengisi tanggal, bulan, dan tahun sekarang
const now = new Date();
document.getElementById("tanggal").value = now.getDate();
document.getElementById("bulan").value = now.getMonth() + 1;
document.getElementById("tahun").value = now.getFullYear();
