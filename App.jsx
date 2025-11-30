export default function App() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">Localify</h1>
        <button className="btn-primary">Boshlash</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h2>
          Biznesingizni xaridorlar <span className="blue">xaritada topa olsin</span>
        </h2>
        <p className="desc">
          Localify — xizmat va mahsulotlarni lokatsiya asosida xaridorlarga
          yaqqol ko‘rsatib beradigan super qulay platforma.
        </p>
        <button className="btn-primary big">Loyihani boshlash</button>
      </section>

      {/* PROBLEMS */}
      <section className="block">
        <h3>Bizneslar duch keladigan muammolar</h3>
        <div className="grid">
          <div className="card">Xaridorlar sizni topa olmaydi</div>
          <div className="card">Lokatsiya asosida xizmat qidirish juda qiyin</div>
          <div className="card">Raqobat kuchaygan: reklama qimmat</div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="block">
        <h3>Bizning yechim</h3>
        <p className="center">Localify biznes uchun lokatsiya asosida ko‘rinish beradi.</p>
        <div className="grid">
          <div className="card blue-card">Lokatsiya asosida topilish</div>
          <div className="card blue-card">Sotuvchilar uchun qulay kabinet</div>
          <div className="card blue-card">Tez aloqa tugmasi + narxlar</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="block gray">
        <h3>Platforma qanday ishlaydi?</h3>
        <div className="steps">
          <div className="step">1. Sotuvchi ro‘yxatdan o‘tadi va xizmatni joylaydi</div>
          <div className="step">2. Xaridor hudud bo‘yicha qidiradi</div>
          <div className="step">3. Localify eng yaqin xizmatni ko‘rsatadi</div>
          <div className="step">4. Xaridor to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiladi</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="block">
        <h3>Nima uchun aynan Localify?</h3>
        <div className="grid">
          <div className="card">Real vaqt xarita integratsiyasi</div>
          <div className="card">Qidiruv + filtrlar</div>
          <div className="card">Mahsulotlarni tez joylash</div>
          <div className="card">Narxlarni solishtirish</div>
          <div className="card">Sotuvchi profil sahifasi</div>
          <div className="card">Tez aloqa tugmasi</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Loyihani bugunoq boshlang</h3>
        <p>Localify — sizning keyingi darajadagi startapingiz.</p>
        <button className="btn-white">Start berish</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Localify. Barcha huquqlar himoyalangan.
      </footer>

      {/* CSS INSIDE */}
      <style>{`
        * {
          margin: 0; padding: 0; box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .container {
          width: 100%;
          background: #fff;
          color: #222;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 20px 30px;
          border-bottom: 1px solid #ddd;
        }
        .logo {
          font-size: 26px;
          color: #1e50ff;
          font-weight: bold;
        }

        .btn-primary {
          background: #1e50ff;
          color: #fff;
          padding: 10px 22px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .btn-primary:hover { background: #0039ff; }
        .btn-primary.big { padding: 14px 30px; font-size: 18px; }

        /* HERO */
        .hero {
          text-align: center;
          padding: 70px 25px;
        }
        .hero h2 {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.3;
        }
        .hero .blue { color: #1e50ff; }
        .desc {
          max-width: 600px;
          margin: 15px auto;
          font-size: 18px;
          color: #666;
        }

        /* BLOCKS */
        .block {
          padding: 70px 25px;
          text-align: center;
        }
        .block.gray { background: #f5f5f5; }
        .block h3 {
          font-size: 30px;
          font-weight: 700;
        }
        .center { color: #555; margin-top: 8px; }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 35px auto 0;
        }

        .card {
          padding: 22px;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #eee;
          font-size: 17px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .card:hover { transform: translateY(-3px); transition: .2s; }

        .blue-card {
          background: #eaf0ff;
          border-color: #bcd1ff;
        }

        /* STEPS */
        .steps {
          max-width: 600px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .step {
          background: #fff;
          padding: 18px;
          border-radius: 12px;
          border: 1px solid #ddd;
          font-size: 17px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        /* CTA */
        .cta {
          background: #1e50ff;
          color: #fff;
          padding: 80px 20px;
          text-align: center;
        }
        .btn-white {
          margin-top: 20px;
          background: #fff;
          color: #1e50ff;
          padding: 12px 26px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 18px;
        }

        /* FOOTER */
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 15px;
          color: #666;
          border-top: 1px solid #eee;
        }
      `}</style>
    </div>
  )
}
