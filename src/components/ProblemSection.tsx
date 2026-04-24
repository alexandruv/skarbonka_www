export function ProblemSection() {
  const problems = [
    {
      title: 'Brak nawyku oszczędzania',
      description: 'Dzieci wydają kieszonkowe natychmiast. Bez ćwiczenia odkładania, nawyk nigdy nie powstanie.',
      accentColor: '#FF6B35',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Child figure */}
          <circle cx="40" cy="25" r="10" fill="#FFB5C2"/>
          <path d="M40 38 C32 38 28 42 28 50 L28 60 L52 60 L52 50 C52 42 48 38 40 38 Z" fill="#FF6B35"/>
          {/* Empty pockets turned out - left */}
          <path d="M28 45 L22 48 L22 55 L28 52 Z" fill="white" stroke="#FF6B35" strokeWidth="1.5"/>
          {/* Empty pockets turned out - right */}
          <path d="M52 45 L58 48 L58 55 L52 52 Z" fill="white" stroke="#FF6B35" strokeWidth="1.5"/>
          {/* Coins flying away */}
          <circle cx="15" cy="35" r="3" fill="#FFD166">
            <animateTransform attributeName="transform" type="translate" values="0,0; -5,-5" dur="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="65" cy="38" r="3" fill="#FFD166">
            <animateTransform attributeName="transform" type="translate" values="0,0; 5,-5" dur="1.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="20" cy="50" r="2.5" fill="#F4A261">
            <animateTransform attributeName="transform" type="translate" values="0,0; -3,-8" dur="1.1s" repeatCount="indefinite"/>
          </circle>
        </svg>
      )
    },
    {
      title: 'Brak konkretnego celu',
      description: 'Oszczędzanie bez celu to abstrakcja. Dzieci potrzebują wizualizacji — czegoś namacalnego, na co czekają.',
      accentColor: '#2EC4B6',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Child figure */}
          <circle cx="40" cy="28" r="10" fill="#FFB5C2"/>
          <path d="M40 41 C32 41 28 45 28 53 L28 65 L52 65 L52 53 C52 45 48 41 40 41 Z" fill="#2EC4B6"/>
          {/* Large question mark */}
          <circle cx="40" cy="15" r="12" fill="#2EC4B6" opacity="0.15"/>
          <text x="40" y="22" fontSize="18" fill="#2EC4B6" textAnchor="middle" fontWeight="bold">?</text>
          {/* Abstract money symbols floating */}
          <text x="20" y="30" fontSize="12" fill="#6B6B80" opacity="0.4">zł</text>
          <text x="60" y="35" fontSize="10" fill="#6B6B80" opacity="0.4">€</text>
          <text x="15" y="50" fontSize="11" fill="#6B6B80" opacity="0.4">$</text>
          <text x="62" y="52" fontSize="11" fill="#6B6B80" opacity="0.4">zł</text>
        </svg>
      )
    },
    {
      title: 'Brak rozmowy o pieniądzach',
      description: 'Rozmowy o finansach są trudne. Skarbonka staje się naturalnym pretekstem do rozmowy z dzieckiem.',
      accentColor: '#7B6FE8',
      illustration: (
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Parent figure (left) */}
          <circle cx="20" cy="25" r="8" fill="#FFB5C2"/>
          <path d="M20 36 C14 36 11 39 11 45 L11 55 L29 55 L29 45 C29 39 26 36 20 36 Z" fill="#7B6FE8"/>
          {/* Child figure (right) */}
          <circle cx="60" cy="28" r="7" fill="#FFD166"/>
          <path d="M60 38 C55 38 52 41 52 46 L52 55 L68 55 L68 46 C68 41 65 38 60 38 Z" fill="#2EC4B6"/>
          {/* Empty speech bubble between them */}
          <rect x="32" y="20" width="16" height="12" rx="4" fill="none" stroke="#6B6B80" strokeWidth="1.5" opacity="0.3"/>
          <path d="M35 32 L38 37 L41 32 Z" fill="none" stroke="#6B6B80" strokeWidth="1.5" opacity="0.3"/>
          {/* Dots in bubble representing silence */}
          <circle cx="36" cy="26" r="1" fill="#6B6B80" opacity="0.2"/>
          <circle cx="40" cy="26" r="1" fill="#6B6B80" opacity="0.2"/>
          <circle cx="44" cy="26" r="1" fill="#6B6B80" opacity="0.2"/>
        </svg>
      )
    }
  ];

  return (
    <section data-testid="section-problem" className="py-16 sm:py-20 md:py-24 px-4 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto">
        {/* BLOCK 1: Emotional Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#1A1A2E] leading-tight">
            Większość dzieci dostaje kieszonkowe.
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#FF6B35] leading-tight">
            Nikt nie uczy ich, co z nim zrobić.
          </h2>
          <p className="text-base sm:text-lg md:text-[20px] text-[#6B6B80] mt-4 max-w-3xl mx-auto">
            Skarbonka zmienia to — przez cele, zabawę i rozmowę z rodzicem.
          </p>
        </div>

        {/* Spacing */}
        <div className="h-12"></div>

        {/* BLOCK 2: Three Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Illustration tile */}
              <div
                className="w-20 h-20 rounded-2xl p-3 mb-6"
                style={{ backgroundColor: `${problem.accentColor}1F` }}
              >
                {problem.illustration}
              </div>

              {/* Card title */}
              <h3 className="text-[20px] font-semibold text-[#1A1A2E] mb-3">
                {problem.title}
              </h3>

              {/* Card body */}
              <p className="text-[15px] text-[#6B6B80] leading-[1.6] mb-6">
                {problem.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: problem.accentColor }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
