"use client";

import { useEffect } from "react";
import HeaderPulse from "@/components/animation/HeaderPulse";

export default function HeaderPulsePage() {
  useEffect(() => {
    // A dark background is more suitable for this animation
    document.body.style.background = "#000";
    // Cleanup function to reset the background when the component unmounts
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return <HeaderPulse />;
}
