"use client";

import { MouseEvent, useState, useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { YouTube, GitHub } from "../../../UI/Icons";
import { SquareArrowOutUpRight, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gitHub: string;
  youTube: string;
  className: string;
  demo?: string;
  image?: string;
  video?: string;
  onPlayVideo?: (url: string) => void;
}

const getYoutubeId = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const ProjectCard = ({
  title,
  description,
  tags,
  youTube,
  gitHub,
  className,
  demo,
  image,
  video,
  onPlayVideo,
}: ProjectCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const youtubeId = getYoutubeId(youTube);

  // Initialize with maxresdefault, but fallback if it fails
  const initialImg = image
    ? image
    : youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      : "";

  const [imgSrc, setImgSrc] = useState(initialImg);

  useEffect(() => {
    if (image) {
      setImgSrc(image);
    } else if (youtubeId) {
      setImgSrc(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);
    }
  }, [image, youtubeId]);

  const handleImgError = () => {
    if (youtubeId && imgSrc.includes("maxresdefault")) {
      setImgSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
    }
  };

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

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isWide = className.includes("col-span-2");

  const mediaNode = (
    <div
      className="group/media relative w-full overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 cursor-pointer aspect-video flex-shrink-0"
      onClick={() => onPlayVideo && onPlayVideo(youTube || video || "")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail or custom image */}
      {(!video || !isHovered) && imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          onError={handleImgError}
          className="w-full h-full object-cover transform group-hover/media:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      )}

      {/* Video preview on hover */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transform group-hover/media:scale-105 transition-transform duration-500 ease-out ${
            isHovered ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Play icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/media:bg-black/40 transition-colors duration-300 pointer-events-none">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-primary shadow-primary/30 backdrop-blur-xs">
          <Play className="w-5 h-5 md:w-6 md:h-6 fill-white ml-0.5" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 overflow-hidden transition-colors hover:border-primary/20 flex flex-col justify-between ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className={`relative z-10 flex h-full flex-col justify-between gap-6 ${isWide ? "md:grid md:grid-cols-12 md:items-stretch" : ""}`}>
        {isWide ? (
          <>
            {/* Wide layout: Side by side on desktop */}
            <div className="md:col-span-5 flex flex-col justify-center h-full">
              {mediaNode}
            </div>

            <div className="md:col-span-7 flex flex-col justify-between h-full">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => onPlayVideo && onPlayVideo(youTube || video || "")}
                    className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    title="Watch Demo"
                  >
                    <YouTube className="w-6 h-6 md:w-7 md:h-7" />
                  </button>

                  <a href={gitHub} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200">
                    <GitHub className="w-6 h-6 md:w-7 md:h-7" />
                  </a>

                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200">
                      <SquareArrowOutUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Standard layout: Stacked vertically */}
            <div>
              {mediaNode}
              <div className="mt-5 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onPlayVideo && onPlayVideo(youTube || video || "")}
                  className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  title="Watch Demo"
                >
                  <YouTube className="w-6 h-6 md:w-7 md:h-7" />
                </button>

                <a href={gitHub} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200">
                  <GitHub className="w-6 h-6 md:w-7 md:h-7" />
                </a>

                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200">
                    <SquareArrowOutUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
