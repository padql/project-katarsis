const all = import.meta.glob("/src/assets/screenshots/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getProjectScreenshots(slug) {
  return Object.entries(all)
    .filter(([path]) => {
      const name = path.split("/").pop().toLowerCase();
      return name.startsWith(slug.toLowerCase());
    })
    .map(([, url]) => url);
}
