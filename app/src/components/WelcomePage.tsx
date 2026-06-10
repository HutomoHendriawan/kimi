import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
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
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null);
  const lastMoveRef = useRef(0);

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

  useLayoutEffect(() => {
    const placeInitialPosition = () => {
      const yes = yesButtonRef.current?.getBoundingClientRect();
      const no = noButtonRef.current?.getBoundingClientRect();
      if (!yes || !no) return;

      const margin = 12;
      const gap = 18;

      const maxX = window.innerWidth - no.width - margin;
      const maxY = window.innerHeight - no.height - margin;

      let x = yes.right + gap;
      let y = yes.top + (yes.height - no.height) / 2;

      if (x > maxX) {
        x = Math.max(margin, yes.left - gap - no.width);
      }

      if (y < margin) y = margin;
      if (y > maxY) y = maxY;

      setNoButtonPos({ x, y });
    };

    requestAnimationFrame(placeInitialPosition);
    window.addEventListener('resize', placeInitialPosition);

    return () => window.removeEventListener('resize', placeInitialPosition);
  }, []);

  const moveButton = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const button = noButtonRef.current;
      const yes = yesButtonRef.current;
      if (!button || !yes || !noButtonPos) return;

      const now = Date.now();
      if (now - lastMoveRef.current < 180) return;

      const rect = button.getBoundingClientRect();
      const yesRect = yes.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceToCursor = Math.hypot(centerX - mouseX, centerY - mouseY);

      // Hanya bergerak kalau cursor memang dekat
      if (distanceToCursor > 140) return;

      const margin = 12;
      const maxX = window.innerWidth - rect.width - margin;
      const maxY = window.innerHeight - rect.height - margin;

      const isOverlappingYes = (x: number, y: number) => {
        const pad = 18;
        return !(x + rect.width < yesRect.left - pad || x > yesRect.right + pad || y + rect.height < yesRect.top - pad || y > yesRect.bottom + pad);
      };

      let bestX = noButtonPos.x;
      let bestY = noButtonPos.y;
      let bestScore = -Infinity;

      for (let i = 0; i < 12; i++) {
        const baseAngle = Math.atan2(centerY - mouseY, centerX - mouseX);
        const angle = baseAngle + (Math.random() - 0.5) * 1.2;
        const step = 90 + Math.random() * 70;

        const candidateX = Math.max(margin, Math.min(noButtonPos.x + Math.cos(angle) * step, maxX));
        const candidateY = Math.max(margin, Math.min(noButtonPos.y + Math.sin(angle) * step, maxY));

        if (isOverlappingYes(candidateX, candidateY)) continue;

        const awayFromCursor = Math.hypot(candidateX + rect.width / 2 - mouseX, candidateY + rect.height / 2 - mouseY);

        const edgeRoom = Math.min(candidateX - margin, candidateY - margin, maxX - candidateX, maxY - candidateY);

        const score = awayFromCursor + edgeRoom;

        if (score > bestScore) {
          bestScore = score;
          bestX = candidateX;
          bestY = candidateY;
        }
      }

      // Fallback kalau semua kandidat bentrok dengan tombol Ya
      if (bestScore === -Infinity) {
        const pushRight = noButtonPos.x < window.innerWidth / 2 ? 1 : -1;
        const pushDown = noButtonPos.y < window.innerHeight / 2 ? 1 : -1;

        bestX = Math.max(margin, Math.min(noButtonPos.x + pushRight * 110, maxX));
        bestY = Math.max(margin, Math.min(noButtonPos.y + pushDown * 60, maxY));

        if (isOverlappingYes(bestX, bestY)) {
          bestX = Math.max(margin, Math.min(yesRect.right + 24, maxX));
          bestY = Math.max(margin, Math.min(yesRect.bottom + 24, maxY));
        }
      }

      lastMoveRef.current = now;
      setNoButtonPos({ x: bestX, y: bestY });
    },
    [noButtonPos]
  );

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
          <button
            ref={yesButtonRef}
            onClick={onYes}
            className="btn-romantic px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <img src="/images/Ya.jpeg" alt="Ya" className="w-32 h-auto" />
          </button>

          {/* No Button - Runs away */}
          <button
            ref={noButtonRef}
            onMouseMove={moveButton}
            className="btn-runaway bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg cursor-not-allowed transition-[left,top] duration-300 ease-out"
            style={
              noButtonPos
                ? {
                    position: 'fixed',
                    left: `${noButtonPos.x}px`,
                    top: `${noButtonPos.y}px`,
                    zIndex: 50,
                  }
                : {
                    position: 'relative',
                  }
            }
          >
            <img src="/images/GK.jpg" alt="Tidak" className="w-32 h-auto" />
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">Yakin pilih Gk? 😏😏</p>
      </div>
    </div>
  );
}
