"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import { AppBackground } from "@/components/AppBackground";

export default function Home() {
  const context = useContext(AppContext);

  // Safety check dla TypeScripta
  if (!context) return null;

  const { showAsideContact } = context;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Tło z cząsteczkami */}
      <AppBackground />
    </main>
  );
}