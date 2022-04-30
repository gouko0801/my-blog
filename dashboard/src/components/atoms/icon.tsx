import Link from 'next/link';
import React from 'react';
import 'remixicon/fonts/remixicon.css';

type Props = {
  className: string;
  href: string;
};

export const Icon: React.FC<Props> = ({ className, href }) => {
  return (
    <li className=''>
      <Link href={href}>
        <a target='_blank'>
          <i className={className}></i>
        </a>
      </Link>
    </li>
  );
};
