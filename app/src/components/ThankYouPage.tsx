import { useState, useEffect } from 'react';
import { Heart, Send, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data/content';

export default function ThankYouPage() {
  const [showContent, setShowContent] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.random() * 16 + 12,
    }));
    setHearts(generatedHearts);

    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    const message = `Halo! Ada pesan untukmu dari Pasanganmu yang manis:%0A%0A"${feedback}"%0A%0ADengan cinta ❤️`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Floating hearts */}
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
          <Heart size={heart.size} className="text-pink-300 fill-pink-200 opacity-40" />
        </div>
      ))}

      <div className={`w-full max-w-lg relative z-10 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Thank You Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-200/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <Heart
                  key={i}
                  size={20 + (i % 3) * 8}
                  className="absolute text-white fill-white animate-pulse"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + (i % 2) * 50}%`,
                    opacity: 0.25,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
              <Heart size={40} className="text-white fill-white pulse-soft" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Makasih
            </h1>
            <p className="text-white/80 text-sm mt-2 relative z-10">Udah membaca hal yang kubuat untuk kamu</p>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Selamat ulang tahun Shahnaz Nurfatima Ismaila a.k.a Sayangku. Semoga menjadi pribadi yang lebih baik, lebih dewasa, selain karirnya yang berkembang, dirinya juga ikut berkembang.
                Semoga banyak duitnya, makin jago ngelola duit, ngehasilin duit lebih banyak, dan bermanfaat buat orang. Kenapa aku do'ain aku sendiri??? Karena ada cewe cantik yang bilang ke aku
                kalau aku kaya, dia bakal seneng
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={16} className="text-pink-400 fill-pink-400" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>

            {/* Feedback Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle size={20} className="text-pink-500" />
                  <h3 className="font-semibold text-gray-700 text-sm">Feedbacknya dong</h3>
                </div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Aku bikin ini luamaaa. Masa jawabnya 'makasih' doang -_- just tell me everything... I'm all ears"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none resize-none text-sm text-gray-700 bg-pink-50/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!feedback.trim()}
                  className="w-full btn-romantic py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  Feedback kamu bakal otomatis kesend wa ku 😉
                </button>
              </form>
            ) : (
              <div className="text-center py-6 bg-pink-50 rounded-2xl">
                <Heart size={32} className="mx-auto text-pink-500 fill-pink-500 mb-2" />
                <p className="text-gray-700 font-medium">Feedback kamu udah terkirim!</p>
                <p className="text-gray-500 text-sm mt-1">Makasih ya Sayang.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">Dibuat dengan ❤️ khusus untukmu</p>
      </div>
    </div>
  );
}
