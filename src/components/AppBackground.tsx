"use client";
import { useEffect, useState, useMemo, memo, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { AppContext } from "@/context/AppContext";

export const AppBackground = memo(() => {
  const [init, setInit] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fpsLimit: 120,
    particles: {
      color: { value: "var(--font-secondary)" },
      links: {
        color: "var(--font-secondary)",
        distance: 120,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 0.3 },
      number: { value: 160, density: { enable: true } },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), [context?.selectedColor]); // Re-renderuj przy zmianie koloru

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
});

AppBackground.displayName = "AppBackground";