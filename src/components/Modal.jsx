import { useEffect, useState, useRef } from "react";
import { getProjectScreenshots } from "../data/screenshots";

function ImageViewer({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0 });

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.5, 0.25));
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.25 : 0.25;
    setScale((s) => Math.max(0.25, Math.min(s + delta, 5)));
  };

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
  };

  const handleTouchStart = (e) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    const t = e.touches[0];
    setIsDragging(true);
    dragRef.current = {
      startX: t.clientX - position.x,
      startY: t.clientY - position.y,
    };
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMove = (e) => {
      setPosition({
        x: e.clientX - dragRef.current.startX,
        y: e.clientY - dragRef.current.startY,
      });
    };
    const handleTouchMove = (e) => {
      if (e.touches.length !== 1) return;
      setPosition({
        x: e.touches[0].clientX - dragRef.current.startX,
        y: e.touches[0].clientY - dragRef.current.startY,
      });
    };
    const handleUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 select-none"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] transition-transform duration-100"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          cursor:
            scale > 1
              ? isDragging
                ? "grabbing"
                : "grab"
              : "default",
        }}
        draggable={false}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
        onClick={(e) => e.stopPropagation()}
      />
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 rounded-full z-10"
        style={{ background: "rgba(0,0,0,0.75)", border: "2px solid white" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={zoomOut}
          className="w-8 h-8 flex items-center justify-center text-white font-bold text-lg hover:bg-white/20 rounded-full"
        >
          −
        </button>
        <span className="text-white font-mono text-sm w-12 text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          className="w-8 h-8 flex items-center justify-center text-white font-bold text-lg hover:bg-white/20 rounded-full"
        >
          +
        </button>
        <span className="w-px h-6 bg-white/30" />
        <button
          onClick={resetView}
          className="w-8 h-8 flex items-center justify-center text-white text-sm hover:bg-white/20 rounded-full"
        >
          ↺
        </button>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center text-white font-bold text-lg hover:bg-white/20 rounded-full"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default function Modal({ project, onClose }) {
  const [viewer, setViewer] = useState(null);
  const images = project.screenshot
    ? getProjectScreenshots(project.screenshot)
    : [];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (viewer) {
          setViewer(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, viewer]);

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
          style={{
            border: "4px solid " + "black",
            boxShadow: "8px 8px 0px 0px " + "black",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-10 w-9 h-9 flex items-center justify-center font-mono text-sm font-bold transition-colors"
            style={{
              border: "3px solid black",
              background: project.bg,
              color: project.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = project.text;
              e.currentTarget.style.color = project.bg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = project.bg;
              e.currentTarget.style.color = project.text;
            }}
            aria-label="Tutup"
          >
            X
          </button>

          <div
            className="p-4 overflow-y-auto flex-1"
            style={{ borderBottom: "4px solid " + "black", background: project.bg }}
          >
            {images.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className="max-w-[calc(50%-0.5rem)] max-h-[65vh] w-auto h-auto self-start cursor-pointer"
                    style={{ border: "3px solid " + "black" }}
                    loading="lazy"
                    onClick={() =>
                      setViewer({ src, alt: `${project.title} ${i + 1}` })
                    }
                  />
                ))}
              </div>
            ) : (
              <div
                className="w-full flex items-center justify-center font-display text-2xl md:text-4xl uppercase text-center p-10 select-none"
                style={{
                  aspectRatio: "16 / 10",
                  background: project.bg,
                  color: project.text,
                }}
              >
                {project.title}
              </div>
            )}
          </div>

          <div
            className="px-5 py-3 flex items-center justify-between shrink-0"
            style={{ background: "black", color: "white" }}
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-sm">{project.id}</span>
              <span className="font-mono text-xs opacity-70">|</span>
              <span className="font-mono text-xs opacity-70">{project.category}</span>
            </div>
            <span className="font-display text-sm tracking-wider">{project.title}</span>
          </div>
        </div>
      </div>
      {viewer && (
        <ImageViewer
          src={viewer.src}
          alt={viewer.alt}
          onClose={() => setViewer(null)}
        />
      )}
    </>
  );
}
