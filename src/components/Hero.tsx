import SkarbonkaApp from '../imports/SkarbonkaApp/SkarbonkaApp'
import { SkarbonkaLogo } from './SkarbonkaLogo'

export function Hero() {
  return (
    <section
      data-testid="section-hero"
      className="min-h-screen flex items-center px-4 sm:px-6 py-12 relative overflow-hidden bg-[#FAFAF8]"
    >
      {/* Background decoration - Skarbonka logo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
        <SkarbonkaLogo className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-12 py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1A1A2E] leading-tight">
              Twoje dziecko samo poprosi o kieszonkowe na oszczędzanie.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1A1A2E]/80 leading-relaxed max-w-2xl">
              Skarbonka to aplikacja, która zmienia kieszonkowe w prawdziwą lekcję finansów.
              Bez subskrypcji, bez reklam, bez rejestracji.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="#"
                className="px-10 py-5 text-lg bg-[#FF6B35] text-white rounded-xl hover:bg-[#ff5722] transition-all hover:shadow-xl hover:scale-105 text-center flex items-center justify-center gap-3"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Pobierz na App Store
              </a>
              <a
                href="#"
                className="px-10 py-5 text-lg border-2 border-[#FF6B35] text-[#FF6B35] rounded-xl hover:bg-[#FF6B35]/10 transition-all hover:shadow-xl hover:scale-105 text-center flex items-center justify-center gap-3"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Pobierz na Google Play
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end w-full overflow-x-hidden">
            <div className="origin-top scale-[0.72] sm:scale-[0.82] md:scale-95 lg:scale-100 transition-transform">
            <div className="relative w-[390px] max-w-[min(100vw-2rem,390px)] h-[844px] bg-gradient-to-br from-[#FF6B35] to-[#2EC4B6] rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[2.75rem] overflow-hidden relative">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

                {/* App Screen Content */}
                <div className="w-full h-full overflow-hidden">
                  <SkarbonkaApp />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
