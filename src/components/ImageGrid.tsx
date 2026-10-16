import { useState } from "react";

type Props = {
  images?: string[];
  size?: number;
  gap?: number;
};

export default function ImageGrid({ images = [], size = 180, gap = 12 }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div style={{ display: "flex", gap, flexWrap: "wrap" }}>
        {images.slice(0, 4).map((img, i) => (
          <img
            key={i}
            src={`images/projects/${img}`}
            alt={`gallery-${i}`}
            onClick={() => setSelectedIndex(i)}
            style={{
              width: size,
              height: size,
              objectFit: "cover",
              borderRadius: 6,
              cursor: "pointer",
              display: "block",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
            }}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(12, 16, 20, 0.72)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 2000,
          }}
        >
          <img
            src={`images/projects/${images[selectedIndex]}`}
            alt={`expanded-gallery-${selectedIndex}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 18px 36px rgba(0,0,0,0.25)",
              background: "#fff",
            }}
          />
        </div>
      )}
    </>
  );
}
