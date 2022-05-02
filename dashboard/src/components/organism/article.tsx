import React from 'react';
import { SlugPost } from '../../lib/get-posts';
import { Date } from '../atoms/date';
import { Tag } from '../atoms/tag';
import { SubTitle } from '../atoms/sub-title';
import { Content } from '../atoms/content';
import { Pager } from '../molecule/pager';

type Props = {
  post: SlugPost;
};

export const Article: React.FC<Props> = ({ post }) => {
  return (
    <article className='container pb-16 mx-auto bg-white p-8 w-1/2 max-w-800 min-w-400'>
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
      <Pager
        prev={post.prev}
        next={post.next}
      />
    </article>
  );
};
