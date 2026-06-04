import { useRef, useState } from "react";

export default function Magnet({
  children
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const strength = 3;
  const padding = 150;

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setStyle({
      transform: `translate3d(${x / strength}px,${y / strength}px,0)`,
      transition: "transform 0.3s ease-out",
      willChange: "transform"
    });
  };

  const leave = () => {
    setStyle({
      transform: "translate3d(0,0,0)",
      transition: "transform 0.6s ease-in-out"
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      style={style}
    >
      {children}
    </div>
  );
}
