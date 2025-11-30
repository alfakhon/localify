export default function App() {
  return (
   <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:0; margin:0;">

    <!-- HERO SECTION -->
    <div style="background:linear-gradient(135deg,#4B79A1,#283E51); color:white; padding:80px 20px; text-align:center;">
        <h1 style="font-size:48px; margin-bottom:10px; font-weight:800;">Localify</h1>
        <p style="font-size:20px; max-width:700px; margin:0 auto;">
            O‘zbekiston bo‘ylab mahalliy sotuvchilar va xaridorlarni bir joyga jamlovchi,
            lokatsiya asosidagi aqlli marketplace.
        </p>
    </div>

    <!-- MUAMMO VA YECHIM -->
    <div style="padding:60px 20px; max-width:900px; margin:0 auto;">
        <h2 style="font-size:32px; margin-bottom:20px; font-weight:700; color:#333;">1. Muammo va Yechim</h2>

        <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); margin-bottom:30px;">
            <h3 style="font-size:24px; margin-bottom:12px; color:#444;">Muammo</h3>
            <p style="line-height:1.6; font-size:18px;">
                O‘zbekistonda kichik biznes va mahalliy sotuvchilar mahsulotlarini internetga qo‘yishda
                qiyinchiliklarga duch keladi. Xaridorlar esa o‘z hududiga yaqin xizmat yoki mahsulotni
                topa olmaydi. Telegramdagi e’lonlar ishlaydi, biroq tartibsiz, qidiruvi yo‘q va ishonch kam.
            </p>
        </div>

        <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
            <h3 style="font-size:24px; margin-bottom:12px; color:#444;">Yechim</h3>
            <p style="line-height:1.6; font-size:18px;">
                Localify — joylashuvga asoslangan marketplace. Sotuvchi mahsulotini joylashtiradi,
                xaridor esa 500 metr – 30 km radiusdagi xizmatlarni ko‘ra oladi. Hammasi carta asosida,
                filtrlar bilan va sotuvchi bilan bevosita bog‘lanish imkoniyati bilan.
            </p>
        </div>
    </div>

    <!-- TEAM SECTION -->
    <div style="padding:60px 20px; max-width:900px; margin:0 auto;">
        <h2 style="font-size:32px; margin-bottom:20px; font-weight:700; color:#333;">2. Jamoa</h2>

        <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
            <h3 style="font-size:24px; margin-bottom:10px; color:#444;">Umidjon — Founder & Full-Stack Developer</h3>
            <p style="font-size:18px; margin-bottom:8px;">Ko‘nikmalar: React, PHP Laravel, Unity C#, AI tools</p>
            <p style="font-size:18px; color:#555;">Tajriba: E-commerce, CRM, marketplace loyihalar</p>
        </div>
    </div>

    <!-- WHY TEAM CAN DO IT -->
    <div style="padding:60px 20px; max-width:900px; margin:0 auto;">
        <h2 style="font-size:32px; margin-bottom:20px; font-weight:700; color:#333;">
            3. Nega aynan bizning jamoa bu muammoni hal qila oladi?
        </h2>

        <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
            <p style="font-size:18px; line-height:1.6;">
                Bizning tajribamiz e-commerce, marketplace va mahsulotlarni boshqarish bo‘yicha kuchli.
                Backend, frontend va dizayn bo‘yicha to‘liq ishlab chiqish imkoniyatimiz bor.
                Eng muhimi — O‘zbekiston bozoridagi muammoni o‘z ko‘zimiz bilan ko‘rganmiz va
                real yechim yaratish motivatsiyasi juda yuqori.
            </p>
        </div>
    </div>

    <!-- ROADMAP -->
    <div style="padding:60px 20px; max-width:900px; margin:0 auto;">
        <h2 style="font-size:32px; margin-bottom:20px; font-weight:700; color:#333;">4. Yo‘l xaritasi</h2>

        <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
            <h3 style="font-size:22px; margin-bottom:10px;">Joriy bosqich: MVP</h3>
            <ul style="font-size:18px; line-height:1.8;">
                <li>🔹 Lokatsiya bo‘yicha qidiruv</li>
                <li>🔹 Mahsulot kartalari</li>
                <li>🔹 Sotuvchi bilan to‘g‘ridan-to‘g‘ri aloqa</li>
                <li>🔹 Admin uchun soddalashtirilgan product upload</li>
            </ul>

            <h3 style="font-size:22px; margin-top:20px;">Keyingi bosqichlar:</h3>
            <ul style="font-size:18px; line-height:1.8;">
                <li>🔸 AI-rekomendatsiya tizimi</li>
                <li>🔸 Sotuvchilar uchun reklama bo‘limi</li>
                <li>🔸 Payment integratsiyasi</li>
                <li>🔸 Mobil ilova (Flutter / React Native)</li>
            </ul>
        </div>
    </div>

    <!-- HOW TECH SOLVES THE PROBLEM -->
    <div style="padding:60px 20px; max-width:900px; margin:0 auto;">
        <h2 style="font-size:32px; margin-bottom:20px; font-weight:700; color:#333;">
            5. Muammoni qanday hal qilamiz?
        </h2>

        <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
            <p style="font-size:18px; line-height:1.7;">
                Localify foydalanuvchilarga eng yaqin xizmatlarni xarita orqali ko‘rsatadi.
                Backend Laravel / Node.js orqali ishlaydi. Frontend esa Reactda quriladi.
                AI yordamida mahsulotlarni avtomatik kategoriyalash, title-tozalash,
                spam aniqlash va sotuvchilar uchun maslahatlar taklif etiladi.
            </p>
        </div>
    </div>

    <!-- FOOTER -->
    <div style="background:#283E51; padding:30px; color:white; text-align:center;">
        <p style="margin:0; font-size:16px;">© 2025 Localify — AI500 Demo Project</p>
    </div>

</div>

  )
}
