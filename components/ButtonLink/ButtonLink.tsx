import Link, { type LinkProps } from 'next/link';
import { type CSSProperties, type ReactNode } from 'react';

export interface ButtonLinkProps {
  as: 'button' | 'a';
  children: ReactNode;
  href?: LinkProps['href'];
  onClick?: React.MouseEventHandler<any>;
  className?: string;
  style?: CSSProperties;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  as,
  children,
  href,
  onClick,
  className,
  style,
}) =>
  as === 'a' ? (
    <Link href={href ?? ''} {...{ className, style }}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} {...{ className, style }}>
      {children}
    </button>
  );

export default ButtonLink;
