import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ProjectVisualVariant =
  | "ronin"
  | "misk"
  | "elraceWeb"
  | "jewelry"
  | "elraceApp"
  | "storyHero"
  | "smartHair"
  | "echoMood";

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  className?: string;
  title: string;
};

const accent = {
  orange: "hsl(var(--primary))",
  teal: "hsl(var(--secondary))",
  dark: "hsl(var(--foreground))",
};

const meta: Record<ProjectVisualVariant, { eyebrow: string; label: string; glow: string }> = {
  ronin: { eyebrow: "Gaming commerce", label: "28ms audio storefront", glow: "#ff6b35" },
  misk: { eyebrow: "Foundation platform", label: "Youth programs portal", glow: "#4db6ac" },
  elraceWeb: { eyebrow: "Construction website", label: "Project showcase system", glow: "#ff6b35" },
  jewelry: { eyebrow: "Luxury commerce", label: "Certified diamond store", glow: "#f5c16c" },
  elraceApp: { eyebrow: "Operations app", label: "Field task command center", glow: "#4db6ac" },
  storyHero: { eyebrow: "AI storytelling", label: "Personalized story creator", glow: "#ff6b35" },
  smartHair: { eyebrow: "AI vision app", label: "Hair analysis scanner", glow: "#4db6ac" },
  echoMood: { eyebrow: "AI journaling", label: "Mood insight companion", glow: "#ff6b35" },
};

const DeviceFrame = ({ children, variant, title, className }: ProjectVisualProps & { children: ReactNode }) => {
  const item = meta[variant];

  return (
    <div className={cn("relative h-full min-h-[12rem] w-full overflow-hidden bg-foreground", className)}>
      <svg
        viewBox="0 0 900 520"
        role="img"
        aria-label={title}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`project-bg-${variant}`} x1="70" x2="830" y1="36" y2="490" gradientUnits="userSpaceOnUse">
            <stop stopColor="#111" />
            <stop offset=".52" stopColor="#1c1511" />
            <stop offset="1" stopColor="#101b1a" />
          </linearGradient>
          <linearGradient id={`project-accent-${variant}`} x1="120" x2="790" y1="80" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor={accent.orange} />
            <stop offset="1" stopColor={accent.teal} />
          </linearGradient>
          <filter id={`project-glow-${variant}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="24" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1 0 .42 0 0 .28 0 0 .22 0 .35 0 0 0 1 0" />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
        <rect width="900" height="520" fill={`url(#project-bg-${variant})`} />
        <circle cx="136" cy="92" r="150" fill={item.glow} fillOpacity=".18" filter={`url(#project-glow-${variant})`} />
        <circle cx="800" cy="430" r="190" fill={accent.teal} fillOpacity=".14" filter={`url(#project-glow-${variant})`} />
        <path d="M0 420C180 330 310 440 462 350c158-94 292-64 438-158v328H0Z" fill={`url(#project-accent-${variant})`} fillOpacity=".08" />
        <g opacity=".16">
          {Array.from({ length: 11 }).map((_, index) => (
            <path key={index} d={`M${index * 90} 0v520`} stroke="white" />
          ))}
          {Array.from({ length: 7 }).map((_, index) => (
            <path key={index} d={`M0 ${index * 86}h900`} stroke="white" />
          ))}
        </g>
        <rect x="58" y="46" width="784" height="428" rx="34" fill="white" fillOpacity=".055" stroke="white" strokeOpacity=".12" />
        <rect x="84" y="76" width="732" height="44" rx="16" fill="white" fillOpacity=".075" />
        <circle cx="112" cy="98" r="6" fill={accent.orange} />
        <circle cx="134" cy="98" r="6" fill={accent.teal} />
        <rect x="168" y="91" width="136" height="12" rx="6" fill="white" fillOpacity=".48" />
        <rect x="668" y="88" width="98" height="18" rx="9" fill={`url(#project-accent-${variant})`} />
        {children}
        <g>
          <rect x="104" y="392" width="292" height="54" rx="17" fill="black" fillOpacity=".28" stroke="white" strokeOpacity=".1" />
          <text x="128" y="416" fill="white" fillOpacity=".58" fontSize="14" fontWeight="700" letterSpacing="2">{item.eyebrow.toUpperCase()}</text>
          <text x="128" y="438" fill="white" fontSize="20" fontWeight="800">{item.label}</text>
        </g>
      </svg>
    </div>
  );
};

const RoninVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="ronin">
    <rect x="118" y="154" width="300" height="178" rx="26" fill="black" fillOpacity=".38" stroke="white" strokeOpacity=".12" />
    <rect x="444" y="154" width="328" height="178" rx="26" fill="white" fillOpacity=".07" stroke="white" strokeOpacity=".12" />
    <path d="M246 178c-48 16-82 62-82 110 0 30 15 44 37 44 37 0 50-56 50-98 0-24-2-40-5-56Z" fill={`url(#project-accent-ronin)`} />
    <path d="M288 178c48 16 82 62 82 110 0 30-15 44-37 44-37 0-50-56-50-98 0-24 2-40 5-56Z" fill={`url(#project-accent-ronin)`} fillOpacity=".82" />
    <circle cx="246" cy="256" r="24" fill="white" fillOpacity=".18" />
    <circle cx="288" cy="256" r="24" fill="white" fillOpacity=".18" />
    <rect x="480" y="188" width="150" height="14" rx="7" fill="white" fillOpacity=".72" />
    <rect x="480" y="218" width="210" height="9" rx="4.5" fill="white" fillOpacity=".24" />
    <rect x="480" y="242" width="178" height="9" rx="4.5" fill="white" fillOpacity=".18" />
    <rect x="480" y="282" width="96" height="28" rx="14" fill={accent.orange} />
    <text x="528" y="301" textAnchor="middle" fill="white" fontSize="12" fontWeight="800">BUY NOW</text>
    <text x="666" y="302" fill={accent.teal} fontSize="24" fontWeight="900">28ms</text>
  </DeviceFrame>
);

const MiskVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="misk">
    <rect x="124" y="154" width="650" height="204" rx="28" fill="black" fillOpacity=".26" stroke="white" strokeOpacity=".12" />
    {[0, 1, 2].map((index) => (
      <g key={index}>
        <rect x={154 + index * 198} y="188" width="160" height="122" rx="18" fill="white" fillOpacity=".08" stroke="white" strokeOpacity=".12" />
        <circle cx={188 + index * 198} cy="220" r="18" fill={index === 1 ? accent.orange : accent.teal} fillOpacity=".78" />
        <rect x={154 + index * 198} y="254" width="112" height="9" rx="4.5" fill="white" fillOpacity=".6" />
        <rect x={154 + index * 198} y="276" width="132" height="7" rx="3.5" fill="white" fillOpacity=".22" />
      </g>
    ))}
    <path d="M240 218c68-70 150-70 218 0s134 70 202 0" fill="none" stroke={`url(#project-accent-misk)`} strokeWidth="5" strokeLinecap="round" strokeDasharray="12 14" />
    <rect x="156" y="334" width="490" height="9" rx="4.5" fill={`url(#project-accent-misk)`} fillOpacity=".75" />
  </DeviceFrame>
);

const ElraceWebVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="elraceWeb">
    <rect x="124" y="154" width="392" height="210" rx="24" fill="white" fillOpacity=".07" stroke="white" strokeOpacity=".12" />
    <rect x="548" y="154" width="222" height="210" rx="24" fill="black" fillOpacity=".3" stroke="white" strokeOpacity=".12" />
    <path d="M166 326h286M206 326V210l88-38 88 38v116M242 326v-72h104v72" fill="none" stroke={`url(#project-accent-elraceWeb)`} strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M166 210h168l82-44M610 326V206M610 206h102M712 206l-30 30" stroke="white" strokeOpacity=".58" strokeWidth="8" strokeLinecap="round" />
    <rect x="580" y="268" width="158" height="12" rx="6" fill="white" fillOpacity=".6" />
    <rect x="580" y="296" width="112" height="9" rx="4.5" fill={accent.orange} fillOpacity=".82" />
  </DeviceFrame>
);

const JewelryVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="jewelry">
    <circle cx="288" cy="248" r="84" fill="none" stroke="#f5c16c" strokeWidth="16" />
    <path d="M246 182l42-42 42 42-42 42Z" fill="#f5c16c" fillOpacity=".92" stroke="white" strokeOpacity=".5" strokeWidth="3" />
    <path d="M246 182h84M268 160l20 64M308 160l-20 64" stroke="white" strokeOpacity=".35" strokeWidth="3" />
    <rect x="454" y="162" width="276" height="182" rx="26" fill="white" fillOpacity=".075" stroke="white" strokeOpacity=".12" />
    <rect x="488" y="196" width="160" height="14" rx="7" fill="white" fillOpacity=".72" />
    <rect x="488" y="230" width="206" height="9" rx="4.5" fill="white" fillOpacity=".24" />
    <rect x="488" y="256" width="176" height="9" rx="4.5" fill="white" fillOpacity=".18" />
    <rect x="488" y="296" width="112" height="28" rx="14" fill={accent.orange} />
    <text x="544" y="315" textAnchor="middle" fill="white" fontSize="12" fontWeight="800">CERTIFIED</text>
  </DeviceFrame>
);

const ElraceAppVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="elraceApp">
    <rect x="176" y="142" width="180" height="244" rx="32" fill="#080808" stroke="white" strokeOpacity=".16" strokeWidth="4" />
    <rect x="194" y="174" width="144" height="178" rx="18" fill="white" fillOpacity=".08" />
    <rect x="216" y="202" width="92" height="10" rx="5" fill="white" fillOpacity=".64" />
    {[0, 1, 2].map((index) => (
      <g key={index}>
        <rect x="216" y={232 + index * 36} width="100" height="18" rx="9" fill={index === 0 ? accent.orange : "white"} fillOpacity={index === 0 ? ".86" : ".16"} />
        <circle cx="232" cy={241 + index * 36} r="4" fill="white" fillOpacity=".88" />
      </g>
    ))}
    <rect x="420" y="164" width="300" height="190" rx="26" fill="white" fillOpacity=".07" stroke="white" strokeOpacity=".12" />
    <path d="M460 306l52-72 76 38 88-84" fill="none" stroke={`url(#project-accent-elraceApp)`} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="512" cy="234" r="12" fill={accent.teal} />
    <circle cx="588" cy="272" r="12" fill={accent.orange} />
    <circle cx="676" cy="188" r="12" fill={accent.teal} />
  </DeviceFrame>
);

const StoryHeroVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="storyHero">
    <path d="M190 168c84-30 148-14 220 32v164c-72-46-136-62-220-32Z" fill="white" fillOpacity=".12" stroke="white" strokeOpacity=".18" />
    <path d="M410 200c72-46 136-62 220-32v164c-84-30-148-14-220 32Z" fill="white" fillOpacity=".08" stroke="white" strokeOpacity=".18" />
    <path d="M410 200v164" stroke={accent.orange} strokeWidth="5" />
    <circle cx="292" cy="248" r="28" fill={accent.orange} fillOpacity=".82" />
    <path d="M292 202l12 28 30 4-22 20 6 30-26-15-26 15 6-30-22-20 30-4Z" fill="#fff4c7" />
    <path d="M514 228c28 0 52 22 52 50s-24 50-52 50-52-22-52-50 24-50 52-50Z" fill={accent.teal} fillOpacity=".62" />
    <path d="M536 252l34-22-10 40 34 22-42 4-16 38-16-38-42-4 34-22-10-40Z" fill="white" fillOpacity=".82" />
  </DeviceFrame>
);

const SmartHairVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="smartHair">
    <rect x="176" y="142" width="188" height="244" rx="34" fill="#080808" stroke="white" strokeOpacity=".16" strokeWidth="4" />
    <rect x="196" y="172" width="148" height="184" rx="20" fill="white" fillOpacity=".08" />
    <circle cx="270" cy="248" r="50" fill={accent.teal} fillOpacity=".2" stroke={accent.teal} strokeWidth="4" />
    <path d="M222 250c22-92 102-92 98 2-18-28-42-36-70-18-12 8-18 10-28 16Z" fill={accent.orange} fillOpacity=".85" />
    <path d="M218 304h104M232 324h78" stroke="white" strokeOpacity=".42" strokeWidth="8" strokeLinecap="round" />
    <rect x="444" y="168" width="274" height="174" rx="26" fill="white" fillOpacity=".07" stroke="white" strokeOpacity=".12" />
    <path d="M486 288c38-92 92-48 120-94 26 70 58 42 72 94" fill="none" stroke={`url(#project-accent-smartHair)`} strokeWidth="8" strokeLinecap="round" />
    <rect x="486" y="220" width="90" height="10" rx="5" fill="white" fillOpacity=".58" />
    <rect x="486" y="244" width="130" height="8" rx="4" fill="white" fillOpacity=".22" />
  </DeviceFrame>
);

const EchoMoodVisual = (props: Omit<ProjectVisualProps, "variant">) => (
  <DeviceFrame {...props} variant="echoMood">
    <rect x="150" y="158" width="274" height="196" rx="28" fill="white" fillOpacity=".08" stroke="white" strokeOpacity=".13" />
    <path d="M188 284c28-74 68 42 96-20s62 32 104-54" fill="none" stroke={`url(#project-accent-echoMood)`} strokeWidth="9" strokeLinecap="round" />
    <rect x="188" y="198" width="144" height="12" rx="6" fill="white" fillOpacity=".66" />
    <rect x="188" y="224" width="184" height="8" rx="4" fill="white" fillOpacity=".22" />
    <rect x="488" y="168" width="236" height="174" rx="30" fill="black" fillOpacity=".28" stroke="white" strokeOpacity=".12" />
    {[0, 1, 2].map((index) => (
      <g key={index}>
        <circle cx={544 + index * 60} cy="234" r="28" fill={index === 1 ? accent.orange : accent.teal} fillOpacity=".76" />
        <path d={`M${530 + index * 60} 246c12 10 24 10 36 0`} stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".8" />
      </g>
    ))}
    <rect x="526" y="294" width="160" height="10" rx="5" fill="white" fillOpacity=".36" />
  </DeviceFrame>
);

export const ProjectVisual = ({ variant, className, title }: ProjectVisualProps) => {
  const props = { className, title };

  switch (variant) {
    case "ronin":
      return <RoninVisual {...props} />;
    case "misk":
      return <MiskVisual {...props} />;
    case "elraceWeb":
      return <ElraceWebVisual {...props} />;
    case "jewelry":
      return <JewelryVisual {...props} />;
    case "elraceApp":
      return <ElraceAppVisual {...props} />;
    case "storyHero":
      return <StoryHeroVisual {...props} />;
    case "smartHair":
      return <SmartHairVisual {...props} />;
    case "echoMood":
      return <EchoMoodVisual {...props} />;
    default:
      return <RoninVisual {...props} />;
  }
};
