'use client';

import React from 'react';

interface TextareaProps {
  resizable?: boolean;
}

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  textarea?: boolean | TextareaProps;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  textarea,
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      {textarea ? <textarea {...props} /> : <input type="text" {...props} />}

      <style jsx>{`
        input,
        textarea {
          background-color: var(--black-1);
          color: var(--text-color-1);
          outline: none;
          border-radius: 8px;
          border: 1px solid var(--black-4);
          height: 36px;
          font-weight: 400;
          font-size: 14px;
          line-height: 34px;
          padding: 0 12px;
          margin: 5px 0;

          &:focus {
            border-color: var(--blue-1);
          }
        }

        textarea {
          min-height: 57px;
          min-width: 225px;
          ${typeof textarea === 'object' &&
          textarea.resizable === false &&
          'resize: none;'}
        }

        label {
          color: var(--text-color-1);
          display: block;
          cursor: default;
          font-size: 14px;
          font-weight: 500;
          line-height: 21.7px;
        }
      `}</style>
    </div>
  );
};

export default TextInput;
