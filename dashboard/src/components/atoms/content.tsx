import React from 'react';

type Props = {
  content: string;
};

export const Content: React.FC<Props> = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
