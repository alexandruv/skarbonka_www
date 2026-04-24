export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Rodzic pobiera aplikację',
      description: 'Darmowa aplikacja na iOS i Android. Tworzysz profil dziecka i pierwszy cel oszczędnościowy.',
      accentColor: '#FF6B35',
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Parent figure */}
          <circle cx="40" cy="35" r="12" fill="#FFB5C2"/>
          <path d="M40 50 C30 50 25 55 25 65 L25 75 L55 75 L55 65 C55 55 50 50 40 50 Z" fill="#FF6B35"/>
          {/* Child figure */}
          <circle cx="70" cy="45" r="10" fill="#FFD166"/>
          <path d="M70 58 C62 58 58 62 58 70 L58 78 L82 78 L82 70 C82 62 78 58 70 58 Z" fill="#2EC4B6"/>
          {/* Phone */}
          <rect x="45" y="55" width="30" height="45" rx="4" fill="#1A1A2E"/>
          <rect x="48" y="58" width="24" height="36" fill="#2EC4B6" opacity="0.3"/>
          <circle cx="60" cy="97" r="2" fill="white"/>
        </svg>
      )
    },
    {
      number: 2,
      title: 'Łączysz telefony przez Wi-Fi',
      description: 'Zeskanuj kod QR na telefonie dziecka. Oba telefony muszą być w tej samej sieci Wi-Fi.',
      accentColor: '#2EC4B6',
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Phone 1 with QR code */}
          <rect x="15" y="25" width="35" height="55" rx="4" fill="#1A1A2E"/>
          <rect x="18" y="28" width="29" height="44" fill="white"/>
          <rect x="22" y="35" width="21" height="21" fill="#2EC4B6"/>
          <rect x="25" y="38" width="5" height="5" fill="white"/>
          <rect x="35" y="38" width="5" height="5" fill="white"/>
          <rect x="25" y="48" width="5" height="5" fill="white"/>
          <rect x="35" y="48" width="5" height="5" fill="white"/>
          {/* Phone 2 */}
          <rect x="70" y="40" width="35" height="55" rx="4" fill="#1A1A2E"/>
          <rect x="73" y="43" width="29" height="44" fill="white"/>
          {/* Scanning line */}
          <path d="M55 45 L65 55" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="55" cy="45" r="3" fill="#FF6B35"/>
        </svg>
      )
    },
    {
      number: 3,
      title: 'Dziecko wysyła życzenie',
      description: 'Dziecko wybiera cel i wysyła prośbę do rodzica. Rodzic zatwierdza i cel pojawia się na ekranie.',
      accentColor: '#7B6FE8',
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Phone */}
          <rect x="35" y="30" width="40" height="60" rx="5" fill="#1A1A2E"/>
          <rect x="38" y="33" width="34" height="50" fill="white"/>
          <circle cx="55" cy="86" r="2.5" fill="white"/>
          {/* Thought bubble with bike */}
          <circle cx="85" cy="25" r="18" fill="#7B6FE8" opacity="0.2"/>
          <circle cx="75" cy="35" r="8" fill="#7B6FE8" opacity="0.2"/>
          {/* Bike icon in bubble */}
          <circle cx="83" cy="22" r="4" stroke="#7B6FE8" strokeWidth="2" fill="none"/>
          <circle cx="95" cy="22" r="4" stroke="#7B6FE8" strokeWidth="2" fill="none"/>
          <path d="M83 22 L89 12 L95 22" stroke="#7B6FE8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 4,
      title: 'Rodzic dodaje kieszonkowe',
      description: 'Regularne wpłaty — tygodniowe lub miesięczne. Dziecko widzi postęp w czasie rzeczywistym.',
      accentColor: '#FF6B35',
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Piggy bank */}
          <ellipse cx="60" cy="65" rx="35" ry="25" fill="#FFB5C2"/>
          <circle cx="75" cy="60" r="3" fill="#1A1A2E"/>
          <ellipse cx="50" cy="68" rx="4" ry="6" fill="#FFA0B0"/>
          <path d="M40 55 L35 50 L38 52 Z" fill="#FFB5C2"/>
          <rect x="55" y="45" width="20" height="8" rx="2" fill="#FF6B35"/>
          {/* Hand dropping coin */}
          <path d="M50 15 C50 15 45 20 45 25 L45 35 C45 40 50 45 55 45 L65 45 C70 45 75 40 75 35 L75 25" fill="#FFD166" opacity="0.3"/>
          <circle cx="60" cy="28" r="8" fill="#FFD166"/>
          <text x="60" y="32" fontSize="10" fill="#1A1A2E" textAnchor="middle" fontWeight="bold">zł</text>
          {/* Arm/hand */}
          <path d="M60 10 L60 25" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      number: 5,
      title: 'Skarbonka się wypełnia',
      description: 'Dziecko obserwuje jak oszczędności rosną. Pasek postępu, animacja świnki, odznaki za konsekwencję.',
      accentColor: '#2EC4B6',
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Phone */}
          <rect x="30" y="20" width="60" height="90" rx="6" fill="#1A1A2E"/>
          <rect x="35" y="25" width="50" height="75" fill="white"/>
          {/* Piggy bank on screen */}
          <ellipse cx="60" cy="55" rx="20" ry="15" fill="#FFB5C2"/>
          <circle cx="68" cy="52" r="2" fill="#1A1A2E"/>
          <rect x="55" y="45" width="12" height="5" rx="1" fill="#FF6B35"/>
          {/* Progress bar */}
          <rect x="40" y="75" width="40" height="8" rx="4" fill="#F0EFEC"/>
          <rect x="40" y="75" width="28" height="8" rx="4" fill="#2EC4B6"/>
          {/* Percentage */}
          <text x="60" y="92" fontSize="8" fill="#2EC4B6" textAnchor="middle" fontWeight="bold">70%</text>
          <circle cx="60" cy="105" r="2" fill="white"/>
        </svg>
      )
    },
    {
      number: 6,
      title: 'Cel osiągnięty — świętowanie!',
      description: 'Piękna karta do udostępnienia rodzinie. Odznaka, animacja i motywacja do kolejnego celu.',
      accentColor: '#FFD166',
      illustration: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Trophy */}
          <path d="M40 35 L40 45 C40 55 45 60 50 62 L50 70 L45 70 L45 75 L75 75 L75 70 L70 70 L70 62 C75 60 80 55 80 45 L80 35 Z" fill="#FFD166"/>
          <rect x="35" y="30" width="50" height="8" rx="2" fill="#F4A261"/>
          <ellipse cx="60" cy="50" rx="15" ry="10" fill="#F4A261" opacity="0.3"/>
          {/* Star */}
          <path d="M60 20 L63 28 L72 28 L65 33 L68 42 L60 36 L52 42 L55 33 L48 28 L57 28 Z" fill="#FFD166"/>
          {/* Confetti */}
          <circle cx="30" cy="25" r="3" fill="#FF6B35"/>
          <circle cx="90" cy="30" r="3" fill="#2EC4B6"/>
          <rect x="25" y="50" width="4" height="4" fill="#FFB5C2" transform="rotate(20 27 52)"/>
          <rect x="88" y="55" width="4" height="4" fill="#7B6FE8" transform="rotate(-15 90 57)"/>
          <circle cx="35" cy="70" r="2" fill="#2EC4B6"/>
          <circle cx="85" cy="68" r="2" fill="#FF6B35"/>
        </svg>
      )
    }
  ];

  return (
    <section data-testid="section-how-it-works" className="py-16 sm:py-20 md:py-24 px-4 bg-[#FAFAF8]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A1A2E] mb-3">
            Jak to działa
          </h2>
          <p className="text-base sm:text-[18px] text-[#6B6B80]">
            Sześć kroków do zdrowych nawyków finansowych
          </p>
        </div>

        {/* Steps Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-6 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow h-full flex flex-col">
                {/* Illustration tile with integrated step number */}
                <div className="relative mb-6">
                  <div
                    className="w-full aspect-square rounded-2xl p-6 relative"
                    style={{ backgroundColor: `${step.accentColor}15` }}
                  >
                    {step.illustration}
                    {/* Step number badge */}
                    <div
                      className="absolute bottom-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.accentColor }}
                    >
                      <span className="text-white text-[13px] font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <h3 className="text-[17px] font-semibold text-[#1A1A2E] text-center mb-3 leading-snug min-h-[44px] flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#6B6B80] text-center leading-[1.6]">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-[120px] -right-3 w-6 h-[2px] bg-gradient-to-r from-[#E0E0E0] to-transparent z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E0E0E0]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Stacked cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              {/* Illustration tile with integrated step number */}
              <div className="relative mb-6 max-w-[240px] mx-auto">
                <div
                  className="w-full aspect-square rounded-2xl p-6 relative"
                  style={{ backgroundColor: `${step.accentColor}15` }}
                >
                  {step.illustration}
                  {/* Step number badge */}
                  <div
                    className="absolute bottom-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: step.accentColor }}
                  >
                    <span className="text-white text-[13px] font-bold">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <h3 className="text-[17px] font-semibold text-[#1A1A2E] text-center mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#6B6B80] text-center leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
