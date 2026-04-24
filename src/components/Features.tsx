export function Features() {
  const features = [
    {
      title: 'Darmowa aplikacja',
      description: 'Pobierz za darmo na iOS i Android. Jedno dziecko, jeden aktywny cel, pełna funkcjonalność — bez karty kredytowej.',
      accentColor: '#2EC4B6',
      badge: 'FREE',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Phone */}
          <rect x="25" y="15" width="30" height="50" rx="4" fill="#1A1A2E"/>
          <rect x="28" y="18" width="24" height="40" fill="white"/>
          <circle cx="40" cy="61" r="2" fill="white"/>
          {/* Piggy bank on screen */}
          <ellipse cx="40" cy="35" rx="10" ry="7" fill="#FFB5C2"/>
          <circle cx="45" cy="33" r="1.5" fill="#1A1A2E"/>
          <rect x="37" y="30" width="6" height="3" rx="1" fill="#FF6B35"/>
          {/* Download arrow */}
          <path d="M40 50 L40 65" stroke="#2EC4B6" strokeWidth="3" strokeLinecap="round"/>
          <path d="M35 60 L40 65 L45 60" stroke="#2EC4B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Lista życzeń dziecka',
      description: 'Dziecko wysyła życzenie, rodzic zatwierdza. Naturalny pretekst do rozmowy: „Porozmawiajmy o tym celu".',
      accentColor: '#FF6B35',
      badge: 'FREE',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Child phone with thought bubble */}
          <rect x="10" y="35" width="20" height="32" rx="3" fill="#1A1A2E"/>
          <rect x="12" y="37" width="16" height="26" fill="white"/>
          <circle cx="20" cy="66" r="1.5" fill="white"/>
          {/* Thought bubble with bike */}
          <circle cx="35" cy="20" r="10" fill="#FF6B35" opacity="0.15"/>
          <path d="M30 22 C30 22 32 18 35 18 C38 18 40 22 40 22" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="23" r="2" stroke="#FF6B35" strokeWidth="1.5" fill="none"/>
          <circle cx="38" cy="23" r="2" stroke="#FF6B35" strokeWidth="1.5" fill="none"/>
          {/* Parent phone with checkmark */}
          <rect x="50" y="35" width="20" height="32" rx="3" fill="#1A1A2E"/>
          <rect x="52" y="37" width="16" height="26" fill="white"/>
          <circle cx="60" cy="66" r="1.5" fill="white"/>
          {/* Checkmark appearing */}
          <path d="M55 50 L58 53 L65 46" stroke="#2EC4B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Synchronizacja przez Wi-Fi',
      description: 'Brak chmury, brak kont. Oba telefony łączą się przez domowe Wi-Fi — dane nigdy nie opuszczają waszej sieci.',
      accentColor: '#7B6FE8',
      badge: 'FREE',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Left phone */}
          <rect x="10" y="25" width="22" height="35" rx="3" fill="#1A1A2E"/>
          <rect x="12" y="27" width="18" height="28" fill="white"/>
          <circle cx="21" cy="58" r="1.5" fill="white"/>
          {/* Right phone */}
          <rect x="48" y="25" width="22" height="35" rx="3" fill="#1A1A2E"/>
          <rect x="50" y="27" width="18" height="28" fill="white"/>
          <circle cx="59" cy="58" r="1.5" fill="white"/>
          {/* Wi-Fi symbol between them */}
          <path d="M32 40 C32 40 36 37 40 37 C44 37 48 40 48 40" stroke="#7B6FE8" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M34 43 C34 43 37 41 40 41 C43 41 46 43 46 43" stroke="#7B6FE8" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="40" cy="46" r="2" fill="#7B6FE8"/>
        </svg>
      )
    },
    {
      title: 'Karty do udostępniania',
      description: 'Gdy dziecko osiągnie cel, generujemy piękną kartę. Rodzeństwo i dziadkowie widzą sukces — motywacja rośnie.',
      accentColor: '#FF6B35',
      badge: 'FREE',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Trophy/star burst */}
          <path d="M40 15 L43 28 L56 28 L46 35 L50 48 L40 40 L30 48 L34 35 L24 28 L37 28 Z" fill="#FFD166"/>
          {/* Card being held up */}
          <rect x="25" y="35" width="30" height="35" rx="3" fill="white" stroke="#FF6B35" strokeWidth="2"/>
          <rect x="30" y="40" width="20" height="12" rx="2" fill="#FFB5C2" opacity="0.3"/>
          <rect x="30" y="55" width="15" height="2" rx="1" fill="#6B6B80" opacity="0.2"/>
          <rect x="30" y="60" width="20" height="2" rx="1" fill="#6B6B80" opacity="0.2"/>
          {/* Confetti */}
          <circle cx="20" cy="30" r="2" fill="#2EC4B6"/>
          <circle cx="60" cy="32" r="2" fill="#FF6B35"/>
          <rect x="18" y="45" width="3" height="3" fill="#FFD166" transform="rotate(15 19.5 46.5)"/>
        </svg>
      )
    },
    {
      title: 'Przypomnienia i harmonogramy',
      description: 'Automatyczne powiadomienia o kieszonkowym. Tygodniowo lub miesięcznie — rodzic nigdy nie zapomni.',
      accentColor: '#FFD166',
      badge: 'PREMIUM',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Calendar */}
          <rect x="15" y="20" width="35" height="35" rx="3" fill="white" stroke="#FFD166" strokeWidth="2"/>
          <rect x="15" y="20" width="35" height="8" fill="#FFD166"/>
          {/* Calendar dots/marks */}
          <circle cx="23" cy="35" r="2" fill="#6B6B80" opacity="0.2"/>
          <circle cx="31" cy="35" r="2" fill="#6B6B80" opacity="0.2"/>
          <circle cx="39" cy="35" r="2" fill="#FFD166"/>
          <circle cx="23" cy="43" r="2" fill="#6B6B80" opacity="0.2"/>
          <circle cx="31" cy="43" r="2" fill="#6B6B80" opacity="0.2"/>
          {/* Bell with notification */}
          <path d="M55 35 C55 35 52 38 52 42 L52 50 C52 52 54 54 56 54 L64 54 C66 54 68 52 68 50 L68 42 C68 38 65 35 65 35" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M58 54 C58 56 60 58 60 58 C60 58 62 56 62 54" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <circle cx="65" cy="38" r="4" fill="#FF6B35"/>
          {/* Coin dropping */}
          <circle cx="40" cy="65" r="4" fill="#F4A261"/>
        </svg>
      )
    },
    {
      title: 'Odznaki i osiągnięcia',
      description: '17 odznak za konsekwencję i postęp. Gamifikacja, która uczy — nie uzależnia.',
      accentColor: '#FFD166',
      badge: 'PREMIUM',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Row of badges */}
          <circle cx="20" cy="35" r="8" fill="#6B6B80" opacity="0.15"/>
          <path d="M20 30 L22 35 L27 35 L23 38 L25 43 L20 40 L15 43 L17 38 L13 35 L18 35 Z" fill="#6B6B80" opacity="0.3"/>

          <rect x="33" y="27" width="14" height="16" rx="2" fill="#6B6B80" opacity="0.15"/>
          <circle cx="40" cy="32" r="3" fill="#6B6B80" opacity="0.3"/>
          <rect x="37" y="36" width="6" height="2" fill="#6B6B80" opacity="0.3"/>

          {/* Glowing badge (just unlocked) */}
          <circle cx="60" cy="35" r="10" fill="#FFD166" opacity="0.2"/>
          <circle cx="60" cy="35" r="8" fill="#FFD166"/>
          <path d="M60 30 L62 35 L67 35 L63 38 L65 43 L60 40 L55 43 L57 38 L53 35 L58 35 Z" fill="white"/>

          {/* More badges below */}
          <circle cx="25" cy="55" r="6" fill="#6B6B80" opacity="0.15"/>
          <circle cx="45" cy="55" r="6" fill="#6B6B80" opacity="0.15"/>
          <circle cx="65" cy="55" r="6" fill="#6B6B80" opacity="0.15"/>
        </svg>
      )
    }
  ];

  return (
    <section data-testid="section-features" className="py-16 sm:py-20 md:py-24 px-4 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A1A2E]">
            Co wyróżnia Skarbonkę
          </h2>
          <p className="text-base sm:text-[18px] text-[#6B6B80] mt-3">
            Zaprojektowane dla rodzin, nie dla korporacji.
          </p>
        </div>

        {/* Card Grid - 2 rows × 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)] transition-shadow relative"
            >
              {/* Badge in top-right */}
              {feature.badge === 'FREE' && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full" style={{ backgroundColor: '#2EC4B61F' }}>
                  <span className="text-[11px] font-medium" style={{ color: '#2EC4B6' }}>FREE</span>
                </div>
              )}
              {feature.badge === 'PREMIUM' && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full" style={{ backgroundColor: '#FFD16633' }}>
                  <span className="text-[11px] font-medium" style={{ color: '#854F0B' }}>PREMIUM</span>
                </div>
              )}

              {/* Illustration tile */}
              <div
                className="w-20 h-20 rounded-2xl p-3 mb-6"
                style={{ backgroundColor: `${feature.accentColor}1F` }}
              >
                {feature.illustration}
              </div>

              {/* Card title */}
              <h3 className="text-[20px] font-semibold text-[#1A1A2E] mb-3">
                {feature.title}
              </h3>

              {/* Card body */}
              <p className="text-[15px] text-[#6B6B80] leading-[1.6] mb-6">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: feature.accentColor }}
              ></div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center">
          <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg font-semibold text-[16px] hover:bg-[#ff5722] transition-colors">
            Pobierz Skarbonkę za darmo
          </button>
          <p className="text-[14px] text-[#6B6B80] mt-3">
            Premium od 12,99 zł jednorazowo lub 39,99 zł/rok
          </p>
        </div>
      </div>
    </section>
  );
}
