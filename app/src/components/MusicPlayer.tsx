import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Square, Volume2, Music } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  url: string;
}

// Default royalty-free romantic songs (using placeholder URLs - replace with actual songs)
const defaultSongs: Song[] = [
  {
    title: 'You Are Gonna Live Forever in Me',
    artist: 'John Mayer',
    url: '/musics/YTDown_YouTube_John-Mayer-You-re-Gonna-Live-Forever-in-_Media_08Ndzf5-HxI_009_128k.mp3',
  },
  {
    title: 'More Than Words',
    artist: 'Extreme',
    url: '/musics/YTDown_YouTube_Extreme-More-Than-Words-Official-Music-V_Media_UrIiLvg58SY_009_128k.mp3',
  },
  {
    title: 'After Midnight',
    artist: 'Blink-182',
    url: '/musics/YTDown_YouTube_Blink-182-After-Midnight-album-audio_Media_HZelaBSSYwc_006_128k.mp3',
  },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMinimized, setIsMinimized] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = defaultSongs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handlePrev = () => {
    const newIndex = currentSongIndex > 0 ? currentSongIndex - 1 : defaultSongs.length - 1;
    setCurrentSongIndex(newIndex);
    setCurrentTime(0);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 100);
  };

  const handleNext = () => {
    const newIndex = currentSongIndex < defaultSongs.length - 1 ? currentSongIndex + 1 : 0;
    setCurrentSongIndex(newIndex);
    setCurrentTime(0);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio ref={audioRef} src={currentSong.url} preload="metadata" />

      {/* Minimized View */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
          title="Open Music Player"
        >
          {isPlaying ? <Music size={20} className="animate-pulse" /> : <Music size={20} />}
        </button>
      ) : (
        /* Expanded Player */
        <div className="fixed bottom-4 right-4 z-50 music-player rounded-2xl shadow-2xl p-4 w-80 border border-pink-200/50">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 flex items-center justify-center">
                <Music size={14} className="text-white" />
              </div>
              <span className="text-xs font-medium text-gray-500">Music Player</span>
            </div>
            <button onClick={() => setIsMinimized(true)} className="text-gray-400 hover:text-gray-600 text-xs transition-colors">
              Minimize
            </button>
          </div>

          {/* Song Info */}
          <div className="text-center mb-3">
            <h4 className="font-semibold text-gray-800 text-sm truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
              {currentSong.title}
            </h4>
            <p className="text-gray-500 text-xs">{currentSong.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                setCurrentTime(newTime);
                if (audioRef.current) {
                  audioRef.current.currentTime = newTime;
                }
              }}
              className="w-full h-1 bg-pink-200 rounded-full appearance-none cursor-pointer accent-pink-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <button onClick={handlePrev} className="w-9 h-9 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-600 transition-colors" title="Previous">
              <SkipBack size={16} />
            </button>

            <button onClick={handleStop} className="w-9 h-9 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-600 transition-colors" title="Stop">
              <Square size={14} />
            </button>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 flex items-center justify-center text-white shadow-lg transition-all hover:scale-105"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>

            <button onClick={handleNext} className="w-9 h-9 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-600 transition-colors" title="Next">
              <SkipForward size={16} />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <Volume2 size={14} className="text-gray-400" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-1 bg-pink-200 rounded-full appearance-none cursor-pointer accent-pink-500"
            />
          </div>

          {/* Song List */}
          <div className="mt-3 pt-3 border-t border-pink-100">
            <p className="text-xs text-gray-400 mb-2">Playlist</p>
            <div className="space-y-1 max-h-24 overflow-y-auto">
              {defaultSongs.map((song, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setCurrentTime(0);
                    setTimeout(() => {
                      if (audioRef.current) {
                        audioRef.current.play().catch(() => {});
                        setIsPlaying(true);
                      }
                    }, 100);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition-colors ${
                    currentSongIndex === index ? 'bg-pink-100 text-pink-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}. {song.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
