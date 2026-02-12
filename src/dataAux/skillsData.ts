import { JSX } from "react";
import { skillsIcons } from "@/components/UI/Icons";

interface ISkill {
  name: string;
  icon: JSX.Element;
  color: string;
}

export const skillsData: ISkill[] = [
  { name: "HTML", icon: skillsIcons.html, color: "#ff5722" },
  { name: "CSS", icon: skillsIcons.css, color: "#2196f3" },
  { name: "JavaScript", icon: skillsIcons.js, color: "#ffdf00" },
  { name: "TypeScript", icon: skillsIcons.ts, color: "#3178C6" },
  { name: "React", icon: skillsIcons.react, color: "#61DAFB" },
  { name: "Node.js", icon: skillsIcons.node, color: "#339933" },
  { name: "Next.js", icon: skillsIcons.nextjs, color: "#ffffff" },
  { name: "Redux / Redux toolkit", icon: skillsIcons.redux, color: "#764ABC" },
  { name: "Zustand", icon: skillsIcons.zustand, color: "#aaaaaa" },
  { name: "Express.js", icon: skillsIcons.express, color: "#ffffff" },
  { name: "PostgreSQL", icon: skillsIcons.postgre, color: "#4169E1" },
  { name: "Sequelize", icon: skillsIcons.sequelize, color: "#03afef" },
  { name: "Tailwind", icon: skillsIcons.tailwind, color: "#06B6D4" },
  { name: "MongoDB", icon: skillsIcons.mongo, color: "#10aa50" },
  { name: "Mongoose", icon: skillsIcons.mongoose, color: "#880000" },
];
