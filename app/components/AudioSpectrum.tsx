"use client";

import { useEffect, useRef } from "react";

interface AudioSpectrumProps {
  /** Overall opacity of the drawn bars — keep subtle, 0.6–0.8 range by design. */
  intensity?: number;
  barColor?: string;
  className?: string;
}

/**
 * Ambient, non-interactive waveform used as background texture.
 * Deliberately quiet: low bar count, slow settle, no strobing.
 * Respects prefers-reduced-motion by freezing on the first frame.
 */
export default function AudioSpectrum({
  intensity = 0.7,
  barColor = "232, 163, 61", // signal amber, as an rgb triplet for alpha control
  className = "",
}: AudioSpectrumProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const barCount = 48;
    // Each bar has an independent phase and frequency so the motion
    // reads as organic signal, not a synced pulse.
    const bars = Array.from({ length: barCount }, (_, i) => ({
      phase: (i / barCount) * Math.PI * 2 + Math.random() * 0.6,
      speed: 0.008 + Math.random() * 0.01,
      base: 0.15 + Math.random() * 0.15,
      amp: 0.25 + Math.random() * 0.35,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gap = width / barCount;
      const barWidth = gap * 0.42;

      bars.forEach((bar, i) => {
        const v = bar.base + Math.abs(Math.sin(t * bar.speed + bar.phase)) * bar.amp;
        const barHeight = Math.max(2, v * height);
        const x = i * gap + (gap - barWidth) / 2;
        const y = height - barHeight;

        const alpha = intensity * (0.35 + v * 0.5);
        ctx.fillStyle = `rgba(${barColor}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        const r = Math.min(barWidth / 2, 3);
        ctx.roundRect(x, y, barWidth, barHeight, r);
        ctx.fill();
      });

      t += 1;
      if (!reduceMotion) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [intensity, barColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block h-full w-full ${className}`}
    />
  );
}
