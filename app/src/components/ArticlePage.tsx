import { useState, useEffect } from 'react';
import { Heart, ArrowRight, Feather } from 'lucide-react';
import { articleContent } from '@/data/content';

interface ArticlePageProps {
  onNext: () => void;
}

export default function ArticlePage({ onNext }: ArticlePageProps) {
  const [showContent, setShowContent] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 12 + 8,
    }));
    setHearts(generatedHearts);

    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-8 md:py-12">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${Math.random() * 12 + 14}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart size={heart.size} className="text-pink-300 fill-pink-200 opacity-30" />
        </div>
      ))}

      <div className={`max-w-2xl mx-auto relative z-10 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Article Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl border border-pink-200/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 p-8 text-center relative">
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 6 }).map((_, i) => (
                <Heart
                  key={i}
                  size={24 + i * 4}
                  className="absolute text-white fill-white"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 2) * 40}%`,
                    opacity: 0.3,
                  }}
                />
              ))}
            </div>
            <Feather size={36} className="mx-auto text-white/90 mb-3 relative z-10" />
            <h1 className="text-2xl md:text-3xl font-bold text-white relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              {articleContent.title}
            </h1>
          </div>

          {/* Article Body */}
          <div className="p-6 md:p-10">
            <div className="space-y-6">
              {articleContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed text-sm md:text-base"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Closing */}
            <div className="mt-10 pt-6 border-t border-pink-100 text-center">
              <p className="text-gray-600 italic mb-2">{articleContent.closing}</p>
              <p className="text-xl font-bold text-pink-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                {articleContent.signature}
              </p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center mt-8">
          <button onClick={onNext} className="btn-romantic px-8 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 shadow-lg">
            Cantiknya gak bosenin
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
