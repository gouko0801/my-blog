import React from 'react';
import { LinkButton } from '../atoms/link-button';

type Props = {
  selected?: string;
}
const addClass = 'text-lg text-gray-400 mr-6';


export const TabButtonList: React.FC<Props> = ({ selected }) => {
  return (
    <ul className='flex p-0 my-2'>
      <LinkButton
        content={'Home'}
        href={'/'}
        className={addClass}
      />
      <LinkButton
        content={'Posts'}
        href={'/posts'}
        className={addClass}
      />
      <LinkButton
        content={'Note'}
        href={'/notes'}
        className={addClass}
      />
      <LinkButton
        content={'Profile'}
        href={'/profile'}
        className={addClass}
      />
    </ul>
  );
};