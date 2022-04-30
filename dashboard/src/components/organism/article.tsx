import React from 'react';
import { Post } from '../../lib/api';
import styles from '../../styles/Home.module.css';
import { Date } from '../atoms/date';
import { Tag } from '../atoms/tag';
import { SubTitle } from '../atoms/sub-title';
import { Content } from '../atoms/content';
import { ItemContent } from '../atoms/item-content';

type Props = {
  post: Post;
};

export const Article: React.FC<Props> = ({ post }) => {
  return (
    <article className='container mx-auto'>
      <div className='mb-12'>
        <SubTitle
          title={post.title}
        />
        <Date
          date={post.date}
        />
      </div>
      <div className='mb-12'>
        <Content
          content={post.content}
        />
      </div>
      <Tag
        tag={post.tags}
      />
    </article>
  );
};