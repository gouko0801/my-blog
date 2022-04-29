import React from 'react';
import { Post } from '../../lib/api';
import styles from '../../styles/Home.module.css';
import { Date } from '../atoms/date';
import { Tag } from '../atoms/tag';
import { SubTitle } from '../atoms/sub-title';

type Props = {
  post: Post;
};

export const ArticleListItem: React.FC<Props> = ({ post }) => {
  return (
    <li>
      <a href={post.slug} className={styles.card} key={post.slug}>
        <Date date={post.date} />
        <SubTitle title={post.title} />
        <Tag tag={post.tags} />
      </a>
    </li>
  );
};
