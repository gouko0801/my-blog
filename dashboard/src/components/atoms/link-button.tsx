import Link from 'next/link';

type Props = {
  content: string;
  href: string;
  className?: string;
}

export const LinkButton :React.FC<Props> = ({ content, href, className }) => {
  return (
    <li className={className ?? 'mx-2 text-lg text-gray-400'}>
      <Link href={href}>
        <a>{content}</a>
      </Link>
    </li>
  );
};
