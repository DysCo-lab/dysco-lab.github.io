type Props = {
  images?: string[];
  size?: number;
};

export default function ImageGrid({ images = [], size = 180 }: Props) {
  if (images.length === 0) return null;
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {images.slice(0, 4).map((img, i) => (
        <img
          key={i}
          src={`images/projects/${img}`}
          alt={`gallery-${i}`}
          style={{ width: size, height: size, objectFit: "cover" }}
        />
      ))}
    </div>
  );
}
