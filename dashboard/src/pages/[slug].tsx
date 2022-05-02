import { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getAllLocalPosts, getAllPosts } from '../lib/get-posts';
import { markdownToHtml } from '../lib/markdown-to-html';
import { Layout } from '../components/organism/layout';
import { Article } from '../components/organism/article';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllLocalPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const posts = await getAllPosts();
  const index = posts.findIndex(p => p.slug === params.slug);
  // 前後の記事のslugを取得する
  const prevNext = {
    next: index - 1 > -1 ? posts[index - 1].slug : null,
    prev: index + 1 < posts.length ? posts[index + 1].slug : null,
  };
  // Markdown を HTML に変換する
  const content = await markdownToHtml(posts[index].content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...posts[index],
        ...prevNext,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout
      title={post.title}
    >
      <Article
        post={post}
      />
    </Layout>
  );
};

export default Post;
