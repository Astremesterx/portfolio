"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 224;
const FRAME_PREFIX = "/frames/ezgif-frame-";
const FRAME_EXTENSION = ".jpg";

function getFrameUrl(index: number) {
  const paddedIndex = index.toString().padStart(3, "0");
  return `${FRAME_PREFIX}${paddedIndex}${FRAME_EXTENSION}`;
}

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      let loadedCount = 0;
      const promises = [];
      for (let i = 1; i <= FRAME_COUNT; i++) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = getFrameUrl(i);
            img.onload = () => {
              loadedCount++;
              setLoaded(Math.round((loadedCount / FRAME_COUNT) * 100));
              resolve(img);
            };
            img.onerror = () => {
              loadedCount++;
              setLoaded(Math.round((loadedCount / FRAME_COUNT) * 100));
              resolve(null);
            };
          })
        );
      }
      const loadedImages = await Promise.all(promises);
      imagesRef.current = loadedImages as HTMLImageElement[];
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (loaded < 100 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (frameIndex: number) => {
      if (!imagesRef.current[frameIndex]) return;
      
      const img = imagesRef.current[frameIndex];
      
      // Calculate aspect ratio to cover the canvas completely (like object-fit: cover)
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-render current frame on resize
      const currentScroll = ScrollTrigger.maxScroll(window);
      const progress = window.scrollY / currentScroll;
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * (FRAME_COUNT - 1))
      );
      render(frameIndex || 0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const sequence = { frame: 0 };

    // GSAP ScrollTrigger
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (FRAME_COUNT - 1));
        if (sequence.frame !== frameIndex) {
          sequence.frame = frameIndex;
          requestAnimationFrame(() => render(frameIndex));
        }
      },
    });

    // Initial render
    render(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loaded]);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-black scanlines">
      {loaded < 100 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
          <div className="text-cyber-cyan font-mono text-xl animate-pulse">
            INITIALIZING OS... {loaded}%
          </div>
          <div className="w-64 h-2 mt-4 border border-cyber-cyan p-[2px]">
            <div 
              className="h-full bg-cyber-cyan transition-all duration-200" 
              style={{ width: `${loaded}%` }}
            />
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-80"
      />
    </div>
  );
}
