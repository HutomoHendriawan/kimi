import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import PasswordPage from "@/components/PasswordPage";
import WelcomePage from "@/components/WelcomePage";
import ContentPage from "@/components/ContentPage";
import ArticlePage from "@/components/ArticlePage";
import AlbumPage from "@/components/AlbumPage";
import ThankYouPage from "@/components/ThankYouPage";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingHearts from "@/components/FloatingHearts";

type Page = "password" | "welcome" | "content" | "article" | "album" | "thankyou";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.5,
  ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("password");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordCorrect = useCallback(() => {
    setIsAuthenticated(true);
    setCurrentPage("welcome");
  }, []);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "password":
        return (
          <motion.div
            key="password"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <PasswordPage onCorrect={handlePasswordCorrect} />
          </motion.div>
        );
      case "welcome":
        return (
          <motion.div
            key="welcome"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <WelcomePage onYes={() => navigateTo("content")} />
          </motion.div>
        );
      case "content":
        return (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <ContentPage onNext={() => navigateTo("article")} />
          </motion.div>
        );
      case "article":
        return (
          <motion.div
            key="article"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <ArticlePage onNext={() => navigateTo("album")} />
          </motion.div>
        );
      case "album":
        return (
          <motion.div
            key="album"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <AlbumPage onNext={() => navigateTo("thankyou")} />
          </motion.div>
        );
      case "thankyou":
        return (
          <motion.div
            key="thankyou"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <ThankYouPage />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5EE] via-[#FFE4E1] to-[#E6E6FA] relative">
      {/* Floating hearts background - always visible */}
      <FloatingHearts count={isAuthenticated ? 20 : 0} />

      {/* Page content with transitions */}
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>

      {/* Music Player - only show after authentication */}
      {isAuthenticated && <MusicPlayer />}

      {/* Page indicator - subtle bottom nav */}
      {isAuthenticated && currentPage !== "password" && (
        <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-pink-200/50 flex items-center gap-2">
            <Heart size={14} className="text-pink-400 fill-pink-300" />
            <div className="flex gap-1">
              {(["welcome", "content", "article", "album", "thankyou"] as Page[]).map(
                (page, index) => (
                  <button
                    key={page}
                    onClick={() => {
                      // Only allow navigating to visited pages
                      const pageOrder = ["welcome", "content", "article", "album", "thankyou"];
                      const currentIndex = pageOrder.indexOf(currentPage);
                      const targetIndex = pageOrder.indexOf(page);
                      if (targetIndex <= currentIndex) {
                        navigateTo(page);
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentPage === page
                        ? "bg-pink-500 w-6"
                        : "bg-pink-200 hover:bg-pink-300"
                    }`}
                    title={`Halaman ${index + 2}`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
