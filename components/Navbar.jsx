import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill, BsMoonStars, BsSun } from "react-icons/bs";
import { themeChange } from "../pages";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleTheme = () => {
    setTheme(!theme);
    themeChange();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 100 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const NavLinks = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/#about",
    },
    {
      id: 3,
      text: "Skills",
      url: "/#skills",
    },
    {
      id: 4,
      text: "Projects",
      url: "/#projects",
    },
    {
      id: 6,
      text: "Achivement",
      url: "/#achivement",
    },
    {
      id: 5,
      text: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[60px] z-[100] shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
          : "fixed w-full h-[60px] z-[100]"
      }
    >
      <div className=" container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <h2 className="ml-2 dark:text-white text-2xl lg:text-3xl">
          Md.
          <span className="text-Emerald-600 dark:text-sky-400">Rakib</span>
        </h2>

        <div className="flex items-center justify-center">
          <span
            onClick={handleTheme}
            className="w-[40px] h-[40px] mr-5 text-lg bg-sky-500/10 text-sky-900 dark:text-sky-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-500/30 duration-300"
          >
            {theme ? <BsSun /> : <BsMoonStars />}
          </span>
          <ul className="hidden md:flex">
            {NavLinks.map((data) => (
              <Link href={data.url} key={data.id}>
                <li className="c-link">{data.text}</li>
              </Link>
            ))}
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden dark:text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-white dark:bg-gray-800 left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className=" dark:text-white text-3xl">
                Md.
                <span className="text-sky-600 dark:text-sky-400">Rakib</span>
              </h2>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-400">
                Front End Developer
              </p>
            </div>
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul className="uppercase">
              {NavLinks.map((data) => (
                <Link href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit">{data.text}</li>
                </Link>
              ))}
            </ul>
            <div>
              <p className="uppercase font-bold tracking-widest text-sky-400">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 max-w-[250px]">
                <div className="c-button">
                  <FaLinkedinIn />
                </div>
                <div className="c-button">
                  <FaGithub />
                </div>
                <div className="c-button">
                  <AiOutlineMail />
                </div>
                <div className="c-button">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
