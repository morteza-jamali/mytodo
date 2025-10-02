'use client';

import React, { JSX, type ReactNode } from 'react';
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
}

export type ProfileMenuDataType = ProfileMenuItem[];

const profileMenuContentStyles = css.resolve`
  div {
    background-color: var(--black-1);
    border-radius: 4px;
    padding: 5px;
    border: 1px solid #424242;
  }
`;

const profileMenuItemStyles = css.resolve`
  a {
    color: red;
  }
`;

export const ProfileMenu: React.FC = () => {
  return (
    <>
      <Popover
        place="right"
        classNames={{ content: profileMenuContentStyles.className }}
        target={<ProfileMenuTarget />}
      >
        {ProfileMenuData.map(({ icon, label, href, onClick }, index) => (
          <ButtonLink
            key={`profile-menu-item-${index}`}
            as={href ? 'a' : 'button'}
            {...{ href, onClick }}
          >
            {icon}
            <span>{label}</span>
          </ButtonLink>
        ))}
      </Popover>
      {profileMenuContentStyles.styles}
    </>
  );
};

export default ProfileMenu;
