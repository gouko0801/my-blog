import Link from 'next/link';
import React from 'react';
import 'remixicon/fonts/remixicon.css';

type Props = {
  className: string;
  href: string;
};

export const Icon: React.FC<Props> = ({ className, href }) => {
  return (
    <Link href={href}>
      <a>
        <i className={className}></i>
      </a>
    </Link>
  );
};
