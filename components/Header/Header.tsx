'use client';

import { ProfileMenu } from '@/components';

export const Header: React.FC = () => {
  return (
    <div className="header__root">
      <ProfileMenu />

      <style jsx>{`
        .header__root {
          grid-area: header;
          background-color: var(--black-1);
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 0 30px;
          border-bottom: 1px solid var(--black-3);
        }
      `}</style>
    </div>
  );
};
