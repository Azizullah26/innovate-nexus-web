"use client";
import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface TiltCardProps {
  tiltLimit?: number;
  scale?: number;
  perspective?: number;
  effect?: "gravitate" | "evade";
  spotlight?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function TiltCard({
  tiltLimit = 12,
  scale = 1.03,
  perspective = 1200,
  effect = "gravitate",
  spotlight = true,
  className,
  style,
  children,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  );
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const dir = effect === "evade" ? -1 : 1;

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const xRot = (py - 0.5) * (tiltLimit * 2) * dir;
      const yRot = (px - 0.5) * -(tiltLimit * 2) * dir;
      setTransform(
        `perspective(${perspective}px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      if (spotlight) setSpotlightPos({ x: px * 100, y: py * 100 });
    },
    [tiltLimit, scale, perspective, dir, spotlight]
  );

  const handlePointerEnter = useCallback(() => setIsHovered(true), []);
  const handlePointerLeave = useCallback(() => {
    setTransform(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    setIsHovered(false);
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn("relative will-change-transform transition-transform duration-200 ease-out", className)}
      style={{ transform, transformStyle: "preserve-3d", ...style }}
    >
      {children}
      {spotlight && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${spotlightPos.x}% ${spotlightPos.y}%, hsl(21 100% 50% / 0.25), transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}

export default TiltCard;