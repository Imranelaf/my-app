import { useState, useEffect, useRef } from "react";

function Hero() {
  const totalVideos = 3;
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(1); 

  const handleVideoChange = () => {

    setCurrentVideo((prev) => (prev % totalVideos) + 1);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((err) => console.error("Video play error:", err));
    }
  }, [currentVideo]);

  return (
    <div className="relative h-dvh w-screen">
      <div
        id="video-frame"
        onClick={handleVideoChange}
        className="w-dwv h-screen relative flex justify-center z-10 absolute absolute-center place-items-center bg-white"
      >
        <div className="group relative w-1/6 h-2/6 flex justify-center place-items-center">
          <video
            ref={videoRef}
            src={`/videos/video${currentVideo}.mp4`}
            loop
            muted
            playsInline
            className="absolute w-0 h-0 transition-all duration-500 ease group-hover:w-full group-hover:h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
