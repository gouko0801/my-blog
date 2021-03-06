import { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Article } from '../components/organism/article';
import { Layout } from '../components/organism/layout';
import { getPostBySlug } from '../lib/get-posts';
import { markdownToHtml } from '../lib/markdown-to-html';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const post = getPostBySlug('about-raiku', ['slug', 'title', 'date', 'content', 'tags']);
  const content = await markdownToHtml(post.content);
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

const Profile: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <Layout title={post.title} path={router.pathname}>
      <Article post={post} />
    </Layout>
  );
};

export default Profile;
