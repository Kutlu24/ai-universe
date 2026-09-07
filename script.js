// Örnek araç verileri (Gerçekte bir veritabanından çekilmesi gerekir)
const araclar = [
    {
        ad: "ChatGPT",
        kategori: "metin",
        fiyat: "ucretsiz",
        aciklama: "Metin tabanlı yapay zeka asistanı.",
        link: "https://www.openai.com/chatgpt"
    },
    {
        ad: "DALL-E",
        kategori: "goruntu",
        fiyat: "ucretli",
        aciklama: "Metinden görüntü üreten yapay zeka.",
        link: "https://openai.com/dall-e-2/"
    },
    {
        ad: "Bard",
        kategori: "metin",
        fiyat: "ucretsiz",
        aciklama: "Google tarafından geliştirilen metin tabanlı yapay zeka asistanı.",
        link: "https://bard.google.com/"
    },
    // Diğer araçlar
];

// HTML elemanlarını seçme
const kategoriFiltre = document.getElementById("kategori-filtre");
const fiyatFiltre = document.getElementById("fiyat-filtre");
const aracListesi = document.getElementById("arac-listesi");
const aramaCubugu = document.getElementById("arama-cubugu");
const modal = document.getElementById("arac-detay-modal");
const modalBaslik = document.getElementById("arac-detay-baslik");
const modalAciklama = document.getElementById("arac-detay-aciklama");
const modalLink = document.getElementById("arac-detay-link");
const modalKapat = document.querySelector(".kapat");

// Araçları listeleme fonksiyonu
function aracListesiniGuncelle() {
    aracListesi.innerHTML = ""; // Önce listeyi temizle

    const seciliKategori = kategoriFiltre.value;
    const seciliFiyat = fiyatFiltre.value;
    const aramaTerimi = aramaCubugu.value.toLowerCase();

    const filtrelenmisAraclar = araclar.filter(arac => {
        const kategoriUygun = seciliKategori === "hepsi" || arac.kategori === seciliKategori;
        const fiyatUygun = seciliFiyat === "hepsi" || arac.fiyat === seciliFiyat;
        const aramaUygun = arac.ad.toLowerCase().includes(aramaTerimi);

        return kategoriUygun && fiyatUygun && aramaUygun;
    });

    filtrelenmisAraclar.forEach(arac => {
        const aracKutusu = document.createElement("div");
        aracKutusu.classList.add("arac-kutusu");
        aracKutusu.innerHTML = `
            <h3>${arac.ad}</h3>
            <p>${arac.aciklama}</p>
            <a href="#" data-arac="${arac.ad}">Daha Fazla</a>
        `;
        aracListesi.appendChild(aracKutusu);
    });
}

// Filtreleme ve arama olay dinleyicileri
kategoriFiltre.addEventListener("change", aracListesiniGuncelle);
fiyatFiltre.addEventListener("change", aracListesiniGuncelle);
aramaCubugu.addEventListener("input", aracListesiniGuncelle);

// Modal açma fonksiyonu
aracListesi.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const aracAdi = e.target.dataset.arac;
        const arac = araclar.find(a => a.ad === aracAdi);

        if (arac) {
            modalBaslik.textContent = arac.ad;
            modalAciklama.textContent = arac.aciklama;
            modalLink.href = arac.link;
            modal.style.display = "block";
        }
    }
});

// Modal kapatma olay dinleyicileri
modalKapat.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Sayfa yüklendiğinde araç listesini güncelle
aracListesiniGuncelle();