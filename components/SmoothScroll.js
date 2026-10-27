"use client";

import { useEffect } from "react";

/**
 * GPU-Accelerated Native Smooth Scroll Provider
 * Uses browser's native C++ compositor thread on the GPU for 120Hz/144Hz wheel scrolling,
 * with hardware-accelerated smooth anchor navigation.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Hardware-accelerated GPU smooth anchor scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
