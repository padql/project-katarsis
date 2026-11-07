import { useEffect, useState } from "react";

/**
 * Month → season mapping (Northern Hemisphere convention).
 * Adjust these ranges if you want your own calendar.
 */
const SEASON_BY_MONTH = [
  "winter", // Jan
  "winter", // Feb
  "spring", // Mar
  "spring", // Apr
  "spring", // May
  "summer", // Jun
  "summer", // Jul
  "summer", // Aug
  "autumn", // Sep
  "autumn", // Oct
  "autumn", // Nov
  "winter", // Dec
];

export const SEASONS = ["spring", "summer", "autumn", "winter"];

export function seasonFor(date = new Date()) {
  return SEASON_BY_MONTH[date.getMonth()];
}

/** `?season=winter` forces a season for previewing, no rebuild needed. */
function seasonOverride() {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("season");
  return SEASONS.includes(value) ? value : null;
}

/**
 * Current season in the visitor's local time zone.
 * Re-checks at local midnight (and when the tab becomes visible again),
 * so the effect switches on its own without a new deploy.
 */
export function useSeason() {
  const [season, setSeason] = useState(() => seasonOverride() ?? seasonFor());

  useEffect(() => {
    if (seasonOverride()) return;

    let timer;

    const scheduleMidnight = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      timer = setTimeout(() => {
        setSeason(seasonFor());
        scheduleMidnight();
      }, midnight.getTime() - now.getTime());
    };

    const sync = () => {
      if (!document.hidden) setSeason(seasonFor());
    };

    scheduleMidnight();
    document.addEventListener("visibilitychange", sync);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return season;
}
