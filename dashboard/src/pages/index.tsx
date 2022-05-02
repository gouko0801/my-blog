import type { InferGetStaticPropsType, NextPage } from 'next';
import { getAllLocalPosts } from '../lib/api';
import { Layout } from '../components/organism/layout';
import { ArticleList } from '../components/molecule/article-list';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pager } from '../components/molecule/pager';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
// 1ページ辺りの記事の最大値
const LIMIT = 5;

export const getStaticProps = async () => {
  const allPosts = getAllLocalPosts(['slug', 'title', 'date', 'content', 'tags']);
  return {
    props: { allPosts },
  };
};

const Index: NextPage<Props> = ({ allPosts }) => {
  const router = useRouter();
  const query = router.query;
  const [page, setPage] = useState(1);
  const pageMax = Math.ceil(allPosts.length / LIMIT);
  const pagePosts = allPosts.filter((_, i) => i >= page * LIMIT - LIMIT && i <= page * LIMIT - 1);
  const prev = page < pageMax ? `/?page=${page + 1}`: null;
  const next = page > 1 ? `/?page=${page - 1}`: null;

  useEffect(() => {
    if (router.isReady) {
      const newPage = query.page ? Number(query.page) : 1;
      setPage(newPage);
    }
  }, [query, router]);

  return (
    <Layout>
      <ArticleList
        posts={pagePosts}
      />
      <Pager
        prev={prev}
        next={next}
      />
    </Layout>
  );
};

export default Index;