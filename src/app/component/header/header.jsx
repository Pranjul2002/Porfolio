"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Big_Shoulders } from "next/font/google";
import style from "./headerStyle.module.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className={`${style.header} ${bigShoulders.className}`}>
      <div className={style.headerContainer}>
        
        <div
          className={`${style.menuOptionButtonWrapper} ${
            isOpen ? style.open : ""
          }`}
          onClick={toggleMenu}
        >
          <div className={`${style.stroke} ${style.stroke1}`}></div>
          <div className={`${style.stroke} ${style.stroke2}`}></div>
          <div className={`${style.stroke} ${style.stroke3}`}></div>
        </div>

        <div
          className={`${style.menuOptionsBox} ${
            isOpen ? style.open : ""
          }`}
        >
          <ul>
            <li><Link href="/" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>HOME</Link></li>
            <li><Link href="/projects" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>PROJECTS</Link></li>
            <li><Link href="/experience" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>EXPERIENCE</Link></li>
            <li><Link href="/skills" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>SKILLS</Link></li>
            <li><Link href="/education" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>EDUCATION</Link></li>
            <li><Link href="/about" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>ABOUT</Link></li>
            <li><Link href="/contact" className={style.menuOptionLink} onClick={()=>setIsOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;