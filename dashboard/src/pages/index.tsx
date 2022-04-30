import type { InferGetStaticPropsType, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { getAllPosts } from '../lib/api';
import { Layout } from '../components/organism/layout';
import { Date } from '../components/atoms/date';
import { Tag } from '../components/atoms/tag';
import { SubTitle } from '../components/atoms/sub-title';
import { ArticleList } from '../components/molecule/article-list';

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
