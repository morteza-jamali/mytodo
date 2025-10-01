'use client';

import React, { useState, useRef, useEffect, type ReactNode, JSX } from 'react';

interface ClassNamesType {
  content?: string;
}

export interface PopoverProps {
  children: ReactNode;
  target: JSX.Element;
  place?: 'right' | 'left' | 'center';
  classNames?: ClassNamesType;
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  target,
  place = 'center',
  classNames,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="popover__root">
      {React.cloneElement(target, {
        ref: triggerRef,
        onClick: toggleVisibility,
      })}
      {isVisible && (
        <div
          ref={popoverRef}
          className={`popover__content ${classNames?.content ?? ''}`.trim()}
        >
          {children}
        </div>
      )}

      <style jsx>{`
        .popover__root {
          position: relative;
          display: inline-block;
        }

        .popover__content {
          position: absolute;
          top: 100%;
          margin-top: 10px;
          z-index: 1000;
          ${place === 'left'
            ? 'left: 0;'
            : place === 'right'
              ? 'right: 0;'
              : 'left: 50%;transform: translateX(-50%);'}
        }
      `}</style>
    </div>
  );
};

export default Popover;
