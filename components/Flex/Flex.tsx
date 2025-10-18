'use client';

import React, { type ComponentProps } from 'react';

export interface FlexProps extends ComponentProps<'div'> {
  direction?: 'row' | 'column';
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  alignItems,
  justifyContent,
  gap = 0,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: ${direction};
          gap: ${gap}px;
          ${alignItems && `align-items: ${alignItems};`}
          ${justifyContent && `justify-content: ${justifyContent};`}
        }
      `}</style>
    </div>
  );
};

export default Flex;
