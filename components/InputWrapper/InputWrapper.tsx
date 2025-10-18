'use client';

import { type FC, type ReactNode } from 'react';
import Flex, { type FlexProps } from '../Flex/Flex';

export interface InputWrapperProps extends Pick<FlexProps, 'gap'> {
  label?: string;
  children?: ReactNode;
}

export const InputWrapper: FC<InputWrapperProps> = ({
  label,
  children,
  gap = 5,
}) => {
  return (
    <Flex direction="column" {...{ gap }}>
      {label && <label>{label}</label>}
      {children}
      <style jsx>{`
        label {
          color: var(--text-color-1);
          display: block;
          cursor: default;
          font-size: 14px;
          font-weight: 500;
          line-height: 21.7px;
        }
      `}</style>
    </Flex>
  );
};

export default InputWrapper;
