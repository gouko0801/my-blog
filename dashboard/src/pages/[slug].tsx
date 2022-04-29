import { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import styles from '../styles/Home.module.css';
import { getAllPosts, getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import { Layout } from '../components/organism/layout';
import { Date } from '../components/atoms/date';
import { MainTitle } from '../components/atoms/main-title';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);
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
  const post = getPostBySlug(params.slug, ['slug', 'title', 'date', 'content']);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
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
    <Layout title={post.title}>
      <article>
        <MainTitle title={post.title} />
        <div className={styles.grid}>
          <div>
            <Date date={post.date} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
