import React, { useRef, useState } from "react";
import "./CustomAudio.css";

const CustomAudio = ({ sound }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="custom-audio-card">
      <audio
        ref={audioRef}
        src={sound}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="track-info">
        <input
          type="range"
          className="progress-bar"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          /* CSS-ga joriy foizni uzatamiz */
          style={{ "--progress": `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CustomAudio;
