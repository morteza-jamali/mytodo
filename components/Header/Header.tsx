'use client';

import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="header__root">
      <style jsx>{`
        .header__root {
          grid-area: header;
          background-color: var(--black-1);
        }
      `}</style>
    </div>
  );
};
