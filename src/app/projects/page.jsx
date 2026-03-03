"use client";

import Star from "../component/star/star";
import Link from "next/link";
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
        <Star />
      </div>

      <div className={`${style.projectsGrid} ${bigShoulders.className}`}>

        <Link href="https://edu-tech-rouge.vercel.app/" target="_blank">
          <div className={style.projectCard}>
            <div className={style.projectContainer} style={{ backgroundImage: "url('/edutech.png')" }}>
            </div>
            <div className={style.projectTitle}>EduTech</div>
          </div>
        </Link>

        <Link href="https://github.com/Pranjul2002/Letter-Level-Sign-Recognition" target="_blank">
          <div className={style.projectCard}>
            <div className={style.projectContainer} style={{ backgroundImage: "url('/Sign.png')", backgroundColor: "#0c0c0c" }}>
            </div>
            <div className={style.projectTitle}> Letter Level Sign Laguage detection</div>
          </div>
        </Link>

        <Link href="https://github.com/Pranjul2002/StockMarketPricePridiction-backend" target="_blank">
          <div className={style.projectCard}>
            <div className={style.projectContainer} style={{ backgroundImage: "url('/stock.jpg')" }}>
            </div>
            <div className={style.projectTitle}>Stock market Price Prediction</div>
          </div>
        </Link>

        <Link href="https://github.com/Pranjul2002/StockMarketPricePridiction-backend" target="_blank">
          <div className={style.projectCard}>
            <div className={style.projectContainer} style={{ backgroundImage: "url('/stock.jpg')" }}>
            </div>
            <div className={style.projectTitle}>Stock market Price Prediction</div>
          </div>
        </Link>
      </div>

    </div>
  );
}