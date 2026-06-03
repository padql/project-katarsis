import { useState, useEffect } from "react";

/**
 * Tracks which section id is currently in the viewport.
 * @param {string[]} sectionIds
 * @param {number} threshold  - IntersectionObserver threshold (0–1)
 */
export function useActiveSection(sectionIds, threshold = 0.3) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return active;
}
