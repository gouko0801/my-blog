import Link from 'next/link';
import { PagerButtonItem } from '../../interface/pager-button-item';

type Props = {
  button: PagerButtonItem
}

export const PagerButton :React.FC<Props> = ({ button }) => {
  return (
    <li className='mx-2 text-lg'>
      <Link href={button.href}>
        <a>{button.name}</a>
      </Link>
    </li>
  );
};
