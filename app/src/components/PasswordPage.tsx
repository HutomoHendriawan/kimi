import { useState, useEffect } from "react";
import { Lock, Heart, Eye, EyeOff } from "lucide-react";
import { CORRECT_PASSWORD } from "@/data/content";

interface PasswordPageProps {
  onCorrect: () => void;
}

export default function PasswordPage({ onCorrect }: PasswordPageProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 20 + 10,
    }));
    setHearts(generatedHearts);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onCorrect();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setError(false);
        setPassword("");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${Math.random() * 8 + 8}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-300 fill-pink-200 opacity-40"
          />
        </div>
      ))}

      <div className={`w-full max-w-md relative z-10 ${shake ? "animate-shake" : ""}`}>
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-pink-200/50">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center glow-effect">
              <Lock size={36} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Selamat Datang
          </h1>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Masukkan kode rahasia untuk melanjutkan
          </p>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Masukkan PIN..."
                className={`w-full px-5 py-4 rounded-2xl password-input text-center text-lg tracking-widest ${
                  error ? "border-red-400 bg-red-50" : ""
                }`}
                maxLength={10}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-center text-sm animate-pulse">
                Kode salah, coba lagi ya ❤️
              </p>
            )}

            <button
              type="submit"
              className="w-full btn-romantic py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2"
            >
              <Heart size={20} className="fill-white" />
              Buka
            </button>
          </form>

          {/* Hint */}
          <p className="text-center text-gray-400 text-xs mt-6">
            💕 Khusus untukmu sayangku 💕
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
