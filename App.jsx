export default function App() {
  return (
    <style>
    :root{
      --bg:#f6f8fb;
      --card:#ffffff;
      --muted:#52606a;
      --brand:#2563eb;
      --accent:#06b6d4;
      --glass: rgba(255,255,255,0.6);
      --shadow: 0 6px 18px rgba(16,24,40,0.06);
      --radius:14px;
      --container:1100px;
    }
    *{box-sizing:border-box}
    body{margin:0;font-family:Inter,ui-sans-serif,system-ui,Arial,sans-serif;background:var(--bg);color:#0f172a;line-height:1.5}
    a{color:var(--brand);text-decoration:none}
    header{background:linear-gradient(90deg, rgba(37,99,235,0.06), rgba(6,182,212,0.02));backdrop-filter:saturate(120%);position:sticky;top:0;z-index:40;border-bottom:1px solid rgba(15,23,42,0.04)}
    .wrap{max-width:var(--container);margin:0 auto;padding:18px}
    .nav{display:flex;align-items:center;justify-content:space-between;gap:12px}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--brand),var(--accent));display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:18px;box-shadow:var(--shadow)}
    .brand h1{font-size:20px;margin:0}
    nav .links{display:flex;gap:18px;align-items:center}
    .btn{background:var(--brand);color:white;padding:10px 16px;border-radius:10px;font-weight:700;display:inline-block}
    .hero{display:flex;gap:30px;align-items:center;padding:56px 18px}
    .hero-left{flex:1;min-width:260px}
    .kicker{display:inline-flex;align-items:center;gap:10px;padding:6px 10px;border-radius:999px;background:#e6f0ff;color:var(--brand);font-weight:700;font-size:13px}
    .kicker .dot{width:8px;height:8px;border-radius:50%;background:var(--brand);box-shadow:0 0 10px rgba(37,99,235,0.3)}
    .hero-title{font-size:38px;line-height:1.06;margin:16px 0 12px;font-weight:800}
    .gradient{background:linear-gradient(90deg,var(--brand),var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent}
    .hero-desc{color:var(--muted);font-size:17px;max-width:60ch}
    .search{margin-top:20px;display:flex;gap:10px;align-items:center;max-width:520px}
    .search input{flex:1;padding:12px 14px;border-radius:10px;border:1px solid rgba(15,23,42,0.06);font-size:15px}
    .search button{padding:12px 16px;border-radius:10px;border:none;background:var(--brand);color:white;font-weight:700;cursor:pointer}
    .hero-right{width:420px;min-width:260px}
    .card-hero{background:linear-gradient(180deg, rgba(255,255,255,0.8), rgba(250,250,255,0.9));padding:20px;border-radius:18px;box-shadow:var(--shadow);height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}
    .hero-preview{width:320px;height:320px;border-radius:16px;background:linear-gradient(180deg,#edf2ff,#f8faff);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--brand);font-size:18px;border:1px solid rgba(15,23,42,0.03)}
    section{padding:48px 18px}
    .card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;max-width:var(--container);margin:0 auto}
    .card{background:var(--card);padding:20px;border-radius:var(--radius);box-shadow:var(--shadow);border:1px solid rgba(15,23,42,0.03)}
    h2.section-title{text-align:center;font-size:28px;margin-bottom:10px}
    p.lead{text-align:center;color:var(--muted);max-width:900px;margin:6px auto 30px}
    /* Roadmap timeline */
    .timeline{max-width:980px;margin:0 auto;position:relative;padding:20px 10px}
    .timeline:before{content:'';position:absolute;left:50%;transform:translateX(-50%);width:4px;background:linear-gradient(180deg,#eef2ff,#f8fafc);top:10px;bottom:10px;border-radius:4px}
    .step{position:relative;padding:28px 20px;width:50%;box-sizing:border-box}
    .step.left{left:0;text-align:right;padding-right:50px}
    .step.right{left:50%;padding-left:50px}
    .node{position:absolute;left:50%;transform:translateX(-50%);width:18px;height:18px;border-radius:50%;background:var(--card);border:4px solid #fff;box-shadow:0 6px 18px rgba(16,24,40,0.06);display:flex;align-items:center;justify-content:center}
    .step .title{font-weight:800;color:#0f172a}
    .step .txt{color:var(--muted);margin-top:8px}
    /* Team block */
    .team-wrap{max-width:920px;margin:0 auto;display:flex;flex-wrap:wrap;gap:20px;justify-content:center}
    .member{width:300px;background:var(--card);padding:18px;border-radius:14px;box-shadow:var(--shadow);text-align:left}
    .member .avatar{width:72px;height:72px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--accent));display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:20px;margin-bottom:10px}
    .chip{display:inline-block;padding:6px 10px;border-radius:999px;background:#f1f5f9;color:#334155;margin:6px 6px 0 0;font-size:13px}
    /* MVP checklist */
    .mvp{max-width:980px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
    .mvp .todo{padding:16px;border-radius:12px;background:linear-gradient(180deg,#fff,#fbfdff);border:1px solid rgba(15,23,42,0.03);box-shadow:var(--shadow)}
    .small{font-size:13px;color:var(--muted)}
    footer{padding:30px 18px;text-align:center;color:#6b7280}
    /* responsive */
    @media (max-width:900px){
      .hero{flex-direction:column;align-items:stretch}
      .hero-right{order:-1;display:flex;justify-content:center;margin-bottom:20px}
      .timeline:before{left:8px;transform:none}
      .step{width:100%;padding-left:40px;padding-right:16px;text-align:left}
      .step.left{padding-left:40px;padding-right:16px}
      .node{left:8px;transform:none}
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <div class="brand">
        <div class="logo">L</div>
        <div>
          <h1 style="margin:0;font-size:16px">Localify</h1>
          <div style="font-size:12px;color:var(--muted)">AI500! — 1-bosqich</div>
        </div>
      </div>

      <div class="links" style="display:flex;gap:16px;align-items:center">
        <a href="#muammo">Muammo</a>
        <a href="#yechim">Yechim</a>
        <a href="#roadmap">Yo‘l xaritasi</a>
        <a href="#jamoa">Jamoa</a>
        <a class="btn" href="#demo">Demo ko‘rish</a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-left wrap">
      <div class="kicker"><span class="dot"></span> MVP Building Stage</div>
      <h2 class="hero-title">Yaqin atrofingizdagi eng qulay <span class="gradient">sotuvchilarni toping</span></h2>
      <p class="hero-desc">Localify — lokatsiya asosida ishlaydigan mahalliy marketplace. Kichik biznesni raqamlashtiramiz, xaridorlarga yaqin va ishonchli variantlarni ko'rsatamiz.</p>

      <div class="search">
        <input type="text" placeholder="Qidiruv: masalan, 'avtomobil ustasi' yoki 'simon'">
        <button>Qidir</button>
      </div>

      <div style="margin-top:18px;color:var(--muted);font-size:14px">
        Demo uchun: bitta sahifa — Muammo/Yechim, Jamoa, Yo‘l xaritasi va Texnik reja mavjud.
      </div>
    </div>

    <div class="hero-right">
      <div class="card-hero">
        <div class="hero-preview">
          <div style="text-align:center">
            <div style="font-size:20px;margin-bottom:8px">Localify — Preview</div>
            <div style="font-size:13px;color:var(--muted)">Xarita + yaqin atrof natijalari</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROBLEM & SOLUTION -->
  <section id="muammo">
    <h2 class="section-title">1. Muammo va Yechim</h2>
    <p class="lead">AI500 baholash mezonlariga mos ravishda, quyidagi real muammolarni aniqladik va ular uchun aniq IT-yechimni taklif qilamiz.</p>

    <div class="card-grid">
      <div class="card">
        <h3 style="margin:0 0 8px">Muammo — Ko‘rinmas sotuvchilar</h3>
        <p class="small">Kichik bizneslarning aksariyati faqat Telegram yoki ijtimoiy tarmoqlarda. Xaridor ular orasidan eng yaqinini topa olmaydi.</p>
      </div>

      <div class="card">
        <h3 style="margin:0 0 8px">Muammo — Vaqt yo‘qotish</h3>
        <p class="small">Xaridor qayerga borishni, masofani va narxni tez tekshira olmaydi; natijada vaqt va pul sarfi ortadi.</p>
      </div>

      <div class="card">
        <h3 style="margin:0 0 8px">Muammo — Platforma cheklovi</h3>
        <p class="small">Yirik marketplace'lar kichik mahalliy sotuvchilarni qamrab olmaydi — ular past priorityda qoladi.</p>
      </div>

      <div class="card">
        <h3 style="margin:0 0 8px">Yechim — Localify</h3>
        <p class="small">Localify — lokatsiya va kontakt asosida ishlovchi platforma. Xaridor o‘z hududiga mos sotuvchilarni xaritada ko‘radi, darhol bog‘lanadi va buyurtma beradi.</p>
      </div>

      <div class="card">
        <h3 style="margin:0 0 8px">Taʼsir (Impact)</h3>
        <p class="small">Vaqt tejash, lokal iqtisodiy faollikni oshirish, kichik bizneslar uchun yangi mijoz oqimi.</p>
      </div>

      <div class="card">
        <h3 style="margin:0 0 8px">Soha</h3>
        <p class="small">Mahalliy savdo & xizmatlar, mikro-entrepreneurship, ijtimoiy taʼsir (local economy).</p>
      </div>
    </div>
  </section>

  <!-- SOLUTION DETAILS -->
  <section id="yechim" style="background:linear-gradient(180deg,#ffffff,#fbfdff)">
    <h2 class="section-title">2. Yechim tafsilotlari</h2>
    <p class="lead">Qisqacha: Localify — foydalanuvchi lokatsiyasiga asoslangan, AI yordamida tavsiya beruvchi va sotuvchi admin paneli orqali boshqariluvchi platforma.</p>

    <div class="card-grid">
      <div class="card">
        <h3>Asosiy funksiyalar</h3>
        <ul style="color:var(--muted);margin:8px 0 0 18px;padding:0">
          <li>Radius qidiruvi (yaqin atrof)</li>
          <li>Sotuvchi profili va kontaktlar</li>
          <li>AI bilan avtomatik mahsulot tavsifi</li>
          <li>Map view + list view</li>
        </ul>
      </div>

      <div class="card">
        <h3>Foydalanuvchi qiymati</h3>
        <p class="small">Xaridor uchun — tez topish, ishonchli kontaktlar. Sotuvchi uchun — yangi mijoz oqimi va oson ro‘yxatdan o‘tish.</p>
      </div>

      <div class="card">
        <h3>Monetizatsiya (MVPda minimal)</h3>
        <p class="small">Premium ro‘yxat (highlight), reklama placement, subscription (seller analytics) — keyinchalik.</p>
      </div>
    </div>
  </section>

  <!-- ROADMAP -->
  <section id="roadmap">
    <h2 class="section-title">3. Yo‘l xaritasi & Bosqichlar</h2>
    <p class="lead">Hozirgi bosqich: <strong>MVP (building)</strong>. Quyidagi jadval bo‘yicha harakat qilamiz.</p>

    <div class="timeline" aria-hidden="false">
      <div class="step left">
        <div class="node"></div>
        <div class="title">1-Bosqich: Prototip</div>
        <div class="txt small">UI/UX prototip, Figma, rejalashtirish — completed</div>
      </div>

      <div class="step right">
        <div class="node" style="background:linear-gradient(90deg,var(--brand),var(--accent));border:4px solid white"></div>
        <div class="title">2-Bosqich: MVP <span style="font-size:12px;color:var(--brand);font-weight:700"> (Joriy)</span></div>
        <div class="txt small">Sotuvchi ro‘yxatdan o‘tishi, 3 ta mahsulot yuklash, radius qidiruv, map + list view</div>
      </div>

      <div class="step left">
        <div class="node"></div>
        <div class="title">3-Bosqich: MVP + AI</div>
        <div class="txt small">AI product description, embeddings based recommendation, image optimization</div>
      </div>

      <div class="step right">
        <div class="node"></div>
        <div class="title">4-Bosqich: Full Launch</div>
        <div class="txt small">To‘lov integratsiyasi, delivery API, growth & partnerships</div>
      </div>
    </div>
  </section>

  <!-- TEAM -->
  <section id="jamoa" style="background:#fff">
    <h2 class="section-title">4. Jamoa</h2>
    <p class="lead">Har bir aʼzo AI500 botda ro‘yxatdan o‘tgan — ismlar va rollar quyidagicha.</p>

    <div class="team-wrap" role="list">
      <div class="member" role="listitem">
        <div class="avatar" style="display:flex;align-items:center;gap:12px">
          <div class="avatar-inner" style="width:72px;height:72px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--accent));display:flex;align-items:center;justify-content:center;font-weight:800;color:white">U</div>
          <div>
            <div style="font-weight:800">Umidjon</div>
            <div class="small" style="color:var(--muted)">Founder & Full-Stack Developer</div>
          </div>
        </div>
        <div style="margin-top:12px">
          <div class="chip">React</div><div class="chip">Node.js</div><div class="chip">Laravel</div><div class="chip">AI</div>
        </div>
        <p class="small" style="margin-top:12px">Ko‘nikmalar: React, Vite, Node.js, PostgreSQL, Mapbox, OpenAI integration. Avvalgi loyihalar: e-commerce, CRM.</p>
      </div>

      <!-- add placeholders for 2 others if exists -->
      <div class="member" role="listitem">
        <div class="avatar-inner" style="width:72px;height:72px;border-radius:12px;background:#efefef;display:flex;align-items:center;justify-content:center;font-weight:700;color:#334155">D</div>
        <div style="margin-top:10px;font-weight:700">Diyor</div>
        <div class="small" style="color:var(--muted)">Product / UX</div>
        <p class="small" style="margin-top:10px">Figma prototyping, user interviews, onboarding flows.</p>
      </div>
      <div class="member" role="listitem">
        <div class="avatar-inner" style="width:72px;height:72px;border-radius:12px;background:#efefef;display:flex;align-items:center;justify-content:center;font-weight:700;color:#334155">S</div>
        <div style="margin-top:10px;font-weight:700">Sardor</div>
        <div class="small" style="color:var(--muted)">ML / AI</div>
        <p class="small" style="margin-top:10px">Embeddings, recommendation, small-model pipelines, OpenAI API integration.</p>
      </div>
    </div>
  </section>

  <!-- TECH & IMPLEMENTATION -->
  <section id="tech" style="background:linear-gradient(180deg,#fbfdff,#ffffff)">
    <h2 class="section-title">5. Muammoni qanday hal qilamiz — Texnik reja</h2>
    <p class="lead">Asosiy qadamlar, stack va AI foydalanish yo‘li aniq ko‘rsatilgan.</p>

    <div class="card-grid">
      <div class="card">
        <h3>Arxitektura (MVP)</h3>
        <ul style="margin:8px 0 0 18px;color:var(--muted)">
          <li>Frontend: React + Vite (Single Page landing + Demo page)</li>
          <li>Backend: Node.js (Express) yoki Laravel</li>
          <li>DB: PostgreSQL (+ PostGIS for geo) yoki Supabase</li>
          <li>Maps: Mapbox / Leaflet + Mapbox Geocoding</li>
        </ul>
      </div>

      <div class="card">
        <h3>AI integratsiyasi</h3>
        <ul style="margin:8px 0 0 18px;color:var(--muted)">
          <li>OpenAI (GPT-5) — product description generator, chatbot</li>
          <li>Embeddings + vector DB (Pinecone/Weaviate) — smart recommendation</li>
          <li>Vision API — image quality check va alt text yaratish</li>
        </ul>
      </div>

      <div class="card">
        <h3>Qadamma-qadam amalga oshirish (MVP)</h3>
        <ol style="color:var(--muted);margin:8px 0 0 18px">
          <li>DB schema: users, sellers, products, locations(lat,lng), reviews</li>
          <li>Auth: simple email/phone + JWT</li>
          <li>Seller flow: register → add location → add up to 3 products</li>
          <li>Search: GET /search?lat=&lon=&radius=</li>
          <li>AI: POST /ai/describe (image/url) -> returns description</li>
        </ol>
      </div>
    </div>
  </section>

  <!-- MVP CHECKLIST & SUBMISSION -->
  <section id="demo">
    <h2 class="section-title">6. MVP checklist (AI500 uchun)</h2>
    <p class="lead">Quyidagi elementlar 1-bosqich talablari uchun tayyor yoki MVP uchun rejalashtirilgan.</p>

    <div class="mvp" style="margin-top:10px">
      <div class="todo"><strong>Landing page</strong><div class="small">Muammo, yechim, jamoa, roadmap — mavjud</div></div>
      <div class="todo"><strong>Seller registration (mock)</strong><div class="small">Form + location field (MVP)</div></div>
      <div class="todo"><strong>Map search</strong><div class="small">Radius qidiruv — mock yoki real</div></div>
      <div class="todo"><strong>AI features (P0)</strong><div class="small">Description generator (API call)</div></div>
      <div class="todo"><strong>Deploy</strong><div class="small">Frontend — Vercel; Backend — Render / Supabase</div></div>
      <div class="todo"><strong>Submission</strong><div class="small">Ochiq demo linkni AI500 botga yuborish</div></div>
    </div>

    <div style="max-width:900px;margin:24px auto;text-align:left">
      <h3 style="margin-bottom:6px">Taqdimot uchun qisqa tekst (AI500)</h3>
      <p class="small" style="margin-bottom:10px">
        Localify — mahalliy sotuvchilarni lokatsiya orqali topishga mo‘ljallangan platforma. MVP: sotuvchi ro‘yxatdan o‘tishi, 3 ta mahsulot joylashi, radius qidiruv va AI yordamida avtomatik tavsif yaratilishi. Jamoa: Umidjon (Founder/Full-stack), Diyor (Product/UX), Sardor (ML). Hozirgi bosqich: MVP building. Yuborish: demo link (Vercel) orqali.
      </p>
      <p class="small"><strong>Yuborish oxiri:</strong> 30-noyabr, 23:59 (GMT+5)</p>
    </div>
  </section>

  <!-- CONTACT & FOOTER -->
  <footer>
    <div class="wrap" style="display:flex;flex-direction:column;gap:12px;align-items:center">
      <div style="font-weight:800">Localify — AI500! 1-bosqich</div>
      <div style="color:var(--muted);font-size:14px">Email: <a href="mailto:ai500@itcommunity.uz">ai500@itcommunity.uz</a> • Telegram: @yourtelegram</div>
      <div style="margin-top:10px;color:var(--muted);font-size:13px">© <span id="year"></span> Localify — Barcha huquqlar himoyalangan.</div>
    </div>
  </footer>

  <script>
    // small scripts: set year, mock search behaviour, sticky nav background on scroll
    document.getElementById('year').textContent = new Date().getFullYear();
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 20) header.style.boxShadow = '0 8px 28px rgba(2,6,23,0.06)';
      else header.style.boxShadow = 'none';
    });

    // demo search: show alert with value
    const btn = document.querySelector('.search button');
    if(btn){
      btn.addEventListener('click', () => {
        const val = document.querySelector('.search input').value.trim();
        if(!val) return alert('Iltimos, qidiruv soʻzini kiriting (masalan: "avtomobil ustasi").');
        alert('Demo qidiruv: "'+val+'". Bu demo sahifada haqiqiy backend yo‘q.');
      });
    }
  </script>
</body>
  )
}
