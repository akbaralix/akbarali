import React from "react";
import { useLocation } from "react-router-dom"; // 1. useLocation-ni import qilamiz
import { useAudio } from "../components/AudioContext";
import { FaXmark } from "react-icons/fa6";
import "./GlobalPlayer.css";

const GlobalPlayer = () => {
  const location = useLocation(); // 2. Hozirgi sahifa manzilini olamiz
  const {
    isPlaying,
    progress,
    currentTrack,
    trackTitle,
    playTrack,
    stopTrack,
    handleProgressChange,
  } = useAudio();

  // 3. Agar foydalanuvchi "/about" sahifasida bo'lsa yoki trek yoqilmagan bo'lsa, GlobalPlayer-ni ko'rsatmaymiz
  if (location.pathname === "/haqimda" || !currentTrack) {
    return null;
  }

  return (
    <div className={`global-player-bar ${currentTrack ? "active" : ""}`}>
      <button
        className="play-btn"
        onClick={() => playTrack(currentTrack, trackTitle)}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="track-details">
        <span className="track-name">{trackTitle}</span>
        <input
          type="range"
          className="progress-bar"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => handleProgressChange(e.target.value)}
          style={{ "--progress": `${progress}%` }}
        />
      </div>
      <button onClick={stopTrack} className="close-music">
        <FaXmark />
      </button>
    </div>
  );
};

export default GlobalPlayer;
