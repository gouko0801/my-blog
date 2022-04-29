import React from 'react';
import { Post } from '../../lib/api';
import styles from '../../styles/Home.module.css';
import { ArticleListItem } from './article-list-item';

type Props = {
  posts: Post[];
};

export const ArticleList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post, i) => (
        <ArticleListItem key={i} post={post} />
      ))}
    </ul>
  );
};
