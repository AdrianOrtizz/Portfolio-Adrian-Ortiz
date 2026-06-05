"use client";

import { MouseEvent, useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  SquareArrowOutUpRight,
} from "lucide-react";
import { YouTube, GitHub } from "../../../UI/Icons";
import { Project } from "@/i18n/translations";

interface ProjectCarouselProps {
  projects: Project[];
  onPlayVideo: (url: string, title: string) => void;
}

const getYoutubeId = (url?: string) => {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

export default function ProjectCarousel({
  projects,
  onPlayVideo,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const currentProject = projects[currentIndex];
  const youtubeId = getYoutubeId(currentProject?.youTube);

  // Handle image resolution fallbacks
  const getInitialImg = (proj: Project) => {
    if (proj.image) return proj.image;
    const yid = getYoutubeId(proj.youTube);
    return yid ? `https://img.youtube.com/vi/${yid}/maxresdefault.jpg` : "";
  };

  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (currentProject) {
      setImgSrc(getInitialImg(currentProject));
    }
  }, [currentIndex, currentProject]);

  const handleImgError = () => {
    const yid = getYoutubeId(currentProject?.youTube);
    if (yid && imgSrc.includes("maxresdefault")) {
      setImgSrc(`https://img.youtube.com/vi/${yid}/hqdefault.jpg`);
    }
  };

  // Play video preview on hover
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch/Drag handlers
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full">
      {/* Outer Card with Radial Glow Tracker */}
      <motion.div
        onMouseMove={handleMouseMove}
        className="group relative rounded-3xl mb-6 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md p-6 md:p-6 overflow-hidden transition-colors hover:border-primary/20"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        {/* Swipeable Container */}
        <div className="relative overflow-hidden min-h-[500px] lg:min-h-[500px] flex items-center">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full cursor-grab active:cursor-grabbing items-stretch"
            >
              {/* Media Preview Column */}
              <div
                className="lg:col-span-6 flex flex-col justify-center w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className="group/media relative w-full overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 aspect-video lg:aspect-auto lg:h-full lg:min-h-[440px] cursor-pointer"
                  onClick={() =>
                    onPlayVideo(
                      currentProject.youTube || currentProject.video || "",
                      currentProject.title,
                    )
                  }
                >
                  {/* Thumbnail or Image */}
                  {(!currentProject.video || !isHovered) && imgSrc && (
                    <img
                      src={imgSrc}
                      alt={currentProject.title}
                      onError={handleImgError}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out select-none pointer-events-none"
                    />
                  )}

                  {/* Video Hover Preview */}
                  {currentProject.video && (
                    <video
                      ref={videoRef}
                      src={currentProject.video}
                      muted
                      loop
                      playsInline
                      className={`w-full h-full object-cover transform transition-transform duration-700 ease-out ${
                        isHovered
                          ? "opacity-100"
                          : "opacity-0 absolute inset-0 pointer-events-none"
                      }`}
                    />
                  )}

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/media:bg-black/45 transition-colors duration-300 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-primary shadow-primary/30 backdrop-blur-xs">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text Description Column */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full py-2 select-none">
                <div className="flex flex-col justify-start">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    {currentProject.title}
                  </h3>
                  {/* Fixed-height description box to prevent layout jumping & scrollbars */}
                  <div className="min-h-[190px] sm:h-[190px] lg:min-h-[260px] overflow-hidden pr-1">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 font-normal">
                      {currentProject.description}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Tech Tags with fixed height to prevent layout shifts */}
                  <div className="flex flex-wrap gap-2 min-h-[80px] lg:min-h-[56px] overflow-hidden mb-6">
                    {currentProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="flex-shrink-0 text-[10px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 h-6 flex items-center rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action / Links & Navigation Row */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          onPlayVideo(
                            currentProject.youTube ||
                              currentProject.video ||
                              "",
                            currentProject.title,
                          )
                        }
                        className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
                        title="Ver Video"
                      >
                        <YouTube className="w-5 h-5 md:w-6 md:h-6" />
                      </button>

                      <a
                        href={currentProject.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 text-gray-400 hover:text-white transition-all duration-200"
                        title="GitHub Repo"
                      >
                        <GitHub className="w-5 h-5 md:w-6 md:h-6" />
                      </a>

                      {currentProject.demo && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-primary/25"
                        >
                          <span>Demo en Vivo</span>
                          <SquareArrowOutUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Navigation Buttons inside footer */}
                    <div className="flex items-center justify-between sm:justify-end gap-6">
                      <span className="text-sm font-medium text-gray-500 tabular-nums">
                        <span className="text-white">
                          {String(currentIndex + 1).padStart(2, "0")}
                        </span>{" "}
                        / {String(projects.length).padStart(2, "0")}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
                          aria-label="Proyecto anterior"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
                          aria-label="Siguiente proyecto"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Slide Indicators / Dots */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-7 bg-white shadow-lg shadow-primary/40"
                : "w-2.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
