import { useState } from "react";
import { PROJECTS } from "../data";
import Modal from "./Modal";

function ProjectCard({ project, isHovered, onEnter, onLeave, onClick }) {
  const isDark = project.text === "#fff";

  return (
    <div
      className="border-4 border-black cursor-pointer transition-all duration-150"
      style={{
        background: isHovered ? project.bg : "#fff",
        transform: isHovered ? "translate(4px,4px)" : "translate(0,0)",
        boxShadow: isHovered ? "none" : "4px 4px 0px 0px #000",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Card header bar */}
      <div
        className="border-b-4 border-black flex items-center justify-between px-4 py-3 transition-colors"
        style={{
          background: isHovered ? "#000" : project.bg,
          color:      isHovered ? project.bg : project.text === "#fff" ? "#000" : project.text,
        }}
      >
        <span className="font-display text-xs tracking-widest">{project.id}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs opacity-70">{project.location}</span>
          <span className="font-mono text-xs opacity-40">·</span>
          <span className="font-mono text-xs opacity-70">{project.year}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 md:p-6">
        <p
          className="font-display text-xs tracking-widest mb-2 uppercase transition-colors"
          style={{
            color: project.bg,
            filter: isHovered ? "none" : "brightness(0.65)",
          }}
        >
          {project.category}
        </p>

        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3 uppercase text-black">
          {project.title}
        </h3>

        <p className="font-mono text-xs md:text-sm leading-relaxed mb-5 text-gray-600">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-black font-display text-xs px-2 py-1 tracking-widest transition-colors"
              style={{
                background: isHovered ? project.bg : "transparent",
                color: "#000",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section id="kode" className="border-b-4 border-black bg-white">
      {/* Section header */}
      <div
        className="border-b-4 border-black px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4"
        style={{ background: "#3B82F6" }}
      >
        <div>
          <span className="font-mono text-xs tracking-widest text-white opacity-70">
            001 / KODE
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase mt-1 text-white">
            PORTOFOLIO
          </h2>
        </div>
        <p className="font-mono text-sm text-white opacity-80 max-w-xs">
          Deretan proyek nyata. Mekanisme koping yang berfungsi di produksi.
        </p>
      </div>

      {/* Project grid — 3 columns on large screen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className="p-4 md:p-6 border-b-4 border-black"
            style={{
              borderRight:
                (i % 3 !== 2) ? "4px solid black" : "none",
            }}
          >
            <ProjectCard
              project={p}
              isHovered={hovered === i}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
              onClick={() => setSelected(p)}
            />
          </div>
        ))}
      </div>

      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
