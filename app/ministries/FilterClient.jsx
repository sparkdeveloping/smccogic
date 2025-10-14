"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FilterClient({ categories }) {
  const [active, setActive] = useState("All");

  // Filter cards by toggling the "hidden" attribute (simple + a11y-friendly)
  useEffect(() => {
    const grid = document.getElementById("ministries-grid");
    if (!grid) return;
    const cards = Array.from(grid.children);
    cards.forEach((el) => {
      const cat = el.getAttribute("data-category");
      const show = active === "All" || cat === active;
      if (show) el.removeAttribute("hidden");
      else el.setAttribute("hidden", "");
    });
  }, [active]);

  const tabs = useMemo(() => categories, [categories]);

  return (
    <div
      role="tablist"
      aria-label="Filter ministries by category"
      className="flex flex-wrap gap-2"
    >
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <motion.button
            key={tab}
            role="tab"
            aria-selected={isActive}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`btn ${
              isActive
                ? "btn-primary text-white"
                : "bg-white border border-[var(--border-200)]"
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </motion.button>
        );
      })}
    </div>
  );
}
