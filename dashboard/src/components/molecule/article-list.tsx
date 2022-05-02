import React from 'react';
import { AllPost } from '../../lib/get-posts';
import styles from '../../styles/Home.module.css';
import { ArticleListItem } from './article-list-item';

type Props = {
  posts: AllPost[];
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
