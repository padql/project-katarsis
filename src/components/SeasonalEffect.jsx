import { FallingLeaves } from "falling-leaves/react";
import { useSeason } from "../hooks/useSeason";
import Particles from "./Particles";

// Autumn leaves and spring petals both use the falling-leaves engine.
const LEAVES = {
  autumn: {
    count: 32,
    shapes: ["maple", "oak", "birch", "ginkgo"],
    colors: ["#C2410C", "#EA580C", "#B45309", "#CA8A04", "#9A3412"],
    size: [16, 34],
    speed: [0.7, 1.6],
    wind: [-0.4, 0.9],
    sway: [0.5, 1.6],
  },
  spring: {
    count: 26,
    shapes: ["oval"],
    colors: ["#FBCFE8", "#F9A8D4", "#F472B6", "#FDE68A"],
    size: [8, 16],
    speed: [0.4, 1.1],
    wind: [-0.6, 0.8],
    sway: [1, 2.2],
    opacity: 0.9,
  },
};

const SNOW = {
  count: 110,
  size: [1.4, 3.4],
  speed: [0.5, 1.3],
  drift: [0.15, 0.55],
  sway: [0.2, 0.9],
  color: "148,163,184",
  opacity: [0.3, 0.7],
};

const POLLEN = {
  count: 45,
  size: [0.8, 2.2],
  speed: [0.2, 0.6],
  drift: [0.3, 0.9],
  sway: [0.4, 1.2],
  color: "161,120,40",
  opacity: [0.18, 0.4],
};

export default function SeasonalEffect() {
  const season = useSeason();

  if (season === "winter") return <Particles key="winter" {...SNOW} />;
  if (season === "summer") return <Particles key="summer" {...POLLEN} />;

  const preset = LEAVES[season];
  if (!preset) return null;

  return <FallingLeaves key={season} fullScreen {...preset} />;
}
