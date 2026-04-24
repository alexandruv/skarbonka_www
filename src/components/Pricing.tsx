export function Pricing() {
  return (
    <section data-testid="section-pricing" className="py-16 sm:py-20 md:py-24 px-4 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A1A2E]">
            Proste ceny
          </h2>
          <p className="text-base sm:text-[18px] text-[#6B6B80] mt-3">
            Zacznij za darmo. Odblokuj więcej kiedy jesteś gotowy.
          </p>
        </div>

        {/* Three Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* CARD 1 - Free Tier */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            {/* Tier label */}
            <div className="text-[11px] font-medium text-[#6B6B80] uppercase tracking-wider mb-4">
              DARMOWA
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-[36px] font-bold text-[#1A1A2E]">
                Bezpłatna
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#F0EFEC] my-6"></div>

            {/* Feature list */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-[#1A1A2E]">1 dziecko</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-[#1A1A2E]">1 aktywny cel</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-[#1A1A2E]">Historia 3 miesiące</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-[#1A1A2E]">Karta z watermarkiem</span>
              </li>
              {/* Muted items */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4D2CC] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span className="text-[15px] text-[#9B9B9B]">Eksport CSV/PDF</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4D2CC] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span className="text-[15px] text-[#9B9B9B]">Harmonogramy kieszonkowego</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4D2CC] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span className="text-[15px] text-[#9B9B9B]">Nowe funkcje</span>
              </li>
            </ul>

            {/* Divider */}
            <div className="h-px bg-[#F0EFEC] my-6"></div>

            {/* CTA button */}
            <button className="w-full py-4 px-4 border-[1.5px] border-[#1A1A2E] bg-white text-[#1A1A2E] rounded-lg font-semibold text-[16px] hover:bg-[#1A1A2E] hover:text-white transition-colors">
              Pobierz za darmo
            </button>
          </div>

          {/* CARD 2 - One-time Premium (Featured) */}
          <div className="relative">
            {/* POPULARNE badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-[#FF6B35] text-white px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-wide">
                POPULARNE
              </span>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] border-[#FF6B35]">
              {/* Tier label */}
              <div className="text-[11px] font-medium text-[#FF6B35] uppercase tracking-wider mb-4">
                PREMIUM
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="text-[40px] font-bold text-[#1A1A2E]">
                  12,99 zł
                </div>
                <div className="text-[14px] text-[#6B6B80] mt-1">
                  jednorazowo — na zawsze
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#F0EFEC] my-6"></div>

              {/* Feature list */}
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">5 dzieci</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">Nieograniczone cele</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">Pełna historia</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">Karty bez wodoznaku</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">Eksport CSV/PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">Harmonogramy kieszonkowego</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-[15px] text-[#1A1A2E]">Karty dla dziadków</span>
                </li>
              </ul>

              {/* Note box */}
              <div className="bg-[#FFF0E8] rounded-lg p-3 mb-6">
                <p className="text-[13px] text-[#FF6B35]">
                  Odblokujesz wszystkie funkcje dostępne dziś.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#F0EFEC] my-6"></div>

              {/* CTA button */}
              <button className="w-full py-4 px-4 bg-[#FF6B35] text-white rounded-lg font-semibold text-[16px] hover:bg-[#ff5722] transition-colors">
                Kup za 12,99 zł
              </button>
            </div>
          </div>

          {/* CARD 3 - Annual Premium (Dark) */}
          <div className="bg-[#1A1A2E] rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            {/* Tier label */}
            <div className="text-[11px] font-medium text-[#2EC4B6] uppercase tracking-wider mb-4">
              PREMIUM ROCZNY
            </div>

            {/* Price */}
            <div className="mb-2">
              <div className="text-[40px] font-bold text-white">
                39,99 zł
              </div>
              <div className="text-[14px] text-[#9B9B9B] mt-1">
                rocznie — 3,33 zł/miesiąc
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-6"></div>

            {/* Feature list */}
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-white">Wszystko z wersji jednorazowej</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-white">Nowe funkcje automatycznie</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-white">Sezonowe karty osiągnięć</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span className="text-[15px] text-white">Miesięczny raport rodzinny</span>
              </li>
            </ul>

            {/* Note box */}
            <div className="bg-[#2EC4B6]/15 rounded-lg p-3 mb-6">
              <p className="text-[13px] text-[#2EC4B6]">
                Nowe funkcje trafiają tu pierwsze — bez dopłat.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-6"></div>

            {/* CTA button */}
            <button className="w-full py-4 px-4 bg-[#2EC4B6] text-white rounded-lg font-semibold text-[16px] hover:bg-[#26a89a] transition-colors mb-3">
              Subskrybuj za 39,99 zł/rok
            </button>

            {/* Below CTA text */}
            <p className="text-[13px] text-white/45 text-center">
              Odnawia się co roku. Anuluj kiedy chcesz.
            </p>
          </div>
        </div>

        {/* Section Footer */}
        <div className="text-center mt-8">
          <p className="text-[13px] text-[#9B9B9B]">
            Płatności obsługuje App Store / Google Play. Ceny zawierają VAT.
          </p>
        </div>
      </div>
    </section>
  );
}
