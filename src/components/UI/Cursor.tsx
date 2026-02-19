"use client";

import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!isDesktop) return null;

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "#8B5CF6",
      }}
      outerStyle={{
        border: "3px solid #8B5CF6",
      }}
      clickables={[
        "a",
        "button",
        ".link",
        'input[type="text"]',
        'input[type="email"]',
        "select",
        "textarea",
        '[data-cursor="pointer"]',
      ]}
    />
  );
};

export default Cursor;
