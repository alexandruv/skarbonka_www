export function Testimonials() {
  const testimonials = [
    {
      quote: 'Moja córka została zainteresowana oszczędzaniem! To zmienia sposób, w jaki myśli o pieniądzach.',
      author: 'Katarzyna M.',
      location: 'Warszawa',
      rating: 5
    },
    {
      quote: 'Bez subskrypcji i bez reklam — dokładnie to, czego szukałem dla mojego syna.',
      author: 'Piotr K.',
      location: 'Kraków',
      rating: 5
    },
    {
      quote: 'Karty do udostępniania są cudowne. Wszystkie ciotki i babcie chcą wiedzieć, jak to działa!',
      author: 'Agnieszka Z.',
      location: 'Wrocław',
      rating: 5
    }
  ];

  return (
    <section data-testid="section-testimonials" className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            Co mówią rodzice
          </h2>
          <p className="text-xl text-[#1A1A2E]/70">
            Rzeczywiste opinie od ponad 1000 rodziców
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FAFAF8] rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFD166]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              <p className="text-lg text-[#1A1A2E] italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-xl">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A2E]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[#1A1A2E]/60">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
