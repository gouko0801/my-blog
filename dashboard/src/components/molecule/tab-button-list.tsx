import React from 'react';
import { LinkButton } from '../atoms/link-button';

type Props = {
  selected?: string;
}
const addClass = 'text-lg text-gray-400';


export const TabButtonList: React.FC<Props> = ({ selected }) => {
  return (
    <ul className='flex p-0 my-2'>
      <LinkButton
        content={'SelfIntro'}
        href={'/self-intro'}
        className={selected === '/self-intro' ? `${addClass} underline underline-offset-0` : addClass}
      />
    </ul>
  );
};