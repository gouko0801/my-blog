import { PagerButton } from '../atoms/pager-button';
import { PagerButtonItem } from '../../interface/pager-button-item';

const buttonItem: PagerButtonItem[] = [
  {
    name: '',
    href: '/',
  },
  {
    name: '',
    href: '/',
  },
];

export const Pager = () => {
  return (
    <ul className='flex p-0 mt-8 mb-4'>
      {buttonItem.map((b, i) => {
        return (
          <PagerButton
            key={i}
            button={b}
          />
        );
      })}
    </ul>
  );
};
