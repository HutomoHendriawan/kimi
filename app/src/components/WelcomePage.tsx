import { useState, useEffect, useRef, useCallback } from 'react';
import { Heart } from 'lucide-react';

interface WelcomePageProps {
  onYes: () => void;
}

export default function WelcomePage({ onYes }: WelcomePageProps) {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.random() * 16 + 12,
    }));
    setHearts(generatedHearts);

    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const moveButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!noButtonRef.current) return;

    const button = noButtonRef.current;
    const rect = button.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(centerX - mouseX, centerY - mouseY);

    // Hanya bergerak kalau cursor benar-benar dekat
    if (distance > 140) return;

    const dx = (centerX - mouseX) / (distance || 1);
    const dy = (centerY - mouseY) / (distance || 1);

    const moveStep = 18 + Math.random() * 16; // kecil dan natural
    const jitterX = (Math.random() - 0.5) * 10;
    const jitterY = (Math.random() - 0.5) * 8;

    const limitX = 90; // batas gerak horizontal
    const limitY = 28; // batas gerak vertikal

    setNoButtonOffset((prev) => {
      let nextX = prev.x + dx * moveStep + jitterX;
      let nextY = prev.y + dy * moveStep + jitterY;

      nextX = Math.max(-limitX, Math.min(limitX, nextX));
      nextY = Math.max(-limitY, Math.min(limitY, nextY));

      return { x: nextX, y: nextY };
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart size={heart.size} className="text-pink-300 fill-pink-200 opacity-50" />
        </div>
      ))}

      <div className={`w-full max-w-lg relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Welcome Image */}
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/Acha1.jpeg" alt="Romantic Welcome" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cantik BGT Gwehh
            </h1>
          </div>
        </div>

        {/* Message Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-8 border border-pink-200/50 mb-8">
          <div className="text-center space-y-4">
            <Heart size={32} className="mx-auto text-pink-500 fill-pink-500 pulse-soft" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 shimmer-text" style={{ fontFamily: "'Playfair Display', serif" }}>
              Will you be my future?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Web ini dibuat dari akhir Maret pas aku pulang ke Sukabumi. Menghabiskan banyak waktu, kopi instan, dan 2 gelas ButterScotch.
              <br />
              Pengennya ngabisin banyak ButterSchotch tapi muahal cok 😭😭😭
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-6 relative min-h-[80px]">
          {/* Yes Button - Stays in place */}
          <button onClick={onYes} className="btn-romantic px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            <img src="/images/Ya.jpeg" alt="Ya" className="w-32 h-auto" />
          </button>

          {/* No Button - Runs away */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveButton}
            onMouseMove={moveButton}
            className="btn-runaway bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg cursor-not-allowed transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${noButtonOffset.x}px, ${noButtonOffset.y}px)`,
              position: 'relative',
            }}
          >
            <img src="/images/GK.jpg" alt="Tidak" className="w-32 h-auto" />
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">Yakin pilih Gk? 😏😏</p>
      </div>
    </div>
  );
}
