import { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Article } from '../components/organism/article';
import { Layout } from '../components/organism/layout';
import { getPostBySlug } from '../lib/api';
import { markdownToHtml } from '../lib/markdown-to-html';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const post = getPostBySlug('selfintro', ['slug', 'title', 'date', 'content', 'tags']);
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
        prev: null,
        next: null,
      },
    },
  };
};

const SelfIntro: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Layout
      title={post.title}
      path={router.pathname}
    >
      <Article
        post={post}
      />
    </Layout>
  );
};

export default SelfIntro;