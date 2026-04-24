import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Czy mogę używać Skarbonkę z wieloma dziećmi w darmowej wersji?',
      answer: 'Nie, darmowa wersja obsługuje 1 dziecko. Premium pozwala na 5 dzieci.'
    },
    {
      question: 'Czy dane są wysyłane do chmury?',
      answer: 'Nie. Wszystkie dane przechowywane są lokalnie na telefonie. Backupy wykonujesz ręcznie.'
    },
    {
      question: 'Czy mogę zmienić walutę z zł na inną?',
      answer: 'Nie, Skarbonka to aplikacja dla polskich rodzin i działa tylko w PLN.'
    },
    {
      question: 'Czy dziecko może wydać oszczędzane pieniądze w aplikacji?',
      answer: 'Nie. Skarbonka to TRACKER, nie bank. Pieniądze fizycznie daje mu rodzic po osiągnięciu celu.'
    },
    {
      question: 'Czy istnieje wersja dla Androida?',
      answer: 'Tak, aplikacja dostępna na iOS i Androidzie.'
    },
    {
      question: 'Czy mogę wyeksportować dane?',
      answer: 'Tak, w wersji Premium możesz wyeksportować do CSV lub PDF.'
    }
  ];

  return (
    <section data-testid="section-faq" className="py-16 sm:py-20 md:py-24 px-4 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            Najczęstsze pytania
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#FAFAF8] transition-colors"
              >
                <span className="text-lg font-semibold text-[#1A1A2E] text-left">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#2EC4B6] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-[#1A1A2E]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
