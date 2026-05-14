"use client";

import React, { useState, useEffect } from "react";
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
    setIsOpen((prev) => !prev);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${style.header} ${bigShoulders.className}`}>
      <div className={style.headerContainer}>

        <button
          className={`${style.menuOptionButtonWrapper} ${
            isOpen ? style.open : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          <span className={`${style.stroke} ${style.stroke1}`}></span>
          <span className={`${style.stroke} ${style.stroke2}`}></span>
          <span className={`${style.stroke} ${style.stroke3}`}></span>
        </button>

        <nav
          className={`${style.menuOptionsBox} ${
            isOpen ? style.open : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/" className={style.menuOptionLink} onClick={closeMenu}>
                HOME
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className={style.menuOptionLink}
                onClick={closeMenu}
              >
                PROJECTS
              </Link>
            </li>

            <li>
              <Link
                href="/experience"
                className={style.menuOptionLink}
                onClick={closeMenu}
              >
                EXPERIENCE
              </Link>
            </li>

            <li>
              <Link
                href="/skills"
                className={style.menuOptionLink}
                onClick={closeMenu}
              >
                SKILLS
              </Link>
            </li>

            <li>
              <Link
                href="/education"
                className={style.menuOptionLink}
                onClick={closeMenu}
              >
                EDUCATION
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={style.menuOptionLink}
                onClick={closeMenu}
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={style.menuOptionLink}
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;