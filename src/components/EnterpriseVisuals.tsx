import { cn } from "@/lib/utils";

type VisualProps = {
  className?: string;
  title?: string;
};

const gridLines = "stroke-white/10";
const orange = "hsl(var(--primary))";
const teal = "hsl(var(--secondary))";

export const EnterpriseDashboardMockup = ({ className, title = "Enterprise AI operations dashboard" }: VisualProps) => (
  <svg
    viewBox="0 0 720 480"
    role="img"
    aria-label={title}
    className={cn("w-full h-auto", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="dashShell" x1="80" x2="640" y1="40" y2="430" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(var(--foreground))" />
        <stop offset="1" stopColor="#151515" />
      </linearGradient>
      <linearGradient id="dashAccent" x1="118" x2="600" y1="96" y2="356" gradientUnits="userSpaceOnUse">
        <stop stopColor={orange} />
        <stop offset="1" stopColor={teal} />
      </linearGradient>
      <filter id="dashGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="16" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1 0 0.42 0 0 0.26 0 0 0.21 0 0.3 0 0 0 1 0" />
        <feBlend in="SourceGraphic" />
      </filter>
    </defs>
    <rect x="36" y="34" width="648" height="412" rx="24" fill="url(#dashShell)" />
    <rect x="54" y="54" width="612" height="374" rx="18" fill="white" fillOpacity=".04" stroke="white" strokeOpacity=".1" />
    <path d="M82 96h556" stroke="white" strokeOpacity=".1" />
    <circle cx="92" cy="76" r="6" fill={orange} />
    <circle cx="114" cy="76" r="6" fill={teal} />
    <circle cx="136" cy="76" r="6" fill="white" fillOpacity=".24" />

    <rect x="82" y="122" width="146" height="268" rx="16" fill="white" fillOpacity=".06" stroke="white" strokeOpacity=".1" />
    {["Strategy", "Agents", "Pipelines", "Insights"].map((label, index) => (
      <g key={label}>
        <rect x="104" y={152 + index * 48} width="84" height="9" rx="4.5" fill="white" fillOpacity={index === 1 ? ".86" : ".38"} />
        <rect x="104" y={168 + index * 48} width="56" height="6" rx="3" fill={index === 1 ? orange : "white"} fillOpacity={index === 1 ? ".9" : ".2"} />
        <circle cx="204" cy={162 + index * 48} r="9" fill={index === 1 ? orange : "white"} fillOpacity={index === 1 ? ".2" : ".08"} />
      </g>
    ))}

    <rect x="252" y="122" width="386" height="128" rx="18" fill="white" fillOpacity=".06" stroke="white" strokeOpacity=".1" />
    <path d="M286 210c48-78 82-34 118-68 38-37 66-16 104 18 32 28 56 18 96-54" fill="none" stroke="url(#dashAccent)" strokeWidth="8" strokeLinecap="round" filter="url(#dashGlow)" />
    <path d="M286 210c48-78 82-34 118-68 38-37 66-16 104 18 32 28 56 18 96-54" fill="none" stroke="white" strokeOpacity=".25" strokeWidth="2" strokeLinecap="round" />
    <g className={gridLines}>
      <path d="M286 150h318M286 184h318M286 218h318" />
      <path d="M326 142v82M410 142v82M494 142v82M578 142v82" />
    </g>

    <rect x="252" y="274" width="178" height="116" rx="18" fill="white" fillOpacity=".06" stroke="white" strokeOpacity=".1" />
    <circle cx="312" cy="332" r="38" fill="none" stroke="white" strokeOpacity=".1" strokeWidth="13" />
    <path d="M312 294a38 38 0 0 1 31 60" fill="none" stroke={orange} strokeWidth="13" strokeLinecap="round" />
    <path d="M312 294a38 38 0 0 0-34 21" fill="none" stroke={teal} strokeWidth="13" strokeLinecap="round" />
    <rect x="366" y="310" width="38" height="8" rx="4" fill="white" fillOpacity=".7" />
    <rect x="366" y="330" width="48" height="6" rx="3" fill="white" fillOpacity=".22" />
    <rect x="366" y="346" width="30" height="6" rx="3" fill="white" fillOpacity=".16" />

    <rect x="456" y="274" width="182" height="116" rx="18" fill="white" fillOpacity=".06" stroke="white" strokeOpacity=".1" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x={486 + i * 34} y={342 - i * 14} width="18" height={32 + i * 14} rx="6" fill={i % 2 ? teal : orange} fillOpacity=".75" />
        <rect x={486 + i * 34} y="360" width="18" height="12" rx="6" fill="white" fillOpacity=".14" />
      </g>
    ))}
    <rect x="486" y="304" width="84" height="9" rx="4.5" fill="white" fillOpacity=".7" />
    <rect x="486" y="322" width="114" height="6" rx="3" fill="white" fillOpacity=".18" />
  </svg>
);

export const ServiceFlowIllustration = ({ className, title = "AI solution delivery workflow" }: VisualProps) => (
  <svg
    viewBox="0 0 560 280"
    role="img"
    aria-label={title}
    className={cn("w-full h-auto", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="flowAccent" x1="40" x2="520" y1="40" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor={orange} />
        <stop offset="1" stopColor={teal} />
      </linearGradient>
    </defs>
    <rect x="18" y="20" width="524" height="240" rx="24" fill="hsl(var(--foreground))" />
    <rect x="34" y="36" width="492" height="208" rx="18" fill="white" fillOpacity=".04" stroke="white" strokeOpacity=".1" />
    <path d="M98 140h86M238 140h86M378 140h86" stroke="url(#flowAccent)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 10" />
    {[
      ["01", "Discover", 90],
      ["02", "Design", 230],
      ["03", "Build", 370],
      ["04", "Scale", 510],
    ].map(([num, label, x]) => (
      <g key={num}>
        <circle cx={Number(x)} cy="140" r="38" fill="white" fillOpacity=".07" stroke="url(#flowAccent)" strokeWidth="2" />
        <circle cx={Number(x)} cy="140" r="25" fill="url(#flowAccent)" fillOpacity=".18" />
        <text x={Number(x)} y="136" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">{num}</text>
        <text x={Number(x)} y="158" textAnchor="middle" fill="white" fillOpacity=".72" fontSize="12" fontWeight="600">{label}</text>
      </g>
    ))}
    <rect x="62" y="70" width="126" height="10" rx="5" fill="white" fillOpacity=".24" />
    <rect x="62" y="90" width="82" height="7" rx="3.5" fill={orange} fillOpacity=".8" />
    <rect x="372" y="190" width="112" height="9" rx="4.5" fill="white" fillOpacity=".24" />
    <rect x="414" y="208" width="70" height="7" rx="3.5" fill={teal} fillOpacity=".8" />
  </svg>
);

export const MiniServiceGraphic = ({ className, title = "Service technology graphic" }: VisualProps) => (
  <svg
    viewBox="0 0 320 140"
    role="img"
    aria-label={title}
    className={cn("w-full h-auto", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="miniAccent" x1="40" x2="280" y1="20" y2="126" gradientUnits="userSpaceOnUse">
        <stop stopColor={orange} />
        <stop offset="1" stopColor={teal} />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="304" height="124" rx="18" fill="hsl(var(--muted))" />
    <path d="M42 96c34-52 62-22 88-44 31-26 56-3 80 20 21 20 39 14 68-34" fill="none" stroke="url(#miniAccent)" strokeWidth="7" strokeLinecap="round" />
    <circle cx="76" cy="74" r="22" fill={orange} fillOpacity=".16" />
    <circle cx="234" cy="66" r="30" fill={teal} fillOpacity=".16" />
    <rect x="42" y="30" width="70" height="8" rx="4" fill="hsl(var(--foreground))" fillOpacity=".7" />
    <rect x="42" y="46" width="48" height="6" rx="3" fill="hsl(var(--foreground))" fillOpacity=".22" />
    <rect x="214" y="94" width="62" height="7" rx="3.5" fill="hsl(var(--foreground))" fillOpacity=".26" />
    <rect x="232" y="108" width="44" height="6" rx="3" fill={orange} fillOpacity=".75" />
  </svg>
);

export const BeforeAfterComparison = ({ className, title = "Before and after digital transformation comparison" }: VisualProps) => (
  <svg
    viewBox="0 0 640 300"
    role="img"
    aria-label={title}
    className={cn("w-full h-auto", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="baAccent" x1="70" x2="570" y1="42" y2="260" gradientUnits="userSpaceOnUse">
        <stop stopColor={orange} />
        <stop offset="1" stopColor={teal} />
      </linearGradient>
    </defs>
    <rect x="24" y="26" width="592" height="248" rx="24" fill="hsl(var(--foreground))" />
    <rect x="54" y="72" width="238" height="160" rx="18" fill="white" fillOpacity=".06" stroke="white" strokeOpacity=".12" />
    <rect x="348" y="72" width="238" height="160" rx="18" fill="white" fillOpacity=".06" stroke="url(#baAccent)" strokeOpacity=".8" />
    <text x="72" y="54" fill="white" fillOpacity=".56" fontSize="14" fontWeight="700">Before</text>
    <text x="366" y="54" fill="white" fontSize="14" fontWeight="800">After</text>
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x="78" y={100 + i * 28} width={154 - i * 18} height="9" rx="4.5" fill="white" fillOpacity=".18" />
        <circle cx="254" cy={104 + i * 28} r="5" fill="white" fillOpacity=".16" />
      </g>
    ))}
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x="374" y={100 + i * 28} width={132 + i * 12} height="9" rx="4.5" fill="url(#baAccent)" fillOpacity={i === 0 ? ".95" : ".55"} />
        <circle cx="544" cy={104 + i * 28} r="5" fill={teal} />
      </g>
    ))}
    <path d="M306 150h28" stroke="url(#baAccent)" strokeWidth="4" strokeLinecap="round" />
    <path d="M326 140l10 10-10 10" fill="none" stroke="url(#baAccent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PartnerLogoCloud = ({ className }: { className?: string }) => {
  const logos = ["NOVA", "GOV AE", "ORBIT", "PULSE", "CLOUD9", "MENA AI"];

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", className)} aria-label="Partner and client placeholder logos">
      {logos.map((logo) => (
        <div
          key={logo}
          className="h-14 rounded-lg border border-border/70 bg-card flex items-center justify-center text-xs font-extrabold tracking-[0.22em] text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
        >
          {logo}
        </div>
      ))}
    </div>
  );
};
