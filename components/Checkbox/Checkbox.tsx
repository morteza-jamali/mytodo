'use client';

import React, { useEffect, useState } from 'react';

import CheckImg from '@/public/check.svg';

export interface CheckboxProps
  extends Omit<
    React.ComponentProps<'input'>,
    'type' | 'children' | 'onChange'
  > {
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange = () => {},
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div
      onClick={() => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
      }}
    >
      <input checked={isChecked} readOnly type="checkbox" {...props} />
      <CheckImg />
      <style jsx>{`
        div {
          width: 20px;
          height: 20px;
          position: relative;

          & :global(svg) {
            position: absolute;
            inset: 0;
            width: 18px;
            height: 18px;
            margin: auto;
            display: none;
          }

          & input:checked {
            background-color: #228be6;
            border-color: #228be6;

            & + :global(svg) {
              display: block;
            }
          }
        }

        input {
          border: 1px solid #ced4da;
          background-color: transparent;
          border-radius: 4px;
          appearance: none;
          width: 20px;
          height: 20px;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default Checkbox;
