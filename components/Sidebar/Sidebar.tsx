'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, type JSX, Fragment, useEffect } from 'react';
import { motion, stagger, type Variants } from 'motion/react';
import css from 'styled-jsx/css';
import { ButtonLink, type ButtonLinkProps } from '@/components';

import LogoImg from '@/public/logo.png';
import ChevronRightImg from '@/public/chevron_right.svg';

import { MenuData } from './data';

const logoStyles = css.resolve`
  img {
    width: 50px;
    height: auto;
  }
`;

const Logo: React.FC = () => {
  return (
    <div className="logo__root">
      <Image src={LogoImg} alt="logo" className={logoStyles.className} />
      <span>MyTodo</span>

      {logoStyles.styles}
      <style jsx>{`
        .logo__root {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 10px 0;
          border-bottom: 1px solid #424242;
        }

        span {
          font-size: 28px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

interface MenuSubItem {
  label: string;
  href: string;
}

interface MenuItemType {
  icon: JSX.Element;
  label: string;
  href?: string;
  items?: MenuSubItem[];
}

export type MenuDataType = MenuItemType[];

const getButtonLinkStyles = (isActive: boolean, as: ButtonLinkProps['as']) =>
  as === 'button'
    ? css.resolve`
        button {
          display: flex;
          background-color: ${isActive ? 'var(--black-2)' : 'transparent'};
          border: none;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 10px 16px;

          &:hover {
            background-color: var(--black-2);
          }
        }
      `
    : css.resolve`
        a {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 10px 16px;
          background-color: ${isActive ? 'var(--black-2)' : 'transparent'};

          &:hover {
            background-color: var(--black-2);
          }
        }
      `;

const MotionChevronRightImg = motion.create(ChevronRightImg);

const menuItemChevronStyles = css.resolve`
  svg {
    width: 16px;
    height: 16px;
    color: var(--text-color-1);
  }
`;

const getMenuItemSubmenuItemStyles = (isActive: boolean) => css.resolve`
  a {
    display: block;
    color: var(--text-color-1);
    font-weight: 500;
    font-size: 14px;
    border-left: 1px solid #424242;
    margin-left: 32px;
    padding: 10px 16px;
    line-height: 21.7px;
    background-color: ${isActive ? 'var(--black-2)' : 'transparent'};

    &:hover {
      background-color: var(--black-2);
    }
  }
`;

const menuItemVariants: Variants = {
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hide: { opacity: 0, y: 50 },
};

const MenuItem: React.FC<MenuItemType> = ({ icon, label, items, href }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === href);
  const [open, toggleOpen] = useState(isActive);
  const as = items ? 'button' : 'a';
  const buttonLinkStyles = getButtonLinkStyles(isActive, as);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname]);

  useEffect(() => {
    toggleOpen(isActive);
  }, [isActive]);

  return (
    <motion.div variants={menuItemVariants}>
      <ButtonLink
        className={buttonLinkStyles.className}
        onClick={() => toggleOpen(!open)}
        {...{ href, as }}
      >
        <div className="menu_item__icon_label">
          <div className="menu_item__icon">{icon}</div>
          <span>{label}</span>
        </div>
        {items && (
          <MotionChevronRightImg
            initial={{ rotate: open ? 90 : 0 }}
            animate={{
              rotate: open ? -90 : 0,
              transition: {
                duration: 0.3,
              },
            }}
            className={menuItemChevronStyles.className}
          />
        )}
      </ButtonLink>
      {items && (
        <motion.div
          initial={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            display: open ? 'block' : 'none',
          }}
          animate={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            display: open ? 'block' : 'none',
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {items.map((item, itemKey) => {
            const itemIsActive = pathname === item.href;
            const menuItemSubmenuItemStyles =
              getMenuItemSubmenuItemStyles(itemIsActive);

            if (itemIsActive && !isActive) {
              setIsActive(true);
            }

            return (
              <Fragment key={`item-${itemKey}`}>
                <Link
                  href={item.href}
                  className={menuItemSubmenuItemStyles.className}
                >
                  {item.label}
                </Link>
                {menuItemSubmenuItemStyles.styles}
              </Fragment>
            );
          })}
        </motion.div>
      )}

      {buttonLinkStyles.styles}
      {menuItemChevronStyles.styles}
      <style jsx>{`
        .menu_item__icon {
          border-radius: 4px;
          background-color: #228be626;
          color: #74c0fc;
          width: 1.875rem;
          height: 1.875rem;
          display: flex;
          align-items: center;
          justify-content: center;

          & :global(svg) {
            width: 18px;
            height: 18px;
          }
        }

        .menu_item__icon_label {
          display: flex;
          align-items: center;
          gap: 1rem;

          & span {
            color: var(--text-color-1);
            font-weight: 500;
            font-size: 14px;
          }
        }
      `}</style>
    </motion.div>
  );
};

const menuRootStyles = css.resolve`
  div {
    padding: 32px 0;
  }
`;

const menuVariants: Variants = {
  show: {
    transition: { delayChildren: stagger(0.1) },
  },
  hide: {},
};

const Menu: React.FC = () => {
  return (
    <motion.div
      className={menuRootStyles.className}
      initial="hide"
      animate="show"
      variants={menuVariants}
    >
      {MenuData.map((data, key) => (
        <MenuItem key={`menu-${key}`} {...data} />
      ))}

      {menuRootStyles.styles}
    </motion.div>
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
          border-right: 1px solid var(--black-3);
        }
      `}</style>
    </div>
  );
};
