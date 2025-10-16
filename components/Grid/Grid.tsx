'use client';

import React from 'react';
import GridCol from './GridCol';

export interface GridProps {
  children: React.ReactNode;
  gap?: number;
}

export function Grid({ children, gap = 0 }: GridProps): React.ReactNode {
  return (
    <div className="grid__root">
      {children}

      <style jsx>{`
        .grid__root {
          --grid-gap: calc(${`${gap}px`} / 2);
          display: flex;
          flex-wrap: wrap;
          margin: calc(var(--grid-gap) * -1);
        }
      `}</style>
    </div>
  );
}

Grid.Col = GridCol;

export default Grid;
