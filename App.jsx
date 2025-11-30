export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* --- HERO SECTION --- */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Localify</h1>
          <p className="text-gray-600 font-medium">AI500 Demo</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Yaqin atrofdagi xizmatlarni topishni osonlashtiramiz
        </h2>
        <p className="text-xl mt-6 text-gray-600 max-w-3xl mx-auto">
          Localify — lokatsiya asosida ustalar, kichik bizneslar, xizmat ko‘rsatuvchilar
          va sotuvchilarni xaridorlar bilan real vaqtning o‘zida bog‘laydigan platforma.
        </p>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-md transition">
          Demo Sahifaga Xush Kelibsiz
        </button>
      </section>

      <div className="border-t my-12"></div>

      {/* --- 1. MUAMMO & YECHIM --- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-4xl font-bold mb-6">1. Muammo va Yechim</h3>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h4 className="text-2xl font-semibold mb-4 text-red-500">Muammo</h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            O‘zbekiston bozorida eng katta muammo — **mahalliy xizmatlarni tez topish qiyin**.
            Ustalar, xususiy xizmat ko‘rsatuvchilar va kichik bizneslar ko‘rinmaydi.
            Xaridorlar esa kimga murojaat qilishni bilmaydi.
            Natijada vaqt, pul va sifat yo‘qoladi.
          </p>

          <h4 className="text-2xl font-semibold mt-10 mb-4 text-green-600">Yechim: Localify</h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            Biz yaratgan Localify platformasi har bir xizmat yoki mahsulotni **lokatsiya bilan bog‘laydi**.
            Xaridorlar yaqinidagi sotuvchilarni xaritada ko‘radi, bevosita bog‘lanadi
            va xizmatni daqiqalar ichida topadi.
          </p>
        </div>
      </section>

      <div className="border-t my-12"></div>

      {/* --- 2. JAMOA --- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-4xl font-bold mb-6">2. Jamoa</h3>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="mb-6">
            <h4 className="text-2xl font-semibold">Umidjon</h4>
            <p className="text-gray-700 text-lg">
              Founder & Full-Stack Developer  
            </p>
            <p className="text-gray-600 mt-2">
              Ko‘nikmalar: React, Node.js, PHP Laravel, Unity C#, Database Design,
              Startup Architecture, AI-integratsiya
            </p>
          </div>
        </div>
      </section>

      <div className="border-t my-12"></div>

      {/* --- 3. Nega Biz? --- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-4xl font-bold mb-6">
          3. Nega aynan biz bu muammoni hal qila olamiz?
        </h3>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Biz O‘zbekiston bozoridagi real og‘riq nuqtalarni yaxshi bilamiz.
            Jamoada texnik tajriba, startap yuritish madaniyati va real loyihalar bilan
            ishlash amaliyoti bor. Lokal bizneslar bilan oldindan ishlaganmiz
            va ularning ehtiyojlari aniq bizga ma’lum.
          </p>
        </div>
      </section>

      <div className="border-t my-12"></div>

      {/* --- 4. ROADMAP --- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-4xl font-bold mb-6">4. Yo‘l xaritasi</h3>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
            <li>G‘oya → tugallangan</li>
            <li>Prototip → tayyorlanmoqda</li>
            <li>MVP → 2025 yanvar</li>
            <li>Beta versiya → 2025 mart</li>
            <li>Ishga tushirish → 2025 aprel</li>
          </ul>
        </div>
      </section>

      <div className="border-t my-12"></div>

      {/* --- 5. TEXNIK YECHIM --- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-4xl font-bold mb-6">
          5. Muammoni qanday hal qilamiz?
        </h3>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-lg text-gray-700 leading-relaxed">
          <p>
            • React frontend  
            • Node.js backend  
            • MongoDB / PostgreSQL  
            • Location-based indexing  
            • Maps API integratsiya  
            • AI modeli — avtomatik xizmat tasnifi, sotuvchilarni tavsiya qilish  
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 mt-12">
        © 2025 Localify. AI500 Demo uchun yaratilgan.
      </footer>
    </div>
  )
}
