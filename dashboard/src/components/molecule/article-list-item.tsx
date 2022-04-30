import React from 'react';
import { Post } from '../../lib/api';
import styles from '../../styles/Home.module.css';
import { Date } from '../atoms/date';
import { Tag } from '../atoms/tag';
import { SubTitle } from '../atoms/sub-title';
import { ItemContent } from '../atoms/item-content';

type Props = {
  post: Post;
};

export const ArticleListItem: React.FC<Props> = ({ post }) => {
  return (
    <li className={styles.card}>
      <div className='border-solid border-b-2 border-gray-200 pb-2 mb-2'>
        <a href={post.slug} key={post.slug}>
          <SubTitle title={post.title} />
          <Date date={post.date} />
          <ItemContent
            content={post.content}
          />
        </a>
      </div>
      <Tag tag={'test'} />
    </li>
  );
};
