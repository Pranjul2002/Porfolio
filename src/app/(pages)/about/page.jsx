import React from 'react'
import Star from "@/component/star/star";
import { Big_Shoulders } from "next/font/google";
import styles from './about.module.css'

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["800", "900"],
});

const AboutPage = () => {
  return (
    <div className={styles.aboutPageWrapper}>

      {/* =========================
          TITLE
      ========================= */}
      <div className={styles.aboutPageBanner}>
        <h1 className={`${styles.title} ${bigShoulders.className}`}>
          ABOUT
        </h1>
      </div>

      <div className={styles.star}>
        <Star />
      </div>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <div className={styles.aboutMeAndMyImgWrapper}>
        <div className={styles.aboutMeAndMyImg}>

          <div className={styles.myImgWrapper}>
            <div className={styles.myImg}></div>
            <div className={styles.myImgBG}></div>
          </div>

          <div className={styles.aboutMe}>
            <p className={styles.p1}>
              My passion lies in the intersection of art and technology,
              creating visually captivating interfaces and elevating
              overall user digital experiences.
            </p>

            <p className={styles.p2}>
              I hold a Bachelor of Technology in Computer Science
              from the esteemed Art University and a Master of Fine Arts
              in Interactive Design. This academic foundation has equipped
              me with a solid understanding of the principles that underpin
              effective interaction design, providing me with the knowledge
              to create designs that seamlessly blend aesthetics and
              functionality.
            </p>
          </div>

        </div>
      </div>

      {/* =========================
          SKILLS SECTION
      ========================= */}
      <div className={styles.skillsWrapper}>

        <div className={styles.skillsGrid}>

          {/* CARD 1 */}
          <div className={styles.skillCard}>
            <div className={styles.skillLeft}>
              <h3>Full Stack Dev</h3>
              <p>reactjs, nextjs, java, springboot</p>
            </div>

            <div className={styles.skillDivider}></div>

            <div className={styles.skillRight}>
              <span>52%</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.skillCard}>
            <div className={styles.skillLeft}>
              <h3>AI/ML</h3>
              <p>Basic Algo, hands-on projects, in tensorflow & computer vision</p>
            </div>

            <div className={styles.skillDivider}></div>

            <div className={styles.skillRight}>
              <span>43%</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutPage