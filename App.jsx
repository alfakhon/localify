import React, { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  TrendingUp,
  Zap,
  Layers,
  Search,
  Smartphone,
  Code,
  CheckCircle,
  Brain,
  Rocket,
} from "lucide-react";

/**
 * App.jsx — Localify (AI500 demo) landing page
 * Paste this file content into your repository's App.jsx (replace existing).
 * Make sure Tailwind CSS is configured in the project.
 */

const PLACEHOLDER_IMG = "https://via.placeholder.com/300x300.png?text=Umidjon";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white text-xs md:text-sm py-2 text-center px-4">
        Agrobank & IT Community of Uzbekistan —{" "}
        <span className="font-semibold">AI500! 1-bosqich ishtirokchisi</span>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full top-[32px] z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-md text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">Localify</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#muammo" className="hover:text-blue-600 transition">Muammo</a>
            <a href="#yechim" className="hover:text-blue-600 transition">Yechim</a>
            <a href="#roadmap" className="hover:text-blue-600 transition">Yo‘l xaritasi</a>
            <a href="#jamoa" className="hover:text-blue-600 transition">Jamoa</a>
          </div>

          <a
            href="#demo"
            className="bg-blue-600 text-white px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
            aria-label="Demo ko'rish"
          >
            Demo Ko‘rish
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 border border-blue-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            MVP Building Stage
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Yaqin atrofingizdagi eng qulay
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">sotuvchilarni toping</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Localify — lokatsiya asosida ishlaydigan mahalliy marketplace. Kichik biznesni
            raqamlashtiramiz va xaridorlar vaqtini tejaymiz.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#yechim"
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 inline-flex items-center gap-3"
            >
              <Rocket size={18} /> Loyiha haqida
            </a>

            <button
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 inline-flex items-center gap-3"
              aria-label="Texnik stack"
            >
              <Code size={18} /> Texnik Stack
            </button>
          </div>
        </div>
      </header>

      {/* Muammo */}
      <section id="muammo" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mavjud Muammolar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">O‘zbekiston bozoridagi asosiy og‘riq nuqtalarini aniqladik.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<Search className="text-red-600 w-6 h-6" />}
              title="Ko‘rinmas Sotuvchilar"
              text="Mahalliy kichik bizneslar faqat Telegram yoki Instagramda. Ularni qidiruv orqali yoki xaritada topishning iloji yo‘q."
              accent="red"
            />
            <Card
              icon={<Zap className="text-orange-600 w-6 h-6" />}
              title="Vaqt Yo‘qotish"
              text="'Qayerda ochiq magazin bor?' savollari javobsiz. Masofa, narx va manzilni aniqlash qiyin."
              accent="orange"
            />
            <Card
              icon={<Layers className="text-indigo-600 w-6 h-6" />}
              title="Marketplace Cheklovi"
              text="Katta platformalar faqat yirik brendlar uchun. Bozor rastalari va uyda ishlab chiqaruvchilar e'tibordan chetda qolmoqda."
              accent="indigo"
            />
          </div>
        </div>
      </section>

      {/* Yechim */}
      <section id="yechim" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-blue-200 font-semibold tracking-wider text-sm mb-3">YECHIM</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Localify — Lokal Biznesni Raqamlashtirish</h2>
              <p className="text-slate-300 text-lg mb-6">
                Bizning yechim xaridorga o‘ziga eng yaqin sotuvchini xarita orqali ko‘rsatadi va
                AI yordamida savdoni osonlashtiradi.
              </p>

              <div className="space-y-4">
                <Feature icon={<MapPin size={20} />} title="Xarita Asosida Qidiruv" text="Manzil, narx, masofa va yo‘l tarifi bir joyda." />
                <Feature icon={<Brain size={20} />} title="AI Integratsiya" text="OpenAI & Vision API yordamida mahsulot tavsifi va rasm optimizatsiyasi." />
                <Feature icon={<Smartphone size={20} />} title="Tezkor Start" text="Sotuvchilar uchun 3 daqiqada ro‘yxatdan o‘tish va do‘kon ochish." />
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl transform hover:rotate-0 transition duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-slate-400 ml-auto">Tech Stack</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <StackCard title="React" caption="Frontend UI" color="blue" />
                  <StackCard title="Node.js" caption="Backend API" color="green" />
                  <StackCard title="OpenAI" caption="Generative Content" color="purple" />
                  <StackCard title="PostgreSQL" caption="Database" color="cyan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Rivojlanish Yo‘l Xaritasi</h2>
            <p className="text-slate-600">Biz hozir MVP bosqichidamiz.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200" />

            <TimelineItem
              side="left"
              title="1-Bosqich: Prototip"
              subtitle="Tugallangan"
              text="Strukturaviy UI/UX, xarita layout, product card dizaynlari"
              icon={<CheckCircle size={16} />}
            />

            <TimelineItem
              side="right"
              title="2-Bosqich: MVP"
              subtitle="Joriy holat"
              text="Sotuvchi ro‘yxatdan o‘tishi, lokatsiya tanlash, 3 ta mahsulot yuklash, xarita qidiruvi"
              active
            />

            <TimelineItem
              side="left"
              title="3-Bosqich: MVP+ AI"
              subtitle="Keyingi"
              text="AI product description, rasm optimizatsiyasi, smart filtrlar"
            />

            <TimelineItem
              side="right"
              title="4-Bosqich: Full Launch"
              subtitle="Kelajak"
              text="To‘lov integratsiyasi, Delivery API, obuna modeli"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="jamoa" className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bizning Jamoa</h2>
          <p className="text-slate-600 mb-8">Mahalliy bozor muammolarini ichidan biladigan mutaxassislar.</p>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="w-28 h-28 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
              <img src={PLACEHOLDER_IMG} alt="Umidjon" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Umidjon</h3>
            <p className="text-blue-600 font-medium mb-4">Founder & Full-Stack Developer</p>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Tag>React</Tag>
              <Tag>Node.js</Tag>
              <Tag>Laravel</Tag>
              <Tag>AI API</Tag>
            </div>

            <div className="text-left text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Tajriba:</strong> 3 yil (Web & Mobile)</p>
              <p><strong>Loyihalar:</strong> E-commerce, CRM, Delivery tizimlari.</p>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button className="text-slate-400 hover:text-blue-600 transition"><Users size={18} /></button>
              <button className="text-slate-400 hover:text-slate-900 transition"><Code size={18} /></button>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-xl mb-2 text-slate-800">Nega aynan biz?</h4>
            <p className="text-slate-600">
              Mahalliy bozor muammolarini ichidan bilamiz. Kichik bizneslar bilan doimiy ishlaganimiz sabab, ularning real ehtiyojlarini ko‘ramiz.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-bold">Localify</span>
          </div>

          <div className="text-center md:text-right text-sm">
            <p>© {new Date().getFullYear()} Localify. AI500 1-bosqich uchun tayyor.</p>
            <p className="mt-1">Built with React, Tailwind & AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small helper components ---------- */

function Card({ icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="bg-white/5 p-3 rounded-lg text-white/90">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-slate-300 text-sm">{text}</p>
      </div>
    </div>
  );
}

function StackCard({ title, caption, color = "blue" }) {
  const colorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
  };
  return (
    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
      <div className={`${colorMap[color]} font-bold text-xl mb-1`}>{title}</div>
      <div className="text-xs text-slate-400">{caption}</div>
    </div>
  );
}

function TimelineItem({ side = "left", title, subtitle = "", text = "", icon, active = false }) {
  const left = side === "left";
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
      <div className={`md:w-5/12 p-4 ${left ? "text-right md:pr-8" : "md:pl-8"}`}>
        {left && (
          <>
            <h3 className="font-bold text-xl text-slate-800">{title}</h3>
            <p className="text-slate-600 text-sm mt-2">{text}</p>
          </>
        )}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-white shadow flex items-center justify-center z-10">
        {active ? <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" /> : <div className="w-3 h-3 bg-slate-300 rounded-full" />}
      </div>

      <div className={`md:w-5/12 p-4 ${left ? "md:pl-8" : "text-left md:pl-8"}`}>
        {!left && (
          <>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wide">{subtitle}</span>
            <h3 className="font-bold text-xl text-slate-800">{title}</h3>
            <p className="text-slate-600 text-sm mt-2">{text}</p>
          </>
        )}
      </div>
    </div>
  );
}

function Tag({ children }) {
  return <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">{children}</span>;
}

