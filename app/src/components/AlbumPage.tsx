import { useState, useEffect } from "react";
import { Heart, ArrowRight, X, Grid3X3, ImageIcon } from "lucide-react";
import { albumPhotos, albumCategories } from "@/data/content";

interface AlbumPageProps {
  onNext: () => void;
}

export default function AlbumPage({ onNext }: AlbumPageProps) {
  const [showContent, setShowContent] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof albumPhotos)[0] | null>(null);
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

  const filteredPhotos =
    activeCategory === "Semua"
      ? albumPhotos
      : albumPhotos.filter((photo) => photo.category === activeCategory);

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
        <div className="text-center mb-8">
          <ImageIcon size={28} className="mx-auto text-pink-500 mb-3 pulse-soft" />
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 shimmer-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Album Kenangan
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Koleksi momen-momen indah yang kita abadikan bersama.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {albumCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-600 hover:bg-pink-50 hover:text-pink-500 border border-pink-200/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="card-romantic bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg group relative aspect-square w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {photo.title}
                </h3>
                <span className="text-white/70 text-xs">{photo.category}</span>
              </div>
              {/* Grid icon overlay */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Grid3X3 size={14} className="text-gray-600" />
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

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            <div className="p-5 text-center">
              <h3
                className="text-xl font-bold text-gray-800 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedPhoto.title}
              </h3>
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">
                {selectedPhoto.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
