'use client';

import React, { Fragment, JSX, type ReactNode } from 'react';
import { ButtonLink, Popover } from '@/components';
import Image from 'next/image';
import css from 'styled-jsx/css';

import ChevronRightImg from '@/public/chevron_right.svg';
import ProfileImg from '@/public/profile.jpg';

import { ProfileMenuData } from './data';

interface ProfileMenuTargetProps {
  ref?: React.RefObject<any>;
  onClick?: React.MouseEventHandler<ReactNode>;
}

const ProfileMenuTarget: React.FC<ProfileMenuTargetProps> = ({
  onClick,
  ref,
}) => {
  return (
    <button ref={ref} onClick={onClick as any}>
      <Image src={ProfileImg} width={40} alt="profile" />
      <ChevronRightImg />

      <style jsx>{`
        button {
          display: flex;
          background-color: transparent;
          border: none;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          gap: 5px;

          & :global(img) {
            object-fit: cover;
            height: 40px;
            border-radius: 50px;
          }

          & :global(svg) {
            transform: rotate(90deg);
            color: #fff;
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </button>
  );
};

interface ProfileMenuItem {
  icon: JSX.Element;
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<any>;
  style?: React.CSSProperties;
}

export type ProfileMenuDataType = ProfileMenuItem[];

const profileMenuButtonStyles = css.resolve`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const sharedProfileMenuItemStyles = css.resolve`
  button,
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-color-1);
    padding: 7px 12px;
    width: 100%;
    line-height: 21.7px;
    user-select: none;
    -webkit-user-drag: none;

    & :global(svg) {
      width: 14px;
      height: 14px;
    }

    & :global(span) {
      font-size: 14px;
      font-weight: 400;
    }

    &:hover {
      background-color: var(--black-4);
    }
  }
`;

export const ProfileMenu: React.FC = () => {
  return (
    <>
      <Popover place="right" target={<ProfileMenuTarget />}>
        {ProfileMenuData.map(({ icon, label, href, onClick, style }, index) => {
          const as = href ? 'a' : 'button';

          return (
            <Fragment key={`profile-menu-item-${index}`}>
              <ButtonLink
                className={`${as === 'button' && profileMenuButtonStyles.className} ${sharedProfileMenuItemStyles.className}`.trim()}
                {...{ href, onClick, as, style }}
              >
                {icon}
                <span>{label}</span>
              </ButtonLink>
              {sharedProfileMenuItemStyles.styles}
              {as === 'button' && profileMenuButtonStyles.styles}
            </Fragment>
          );
        })}
      </Popover>
    </>
  );
};

export default ProfileMenu;
