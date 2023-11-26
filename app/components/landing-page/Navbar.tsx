'use client';

import { renderComponentBasedOnCondition } from 'app/lib/render-component';
import useDarModeStore from 'app/store/useDarkModeStore';
import useStore from 'app/store/useDarkModeStore';
import { Languages, Moon, MoonStar, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
import  Logo from "../../../public/images/logo.svg"
import {
  useAnimationControls,
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Image from 'next/image';

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
  const { i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(window.scrollY);
  const { setTheme, theme } = useTheme();

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
    <nav className=" w-full flex justify-between p-8">
      <div>
       <Image src={Logo} alt='Logo' />
      </div>
      <ul className="flex gap-4 font-semibold">
        {Links.map((link) => {
          return (
            <li key={link.name}>
              <a href={`#${link.link}`} className="dark:hover:text-gray-400 ">
                {link.name}
              </a>
            </li>
          );
        })}
        <Separator orientation="vertical" />
        {renderComponentBasedOnCondition(
          theme === 'light',
          <motion.div whileTap={{ scale: 3.5 }}>
            <MoonStar
              className="cursor-pointer"
              onClick={() => setTheme('dark')}
            />
          </motion.div>,
          <motion.div whileTap={{ scale: 3.5 }}>
            <Sun className="cursor-pointer" onClick={() => setTheme('light')} />
          </motion.div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
