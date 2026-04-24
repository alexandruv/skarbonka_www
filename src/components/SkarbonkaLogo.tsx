import svgPaths from '../imports/SkarbonkaApp/svg-7i1e982imr'

interface SkarbonkaLogoProps {
  className?: string
}

export function SkarbonkaLogo({ className = 'w-8 h-8' }: SkarbonkaLogoProps) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 160 140"
      aria-label="Skarbonka Logo"
    >
      <g id="skarbonka-app-logo">
        <path d={svgPaths.p940e870} fill="var(--fill-0, #1A1A2E)" id="Vector" opacity="0.06" />
        <path d={svgPaths.p12bbc40} fill="var(--fill-0, #FFB5C2)" id="Vector_2" />
        <path d={svgPaths.p2e3cd180} fill="var(--fill-0, #FFB5C2)" id="Vector_3" />
        <path d={svgPaths.p19a3b400} fill="var(--fill-0, #FFA0B0)" id="Vector_4" />
        <path d={svgPaths.p2202f300} fill="var(--fill-0, #FFB5C2)" id="Vector_5" />
        <path d={svgPaths.p2c7da580} fill="var(--fill-0, #FFC8D4)" id="Vector_6" opacity="0.6" />
        <path d={svgPaths.p32191e00} fill="var(--fill-0, #FFB5C2)" id="Vector_7" />
        <path d={svgPaths.p26453b00} fill="var(--fill-0, #FFB5C2)" id="Vector_8" />
        <path d={svgPaths.p7329980} fill="var(--fill-0, #FFB5C2)" id="Vector_9" />
        <path d={svgPaths.p1b0ab700} fill="var(--fill-0, #FFC8D4)" id="Vector_10" />
        <path d={svgPaths.p1ccf3300} fill="var(--fill-0, #FF6B35)" id="Vector_11" />
        <path d={svgPaths.p205c7080} fill="var(--fill-0, #FF6B35)" id="Vector_12" />
        <path d={svgPaths.p1fc97c80} fill="var(--fill-0, #1A1A2E)" id="Vector_13" />
        <path d={svgPaths.p37f53a80} fill="var(--fill-0, white)" id="Vector_14" />
        <path d={svgPaths.p3d7f5400} fill="var(--fill-0, #1A1A2E)" id="Vector_15" />
        <path d={svgPaths.p6492440} fill="var(--fill-0, white)" id="Vector_16" />
        <path d={svgPaths.p3697c1a0} id="Vector_17" stroke="var(--stroke-0, #1A1A2E)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p3f93800} fill="var(--fill-0, #FF6B35)" id="Vector_18" />
        <path d={svgPaths.p3389e7c0} id="Vector_19" stroke="var(--stroke-0, #FFB5C2)" strokeLinecap="round" strokeWidth="6" />
        <path d={svgPaths.p27c44800} fill="var(--fill-0, #FFD166)" id="Vector_20" />
        <path d={svgPaths.p3f90600} fill="var(--fill-0, #F4A261)" id="Vector_21" />
      </g>
    </svg>
  );
}
