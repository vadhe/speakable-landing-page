'use client';

import useDarModeStore from 'app/store/useDarkModeStore';
import useStore from 'app/store/useDarkModeStore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
const Links = [
  {
    name: 'Home',
    link: 'home',
  },
  {
    name: 'Features',
    link: 'features',
  },
  {
    name: 'Events And Competitions',
    link: 'events',
  },
  {
    name: 'About',
    link: 'about',
  },
  {
    name: 'Recruitment Staff',
    link: 'recruitment',
  },
];
export const Navbar = () => {
  const { setDarkMode } = useDarModeStore();
  const { i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);
  const navbarTransition = (scrollY: number) => {
    if (scrollY >= 75) {
      return 'bg-neutral  text-white  ransform -translate-y-full translate-y-0';
    }
  };
  return (
    <div
      className={`navbar fixed transition-all duration-1000  z-50 ${navbarTransition(
        scrollY
      )}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold dark:bg-gray-800"
          >
            {Links.map((link) => {
              return (
                <li key={link.name}>
                  <a
                    href={`#${link.link}`}
                    className="dark:hover:text-gray-400 "
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SpeakAble Youth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {Links.map((link) => {
            return (
              <li key={link.name}>
                <a href={`#${link.link}`} className="dark:hover:text-gray-400 ">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end pr-4">
        <label className="swap mr-4">
          <input type="checkbox" />
          <div className="swap-on" onClick={() => i18n.changeLanguage('en')}>
            ID
          </div>
          <div className="swap-off" onClick={() => i18n.changeLanguage('id')}>
            EN
          </div>
        </label>
        <svg
          onClick={setDarkMode}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;