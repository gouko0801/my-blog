import React from 'react';
import { AllPost } from '../../lib/get-posts';
import styles from '../../styles/Home.module.css';
import { Date } from '../atoms/date';
import { Tag } from '../atoms/tag';
import { SubTitle } from '../atoms/sub-title';
import { ItemContent } from '../atoms/item-content';

type Props = {
  post: AllPost;
};

export const ArticleListItem: React.FC<Props> = ({ post }) => {
  return (
    <li className={styles.card}>
      <div className='border-solid border-b border-gray-200 pb-2 mb-2'>
        <a href={post.slug} key={post.slug} target={post.isNote ? '_blank' : '_self'} rel='noreferrer'>
          <SubTitle title={post.title} className='text-xl' />
          <Date date={post.date} />
          <ItemContent content={post.content} />
        </a>
      </div>
      <Tag tag={post.tags} />
    </li>
  );
};
