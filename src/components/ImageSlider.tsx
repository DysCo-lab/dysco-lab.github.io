import { useEffect, useRef, useState } from "react";
import { sliderSlides } from "../data/labData";

// A simple, understated image carousel — no flashy effects, just fade
// transitions and manual prev/next + dots. Auto-advances every 6 seconds.
export default function ImageSlider() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number | null>(null);
  const n = sliderSlides.length;

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % n);
    }, 6000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [n]);

  const go = (next: number) => {
    setIdx((next + n) % n);
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setIdx((i) => (i + 1) % n);
      }, 6000);
    }
  };

  return (
    <div className="slider">
      <div className="slider-track">
        {sliderSlides.map((s, i) => (
          <div key={i} className={`slider-slide ${i === idx ? "active" : ""}`}>
            <img
              src={s.src}
              alt={s.caption}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
                const fb = el.nextElementSibling as HTMLElement | null;
                if (fb) fb.style.display = "flex";
              }}
            />
            <div className="thumb-fallback" style={{ display: "none" }}>
              {s.caption}
            </div>
            {s.caption && i === idx && (
              <div className="slider-caption">{s.caption}</div>
            )}
          </div>
        ))}
      </div>
      <button
        className="slider-btn prev"
        aria-label="Previous slide"
        onClick={() => go(idx - 1)}
      >
        ‹
      </button>
      <button
        className="slider-btn next"
        aria-label="Next slide"
        onClick={() => go(idx + 1)}
      >
        ›
      </button>
      <div className="slider-dots">
        {sliderSlides.map((_, i) => (
          <button
            key={i}
            className={i === idx ? "active" : ""}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
