import type { InferGetStaticPropsType, NextPage } from 'next';
import { getAllPosts } from '../lib/api';
import { Layout } from '../components/organism/layout';
import { ArticleList } from '../components/molecule/article-list';
import { Pager } from '../components/molecule/pager';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'content']);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <ArticleList
        posts={allPosts}
      />
    </Layout>
  );
};

export default Home;
