"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MusicModal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-background/20 border border-accent/30 backdrop-blur-[6px]
      py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8"
      >
        <p className="font-light">Do you like to play the background music?</p>
        <div className="flex items-center justify-center space-x-2 xs:space-x-4 lg:space-x-5">
          <button
            className="px-2 cursor-pointer py-2 border border-accent/30 hover:shadow-glass-sm rounded"
            onClick={toggle}
          >
            Yes
          </button>
          <button
            className="px-2 cursor-pointer py-2 border border-accent/30 hover:shadow-glass-sm rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserIteraction = () => {
    const myMusic = localStorage.getItem("my-music");
    if (myMusic === "true" && !isPlay) {
      audioRef.current.play();
      setIsPlay(true);
    }

    ["click", "keydown", "touchstart"].forEach((e) =>
      document.removeEventListener(e, handleFirstUserIteraction)
    );
  };

  useEffect(() => {
    const myMusic = localStorage.getItem("my-music");
    const myMusicTime = localStorage.getItem("my-music-time");
    if (
      myMusic &&
      myMusicTime &&
      new Date(myMusicTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlay(myMusic === "true");

      if (myMusic === "true") {
        ["click", "keydown", "touchstart"].forEach((e) =>
          document.addEventListener(e, handleFirstUserIteraction)
        );
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const toggle = () => {
    const newState = !isPlay;
    setIsPlay(!isPlay);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("my-music", String(newState));
    localStorage.setItem("my-music-time", new Date().toISOString());
    setShowModal(false);
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <MusicModal onClose={() => setShowModal(false)} toggle={toggle} />
      )}

      <audio loop ref={audioRef}>
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="custom-bg w-10 h10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4"
        aria-label={"sound"}
        name={"sound"}
      >
        {isPlay ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
