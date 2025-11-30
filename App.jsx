export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Localify</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Boshlash
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold leading-tight">
          Biznesingizni xaridorlar <span className="text-blue-600">xaritada topa olsin</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Localify — xizmat va mahsulotlarni lokatsiya asosida xaridorlarga
          yaqqol ko‘rsatib beradigan super qulay platforma.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700">
          Loyihani boshlash
        </button>
      </section>

      {/* PROBLEMS */}
      <section className="bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-bold text-center">Bizneslar duch keladigan muammolar</h3>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {[
            "Xaridorlar sizni topa olmaydi",
            "Lokatsiya asosida xizmat qidirish juda qiyin",
            "Raqobat kuchaygan: reklama qimmat",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center">Bizning yechim</h3>
        <p className="text-center text-gray-600 mt-3">
          Localify biznes uchun lokatsiya asosida ko‘rinish beradi.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            "Lokatsiya asosida topilish",
            "Sotuvchilar uchun qulay kabinet",
            "Narxlarni ko‘rsatish + tez aloqa tugmasi",
          ].map((item, i) => (
            <div key={i} className="p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20 px-6">
        <h3 className="text-3xl font-bold text-center">Platforma qanday ishlaydi?</h3>

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {[
            "1. Sotuvchi ro‘yxatdan o‘tadi va xizmatni joylaydi",
            "2. Xaridor hudud bo‘yicha qidiradi",
            "3. Localify xaridorga eng yaqin xizmatni ko‘rsatadi",
            "4. Xaridor to‘g‘ridan-to‘g‘ri sizga qo‘ng‘iroq qiladi",
          ].map((text, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center">Nima uchun aynan Localify?</h3>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {[
            "Real vaqt xarita integratsiyasi",
            "Qidiruv + filtrlar",
            "Mahsulotlarni tez joylash",
            "Narxlarni solishtirish",
            "Sotuvchilar profil sahifasi",
            "Tez aloqa tugmasi",
          ].map((b, i) => (
            <div key={i} className="bg-white p-5 border rounded-xl shadow-sm">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-blue-600 text-white">
        <h3 className="text-3xl font-bold">Loyihani bugunoq boshlang</h3>
        <p className="mt-3 text-lg opacity-90">
          Localify — sizning keyingi darajadagi startapingiz.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl">
          Start berish
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        © 2025 Localify. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  )
}
