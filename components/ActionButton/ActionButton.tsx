'use client';

import React, { type ReactNode } from 'react';

export interface ActionButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<any>;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button {...props}>
      {children}

      <style jsx>{`
        button {
          background-color: var(--black-1);
          color: #fff;
          border: 1px solid var(--black-4);
          border-radius: 8px;
          cursor: pointer;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #3b3b3b;
          }

          & :global(svg) {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </button>
  );
};

export default ActionButton;
