import React from 'react';
import { LinkButton } from '../atoms/link-button';

type Props = {
  selected?: string;
}
const addClass = 'text-lg text-gray-400 mr-4';


export const TabButtonList: React.FC<Props> = ({ selected }) => {
  return (
    <ul className='flex p-0 my-2'>
      <LinkButton
        content={'Home'}
        href={'/'}
        className={!selected ? `${addClass} underline underline-offset-0 mr-2` : addClass}
      />
      <LinkButton
        content={'SelfIntro'}
        href={'/self-intro'}
        className={selected === '/self-intro' ? `${addClass} underline underline-offset-0 mr-2` : addClass}
      />
    </ul>
  );
};