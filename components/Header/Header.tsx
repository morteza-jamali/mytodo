'use client';

import { ActionButton, ProfileMenu } from '@/components';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useFullscreen } from '@/hooks';

import MoonImg from '@/public/moon.svg';
import SunImg from '@/public/sun.svg';
import MaximizeImg from '@/public/maximize.svg';
import ArrowsMinimizeImg from '@/public/arrows_minimize.svg';
import SearchImg from '@/public/search.svg';

const MotionMoonImg = motion.create(MoonImg);
const MotionSunImg = motion.create(SunImg);

const ThemeLight: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const getAnimationProps = (x: number) => ({
    initial: { x, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x, opacity: 0 },
    transition: { duration: 0.1 },
  });

  return (
    <ActionButton onClick={() => setIsDark(!isDark)}>
      <AnimatePresence initial={false}>
        {isDark && <MotionMoonImg {...getAnimationProps(-10)} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!isDark && <MotionSunImg {...getAnimationProps(10)} />}
      </AnimatePresence>
    </ActionButton>
  );
};

const Fullscreen: React.FC = () => {
  const { fullscreen, toggle } = useFullscreen();

  return (
    <ActionButton onClick={toggle}>
      {fullscreen ? <ArrowsMinimizeImg /> : <MaximizeImg />}
    </ActionButton>
  );
};

const SearchInput: React.FC = () => {
  return (
    <div>
      <SearchImg />
      <input placeholder="Search..." />

      <style jsx>{`
        div {
          position: absolute;
          right: 0;
          left: 0;
          margin: 0 auto;
          width: 300px;
          height: 36px;
          background-color: var(--black-1);
          border: 1px solid var(--black-4);
          border-radius: 8px;
          color: var(--text-color-1);
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 10px;

          & :global(svg) {
            width: 18px;
            height: 18px;
          }
        }

        input {
          background-color: transparent;
          border: none;
          color: var(--text-color-1);
          outline: none;
          height: 100%;
          font-size: 14px;
          font-weight: 400;
          line-height: 34px;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export const Header: React.FC = () => {
  return (
    <div className="header__root">
      <SearchInput />
      <Fullscreen />
      <ThemeLight />
      <ProfileMenu />

      <style jsx>{`
        .header__root {
          grid-area: header;
          position: relative;
          background-color: var(--black-1);
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 0 30px;
          border-bottom: 1px solid var(--black-3);
          gap: 10px;
        }
      `}</style>
    </div>
  );
};
