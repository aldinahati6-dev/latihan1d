
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formkontak");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Nomor WhatsApp tujuan
        const nomorWhatsApp = "6287857176475";

        // Mengambil data formulir
        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const minat = document.getElementById("minat").value;
        const pesan = document.getElementById("pesan").value.trim();

        // Memeriksa kelengkapan formulir
        if (!nama || !email || !telepon || !minat || !pesan) {
            alert("Silakan isi semua formulir terlebih dahulu!");
            return;
        }

        // Menyusun pesan WhatsApp
        const isiPesan = `Halo, saya menghubungi melalui website CV.

Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;

        // Mengubah pesan menjadi format URL
        const pesanEncoded = encodeURIComponent(isiPesan);

        // Membuat tautan WhatsApp
        const urlWhatsApp =
            `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

        // Membuka WhatsApp di tab baru
        const tabWhatsApp = window.open(urlWhatsApp, "_blank");

        // Jika tab baru diblokir browser
        if (!tabWhatsApp) {
            window.location.href = urlWhatsApp;
        }
    });
});
