/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 09: Depot Air Minum Isi Ulang & Pesan Antar Galon (evevdepot)
 */

const PROFIL_USAHA = {
  nama: "evevdepot",
  namaLengkap: "evevdepot — Depot Air Minum Isi Ulang Higienis & Pesan Antar Galon",
  sektor: "Depot Air Minum Isi Ulang & Pesan Antar Galon",
  tagline: "Air Galon Murni, Segar & Higienis — Antar Kilat Langsung ke Pintu Anda",
  deskripsi:
    "Depot air minum isi ulang modern berstandar uji lab Dinkes dengan 5 tahap filtrasi, membran RO, sterilisasi UV & ozon. Melayani pesan antar galon cepat ke rumah tangga, kos, ruko, klinik, kafe, dan perkantoran di Jakarta Selatan.",
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Melati Raya No. 18, Cilandak, Jakarta Selatan 12430",
  jamOperasional: "Setiap Hari: 06:30 - 21:00 WIB (Hari Libur Nasional Tetap Buka)",
  areaLayanan:
    "Cilandak, Fatmawati, Pondok Labu, Lebak Bulus, Kemang, Ragunan & sekitarnya (Gratis Ongkir)",
  estimasiAntar: "15 - 30 Menit Langsung Sampai",
  copyright: "© 2026 evevdepot. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    {
      id: "air-mineral-alami",
      nama: "Air Mineral Alami Pegunungan",
      kategori: "Favorit Keluarga",
      harga: "Rp 6.000",
      hargaAngka: 6000,
      kemasan: "Isi Ulang Galon 19 Liter",
      keunggulan: "Filtrasi 5 Tahap + Sterilisasi UV & Ozon",
      deskripsi:
        "Air sumber pegunungan jernih dengan keseimbangan mineral alami yang segar untuk diminum langsung maupun memasak kebutuhan keluarga setiap hari."
    },
    {
      id: "air-murni-ro",
      nama: "Air Murni Reverse Osmosis (RO)",
      kategori: "Best Seller",
      harga: "Rp 8.000",
      hargaAngka: 8000,
      kemasan: "Isi Ulang Galon 19 Liter",
      keunggulan: "TDS Rendah (< 10 ppm) • Membran 0.0001 Mikron",
      deskripsi:
        "Air demineralisasi ekstra murni yang ringan bagi ginjal, aman untuk bayi dan lansia, serta ideal untuk menyeduh kopi dan teh tanpa mengubah cita rasa."
    },
    {
      id: "air-bio-alkali",
      nama: "Air Sehat Bio-Alkali pH 8.5+",
      kategori: "Terapi Hidrasi",
      harga: "Rp 15.000",
      hargaAngka: 15000,
      kemasan: "Isi Ulang Galon 19 Liter",
      keunggulan: "pH Seimbang 8.5+ • Molekul Mikro-Kluster",
      deskripsi:
        "Air minum terionisasi bio-energi yang lebih cepat diserap tubuh, membantu menetralisir asam berlebih, dan menjaga kebugaran serta stamina harian."
    },
    {
      id: "paket-kupon-hemat",
      nama: "Paket Kupon Hemat (Beli 10 Gratis 1)",
      kategori: "Paling Hemat",
      harga: "Rp 60.000",
      hargaAngka: 60000,
      kemasan: "11 Kupon Galon Mineral (atau Rp 80.000 RO)",
      keunggulan: "Tanpa Masa Hangus • Gratis Ongkir",
      deskripsi:
        "Solusi hemat pengeluaran bulanan rumah tangga atau anak kos. Tukar kupon kapan saja saat butuh, sudah termasuk cuci galon ozon dan antar langsung."
    },
    {
      id: "paket-langganan-kantor",
      nama: "Paket Langganan Kantor & Ruko (B2B)",
      kategori: "Korporat & Usaha",
      harga: "Rp 150.000",
      hargaAngka: 150000,
      kemasan: "25 Galon / Bulan • Jadwal Rutin",
      keunggulan: "Nota Resmi Bulanan • Prioritas Antar Pagi",
      deskripsi:
        "Pasokan air minum terjadwal untuk kantor, klinik, kafe, dan ruko. Tersedia opsi peminjaman dispenser higienis dan perawatan rutin berkala."
    },
    {
      id: "galon-baru-isi-ro",
      nama: "Galon Baru BPA-Free + Isi Air RO",
      kategori: "Pelanggan Baru",
      harga: "Rp 55.000",
      hargaAngka: 55000,
      kemasan: "1 Unit Galon 19L Baru + Isi Penuh",
      keunggulan: "Polikarbonat Food-Grade • Segel Anti-Bocor",
      deskripsi:
        "Belum punya galon kosong? Pesan galon baru food-grade bebas BPA yang sudah dibilas ozon, diisi penuh air murni RO, dan siap pasang di dispenser Anda."
    }
  ],

  /**
   * Auto-format pesan WhatsApp rapi ke +62 895-3234-18658
   */
  formatPesanWA: function (opsi) {
    var data = opsi || {};
    var paket = data.paket || "Isi Ulang Air Galon 19L";
    var harga = data.harga ? " (" + data.harga + ")" : "";
    var jumlah = data.jumlah || "1";
    var namaPemesan = data.nama || "";
    var alamat = data.alamat || "";
    var catatan = data.catatan || "";

    var baris = [
      "Halo *" + this.nama + "* 👋",
      "Saya ingin memesan layanan air galon dengan rincian berikut:",
      "",
      "• *Produk / Paket:* " + paket + harga,
      "• *Jumlah:* " + jumlah
    ];

    if (namaPemesan) baris.push("• *Nama:* " + namaPemesan);
    if (alamat) baris.push("• *Alamat Antar:* " + alamat);
    if (catatan) baris.push("• *Catatan:* " + catatan);

    baris.push("");
    baris.push("Mohon info estimasi pengantaran ya. Terima kasih!");

    return baris.join("\n");
  },

  buatLinkWA: function (opsi) {
    var teks =
      typeof opsi === "string"
        ? opsi
        : this.formatPesanWA(opsi);
    return (
      "https://wa.me/" +
      this.whatsapp +
      "?text=" +
      encodeURIComponent(teks)
    );
  }
};

// Expose helper global agar mudah dipanggil dari tombol/form HTML
window.PROFIL_USAHA = PROFIL_USAHA;
window.pesanViaWA = function (paketNama, harga) {
  var url = PROFIL_USAHA.buatLinkWA({
    paket: paketNama,
    harga: harga || ""
  });
  window.open(url, "_blank", "noopener,noreferrer");
  return false;
};

document.addEventListener("DOMContentLoaded", function () {
  // 1. Auto-Hydrate elements with data-config
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (PROFIL_USAHA[key] && typeof PROFIL_USAHA[key] === "string") {
      el.textContent = PROFIL_USAHA[key];
    }
  });

  // 2. Auto-hydrate tombol WhatsApp berbasis data-wa-paket
  document.querySelectorAll("[data-wa-paket]").forEach(function (link) {
    var paket = link.getAttribute("data-wa-paket");
    var harga = link.getAttribute("data-wa-harga") || "";
    var jumlah = link.getAttribute("data-wa-jumlah") || "1";
    link.setAttribute(
      "href",
      PROFIL_USAHA.buatLinkWA({
        paket: paket,
        harga: harga,
        jumlah: jumlah
      })
    );
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 3. Intercept forms to route cleanly to WhatsApp (+62 895-3234-18658)
  document.querySelectorAll("form").forEach(function (form) {
    if (
      form.classList.contains("search-form") ||
      form.querySelector('input[type="search"]')
    ) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var searchInput = form.querySelector('input[type="search"]');
        var query = searchInput ? searchInput.value.trim() : "";
        var targetSection =
          document.getElementById("produk") ||
          document.getElementById("layanan");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        var info = form.querySelector(".search-feedback");
        if (!info) {
          info = document.createElement("div");
          info.className = "search-feedback text-success";
          info.style.fontSize = "12px";
          info.style.marginTop = "6px";
          form.appendChild(info);
        }
        info.textContent = query
          ? 'Menampilkan produk terkait: "' + query + '"'
          : "Menampilkan seluruh daftar produk & harga evevdepot...";
        setTimeout(function () {
          if (info && info.parentNode) info.parentNode.removeChild(info);
        }, 3500);
      });
    } else if (
      form.classList.contains("wa-form") ||
      form.classList.contains("wa-order-form") ||
      form.id === "wa-order-form" ||
      form.id === "contact-form" ||
      (form.getAttribute("action") || "").indexOf("wa.me") !== -1
    ) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var inputs = form.querySelectorAll("input, textarea, select");
        var detail = {
          paket: "Pesan Antar Air Galon",
          jumlah: "Sesuai catatan",
          nama: "",
          alamat: "",
          catatan: ""
        };
        var tambahan = [];

        inputs.forEach(function (input) {
          if (input.type === "submit" || input.type === "button") return;
          var val = (input.value || "").trim();
          if (!val) return;
          var nameKey = (input.name || input.id || "").toLowerCase();
          if (nameKey.indexOf("nama") !== -1 || nameKey === "username") {
            detail.nama = val;
          } else if (nameKey.indexOf("paket") !== -1 || nameKey.indexOf("produk") !== -1) {
            detail.paket = val;
          } else if (nameKey.indexOf("jumlah") !== -1 || nameKey === "subject") {
            detail.jumlah = val;
          } else if (nameKey.indexOf("alamat") !== -1 || nameKey === "text") {
            detail.alamat = val;
          } else if (nameKey.indexOf("catatan") !== -1 || nameKey === "message") {
            detail.catatan = val;
          } else {
            var label = input.placeholder || input.name || "Info";
            tambahan.push(label + ": " + val);
          }
        });

        if (tambahan.length > 0) {
          detail.catatan = detail.catatan
            ? detail.catatan + " | " + tambahan.join(" | ")
            : tambahan.join(" | ");
        }

        window.open(PROFIL_USAHA.buatLinkWA(detail), "_blank", "noopener,noreferrer");
      });
    }
  });

  // 4. Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
