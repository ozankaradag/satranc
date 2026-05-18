# 🌌 GlowChess — Premium & Modern Satranç Deneyimi

[![Lisans](https://img.shields.io/badge/lisans-MIT-cyan.svg?style=for-the-badge)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Web-emerald.svg?style=for-the-badge)](index.html)
[![Teknoloji](https://img.shields.io/badge/teknoloji-Pure%20HTML%2FCSS%2FJS-6b9fd4.svg?style=for-the-badge)](index.html)

GlowChess, modern cam morfolojisi (glassmorphism) tasarımı, akıcı animasyonları ve güçlü yapay zeka entegrasyonuyla tarayıcınızda çalışan, üst düzey ve fütüristik bir satranç arenasıdır. Kurulum gerektirmeden, doğrudan ve tamamen sunucusuz (serverless) çalışacak şekilde tasarlanmıştır.

---

## ✨ Öne Çıkan Özellikler

🤖 **Tarayıcıda Çalışan Stockfish Yapay Zeka Entegrasyonu**
CORS engellerine takılmayan, arka planda Web Worker ve Blob teknolojilerini kullanan güçlü ve kararlı **Stockfish** satranç motoru entegrasyonu. Oyun esnasında hiçbir uzak sunucuya bağlanmaz; tamamen yerel olarak tarayıcınızda hesaplama yapar.

🧠 **İnsansı Hata (Blunder) Simülasyonu ve Kademeli ELO**
Stockfish'in kusursuzluğunu insani düzeye çeken özel "blunder" algoritmaları sayesinde gerçekçi oyun deneyimi:
*   🟢 **Seviye 1: Başlangıç (800 ELO):** %40 ihtimalle rastgele amatör hamleler/taş uyumaları yapar. Kalan durumlarda Stockfish Skill Level 0 ile oynar.
*   🟡 **Seviye 2: Orta (1500 ELO):** %10 ihtimalle hata yapar, kalan %90 durumda ise Stockfish Skill Level 5 kalitesinde hamleler bulur.
*   🔴 **Seviye 3: Usta (2200 ELO):** %0 rastgelelik. Stockfish Skill Level 12 kalitesinde derin aramalar yapar.
*   🔥 **Seviye 4: Grandmaster (2859 ELO):** Kusursuz zeka. Stockfish maksimum güçte (Skill Level 20, Depth 15) oynar.

🎨 **Dinamik HSL & Glassmorphism Temaları**
Göz alıcı neon parıltılar, aktif oyuncu auraları ve 4 adet premium, canlı değiştirilebilir arena teması:
*   ❄️ **Midnight Ice:** Derin kutup mavisi ve ferahlatıcı açık yeşil.
*   🌿 **Mint Emerald:** Zümrüt yeşili ve koyu nane tonları.
*   🔮 **Amethyst:** Egzotik ametist moru ve neon menekşe parıltıları.
*   🪵 **Walnut Wood:** Klasik satranç hissi veren lüks ceviz ahşabı tonları.

🎵 **Akıcı Ses Efektleri ve Hissiyat**
Lichess tarzı yüksek kaliteli hamle, taş yeme (capture), şah çekme ve galibiyet/mağlubiyet ses efektleri. Taşların tahtaya inişindeki mikro sarsıntı efektleri ve akıcı uçma animasyonları.

📊 **Gerçek Zamanlı Eval Bar & PGN Analiz Raporu**
*   **Eval Bar (Değerlendirme Çubuğu):** Hamleler yapıldıkça konumun kimin lehine olduğunu (+/-) dinamik olarak gösteren yan gösterge.
*   **PGN İçe/Dışa Aktarma:** Oyunlarınızı kopyalayabilir veya kopyaladığınız bir PGN'i yapıştırarak doğrudan tahtada analiz edebilirsiniz.
*   **Hamle Kalite Analizi:** Yapılan hamleleri en iyi hamle (best), mükemmel (excellent), iyi (good), teorik (book), hata (mistake) veya büyük hata (blunder) olarak sınıflandıran analiz paneli.

---

## 🛠️ Kullanılan Teknolojiler

GlowChess, en yüksek performans ve hafiflik için modern kütüphanelerin saf web teknolojileriyle birleşimiyle inşa edilmiştir:

*   🌐 **HTML5 & Semantik Yapı:** SEO uyumlu, erişilebilir ve temiz HTML iskeleti.
*   🎨 **Tailwind CSS & Vanilla CSS:** Dinamik neon gölgelendirmeler ve performanslı cam morfolojisi efektleri için özelleştirilmiş HSL stil tanımları.
*   ⚡ **Vanilla JavaScript:** Modüllere veya derleyicilere ihtiyaç duymadan doğrudan DOM yönetimi ve asenkron oyun döngüsü.
*   ♟️ **Chess.js:** Satranç kuralları, geçerli hamle doğrulamaları ve PGN ayrıştırmasını yöneten hafif motor.
*   🐠 **Stockfish.js (v10.0.2):** WebAssembly ve JS üzerinde çalışan, tarayıcı tabanlı en güçlü açık kaynaklı satranç motoru.

---

## 🚀 Kurulum ve Çalıştırma

GlowChess **%100 sunucusuz (serverless)** ve sıfır bağımlılığa sahiptir. Herhangi bir derleme adımına (`npm install`, `vite build` vb.) gerek duymaz.

1.  Bu depoyu bilgisayarınıza indirin veya klonlayın:
    ```bash
    git clone https://github.com/kullaniciadi/satranc2.git
    ```
2.  Proje klasöründeki `index.html` (veya `satranç2.html`) dosyasına çift tıklayarak tarayıcınızda açın!
3.  **Hepsi bu kadar!** Arena hazır, hamleni yap ve Stockfish'e karşı premium satranç deneyiminin tadını çıkar.

---

## ⚖️ Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.

---

<p align="center">
  GlowChess ile neon arenasında şah mat yapmaya hazır mısınız? ♟️✨
</p>
