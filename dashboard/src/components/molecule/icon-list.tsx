import React from 'react';
import { Icon } from '../atoms/icon';
import { IconListItem } from '../../interface/icon-list-item';

const iconList: IconListItem[] = [
  {
    className: 'ri-twitter-fill mx-1',
    href: 'https://twitter.com/portrait_timer',
  },
  {
    className: 'ri-github-fill mx-1',
    href: 'https://github.com/gouko0801',
  },
];

export const IconList = () => {
  return (
    <ul className='list-style-type: none flex'>
      {iconList.map((icon, i) => (
        <Icon key={i} className={icon.className} href={icon.href} />
      ))}
    </ul>
  );
};
