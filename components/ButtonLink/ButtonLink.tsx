import Link, { type LinkProps } from 'next/link';
import { type ReactNode } from 'react';

export interface ButtonLinkProps {
  as: 'button' | 'a';
  children: ReactNode;
  href?: LinkProps['href'];
  onClick?: React.MouseEventHandler<any>;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  as,
  children,
  href,
  onClick,
  className,
}) =>
  as === 'a' ? (
    <Link href={href ?? ''} {...{ className }}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} {...{ className }}>
      {children}
    </button>
  );

export default ButtonLink;
