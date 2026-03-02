"use client";

import React from "react";
import styles from "./page.module.css";
import Star from "./component/star/star";
import { Big_Shoulders, DM_Sans } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const page = () => {
  return (
    <div className={styles.Center}>
      <div className={styles.portfolioLanding}>
        
        <img src="/profile2.jpg" alt="" className={styles.profilePic} />

        <p className={`${styles.nameTop} ${dmSans.className}`}>
          CRAFTING DIGITAL GOODS SINCE — Y:2018
        </p>

        <div className={`${styles.name} ${bigShoulders.className}`}>
          <p>
            PRANJUL
            <br />
            KHANKRIYAL
          </p>
        </div>

        <div className={styles.star}>
          <Star/>
        </div>

        <div className={`${styles.description} ${dmSans.className}`}>
          <p>
            I'm Pranjul Khankriyal - a software developer,
            <br />
            passionately creating digital experiences and
            <br />
            exploring different tech.
          </p>
        </div>

      </div>
    </div>
  );
};

export default page;