import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface FloatingHeartsProps {
  count?: number;
}

export default function FloatingHearts({ count = 15 }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 10 + 12,
    }));
    setHearts(generatedHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-300 fill-pink-200 opacity-25"
          />
        </div>
      ))}
    </div>
  );
}
