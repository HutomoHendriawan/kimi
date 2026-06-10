import { useState, useEffect } from "react";
import { Heart, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { contentItems, type ContentItem } from "@/data/content";

interface ContentPageProps {
  onNext: () => void;
}

export default function ContentPage({ onNext }: ContentPageProps) {
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 14 + 10,
    }));
    setHearts(generatedHearts);

    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = contentItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : contentItems.length - 1;
    setSelectedItem(contentItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = contentItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = currentIndex < contentItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedItem(contentItems[nextIndex]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-8 md:py-12">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${Math.random() * 10 + 12}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart size={heart.size} className="text-pink-300 fill-pink-200 opacity-30" />
        </div>
      ))}

      <div
        className={`max-w-5xl mx-auto relative z-10 transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <Heart size={28} className="mx-auto text-pink-500 fill-pink-400 mb-3 pulse-soft" />
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 shimmer-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kenangan Indah Kita
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Setiap momen bersamamu adalah harta yang tak ternilai. Klik untuk melihat cerita lengkapnya.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="card-romantic bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg text-left group w-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3
                  className="font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={onNext}
            className="btn-romantic px-8 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            Lanjutkan
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-56 md:h-64">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2
                className="text-2xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedItem.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {selectedItem.fullDescription}
              </p>
            </div>

            {/* Navigation */}
            <div className="px-6 pb-6 flex justify-between items-center">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 text-pink-500 hover:text-pink-700 transition-colors text-sm font-medium"
              >
                <ChevronLeft size={18} />
                Sebelumnya
              </button>
              <span className="text-gray-400 text-xs">
                {contentItems.findIndex((i) => i.id === selectedItem.id) + 1} / {contentItems.length}
              </span>
              <button
                onClick={handleNext}
                className="flex items-center gap-1 text-pink-500 hover:text-pink-700 transition-colors text-sm font-medium"
              >
                Selanjutnya
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
