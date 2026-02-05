"use client";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
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
        "select",
        "textarea",
        '[data-cursor="pointer"]',
      ]}
    />
  );
};

export default Cursor;
