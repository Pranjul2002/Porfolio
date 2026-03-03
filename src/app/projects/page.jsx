"use client";

import Star from "../component/star/star";
import style from "./projects.module.css";
import { Big_Shoulders } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["800", "900"],
});

export default function ProjectsPage() {
  return (
    <div className={style.wrapper}>
      
      <h1 className={`${style.title} ${bigShoulders.className}`}>
        PROJECTS
      </h1>

      <div className={style.star}>
        <Star/>
      </div>

      <div className={style.projectsGrid}>
        <div className={style.projectCard}></div>
        <div className={style.projectCard}></div>
        <div className={style.projectCard}></div>
        <div className={style.projectCard}></div>
      </div>

    </div>
  );
}