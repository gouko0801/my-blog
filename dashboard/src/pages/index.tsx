import type { InferGetStaticPropsType, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { getAllPosts } from '../lib/api';
import { Layout } from '../components/organism/layout';
import { Date } from '../components/atoms/date';
import { Tag } from '../components/atoms/tag';
import { SubTitle } from '../components/atoms/sub-title';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <div className={styles.grid}>
        {allPosts.map((post) => (
          <a href={post.slug} className={styles.card} key={post.slug}>
            <Date date={post.date} />
            <SubTitle title={post.title} />
            <Tag tag={post.tags} />
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
