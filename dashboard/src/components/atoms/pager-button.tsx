import Link from 'next/link';
import { PagerButtonItem } from '../../interface/pager-button-item';

type Props = {
  content: string;
  href: string;
}

export const PagerButton :React.FC<Props> = ({ content, href }) => {
  return (
    <li className='mx-2 text-lg text-gray-400'>
      <Link href={href}>
        <a>{content}</a>
      </Link>
    </li>
  );
};
