import { useState, useEffect, useRef } from "react";
import Button from "./Button";

function Hero() {
  const totalVideos = 3;
  const [currentVideo, setCurrentVideo] = useState(1); 
  const videoRefMain = useRef(null); 
  const videoRefHover = useRef(null); 

  const handleVideoChange = () => {
    setCurrentVideo((prevVideo) => (prevVideo % totalVideos) + 1);
  };

  useEffect(() => {
    if (videoRefMain.current) {
      videoRefHover.current.load();
      videoRefHover.current.play()
      videoRefMain.current.load();
      videoRefMain.current
        .play()
        .catch((err) => console.error("Error playing video:", err));
    }
  }, [currentVideo]);

  return (
    <div className="relative h-screen w-screen">
      
      <div
        id="video-frame"
        className="w-full h-full flex justify-center items-center polygon-shape"
      >
        {/* Main Video */}
        <video
          ref={videoRefMain}
          src={`videos/video${currentVideo}.mp4`}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute z-200 left-5 top-14 lg:left-2 lg:top-6">
        <h1 className=" text-5xl text-blue-100 lg:text-4xl ">save environment <br />  guarantee the future </h1>
        <Button props={{label: 'Learn more', containerClass:'bg-yellow-100 text-white hover:bg-yellow-50'}}/>
        </div>
        <div className="absolute bottom-2 right-5 text-4xl tracking-widest text-green-200"><h2 className="font-HelveticaBoldOblique">Nature</h2></div>
        {/* Hoverable Video */}
        <div
          className="relative h-1/4 w-2/6 bg-black sm:w-2/6 sm:h-1/4 lg:h-1/4 lg:w-1/6 
          rounded-3xl overflow-hidden origin-center scale-50 transition-all duration-500 ease-in-out
          opacity-0 hover:opacity-100 hover:scale-100 hover:border hover:border-black cursor-pointer"
          onClick={handleVideoChange}
        >
          <video
            ref={videoRefHover}
            src={`videos/video${(currentVideo % totalVideos) + 1}.mp4`}
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
