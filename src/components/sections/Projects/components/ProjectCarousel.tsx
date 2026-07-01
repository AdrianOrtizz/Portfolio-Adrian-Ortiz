"use client";

import { MouseEvent, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  SquareArrowOutUpRight,
} from "lucide-react";
import Image from "next/image";
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const currentProject = projects[currentIndex];
  const youtubeId = getYoutubeId(currentProject?.youTube);

  const projectImages = currentProject?.images && currentProject.images.length > 0
    ? currentProject.images
    : [
        currentProject?.image ||
          (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : "")
      ].filter(Boolean);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [currentIndex]);

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
                className="lg:col-span-7 flex flex-col justify-center w-full"
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="group/media relative w-full overflow-hidden rounded-2xl border border-white/5 bg-neutral-950 aspect-video select-none">
                  {projectImages.length > 0 ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={projectImages[activeImageIndex]}
                        alt={`${currentProject.title} - ${activeImageIndex + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-all duration-500 ease-in-out"
                        priority={activeImageIndex === 0}
                      />

                      {/* Navigation Arrows */}
                      {projectImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex((prev) =>
                                prev === 0 ? projectImages.length - 1 : prev - 1
                              );
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 backdrop-blur-xs cursor-pointer z-10"
                            aria-label="Imagen anterior"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex((prev) =>
                                prev === projectImages.length - 1 ? 0 : prev + 1
                              );
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 backdrop-blur-xs cursor-pointer z-10"
                            aria-label="Siguiente imagen"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}

                      {/* Pagination Dots */}
                      {projectImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/5">
                          {projectImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex(idx);
                              }}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                idx === activeImageIndex
                                  ? "bg-white w-3"
                                  : "bg-white/40 hover:bg-white/60"
                              }`}
                              aria-label={`Ir a imagen ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-gray-500">
                      No images available
                    </div>
                  )}

                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text Description Column */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2 select-none">
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
