'use client';

import React from 'react';

export interface GridColProps {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const GridCol: React.FC<GridColProps> = ({ children, span = 12 }) => {
  return (
    <div className="gridcol__root">
      {children}

      <style jsx>{`
        .gridcol__root {
          flex-shrink: 0;
          flex-basis: ${(span * 100) / 12}%;
          padding: var(--grid-gap);
        }
      `}</style>
    </div>
  );
};

export default GridCol;
