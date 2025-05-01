import { useEffect, useRef, useState } from "react";

export function FullScreenBackgroundVideo({
  src,
  poster,
  overlay = true,
}: {
  src: string;
  poster?: string;
  overlay?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const minOpacity = 0.65;
  const maxOpacity = 0.85;
  const [opacity, setOpacity] = useState(maxOpacity);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.error("Background video failed to play automatically", err);
      });
    }

    const handleScroll = () => {
      const y = window.scrollY;
      const scrollRatio = Math.min(y / 300, 1);
      const newOpacity = maxOpacity - (maxOpacity - minOpacity) * scrollRatio;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      {overlay && <div className="absolute inset-0 transition-opacity duration-200" style={{
        backgroundColor: "rgb(13, 33, 48)",
        backgroundBlendMode: "normal",
        backgroundImage: "none",
        opacity
      }} />}
    </div>
  );
}
