import Image from 'next/image';
import React, { type JSX } from 'react';

import LogoImg from '@/public/logo.png';
import ChevronRightImg from '@/public/chevron_right.svg';

import { MenuData } from './data';

const Logo: React.FC = () => {
  return (
    <div className="logo__root">
      <Image src={LogoImg} alt="logo" className="logo__img" />
      <span>MyTodo</span>
      <style jsx>{`
        .logo__root {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 10px 0;
          border-bottom: 1px solid #424242;

          & :global(.logo__img) {
            width: 50px;
            height: auto;
          }
        }

        span {
          font-size: 28px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

interface MenuItem {
  icon: JSX.Element;
  label: string;
}

export type MenuDataType = MenuItem[];

const Menu: React.FC = () => {
  return (
    <div>
      {MenuData.map(({ icon, label }, key) => (
        <button key={key}>
          <div className="menu__icon_label">
            <div className="menu__icon">{icon}</div>
            <span>{label}</span>
          </div>
          <ChevronRightImg className="menu__chevron" />
        </button>
      ))}

      <style jsx>{`
        button {
          display: flex;
          background-color: transparent;
          border: none;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
          padding: 10px 16px;

          &:hover {
            background-color: #242424;
          }

          & :global(.menu__chevron) {
            width: 16px;
            height: 16px;
            color: var(--text-color-1);
          }
        }

        .menu__icon {
          border-radius: 4px;
          background-color: #228be626;
          color: #74c0fc;
          width: 1.875rem;
          height: 1.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu__icon_label {
          display: flex;
          align-items: center;
          gap: 1rem;

          & span {
            color: var(--text-color-1);
            font-weight: 500;
          }
        }
      `}</style>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar__root">
      <Logo />
      <Menu />

      <style jsx>{`
        .sidebar__root {
          grid-area: sidebar;
          background-color: var(--black-1);
        }
      `}</style>
    </div>
  );
};
