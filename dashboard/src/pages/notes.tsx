import type { InferGetStaticPropsType, NextPage } from 'next';
import { createNotePosts, getAllLocalPosts } from '../lib/api';
import { Layout } from '../components/organism/layout';
import { ArticleList } from '../components/molecule/article-list';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pager } from '../components/molecule/pager';
import { noteFetch } from '../lib/note-fetch';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
// 1ページ辺りの記事の最大値
const LIMIT = 12;

export const getStaticProps = async () => {
  const gzip = await noteFetch();
  const { notePosts, isLastPage } = createNotePosts(gzip);
  return {
    props: { notePosts, isLastPage },
  };
};

const Posts: NextPage<Props> = ({ notePosts, isLastPage }) => {
  const router = useRouter();
  const query = router.query;
  const [posts, setPosts] = useState(notePosts);
  const [page, setPage] = useState(1);
  const pageMax = Math.ceil(posts.length / LIMIT);
  const pagePosts = posts.filter((_, i) => i >= page * LIMIT - LIMIT && i <= page * LIMIT - 1);
  const prev = page < pageMax ? `/notes?page=${page + 1}` : null;
  const next = isLastPage ? null : `/notes?page=${page - 1}`;

  useEffect(() => {
    if (router.isReady) {
      const fetchData = async (page: number) => {
        const gzip = await noteFetch(`page=${page}`);
        const { notePosts, isLastPage } = createNotePosts(gzip);
        setPosts(notePosts);
      };
      const newPage = query.page ? Number(query.page) : 1;
      fetchData(newPage);
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

export default Posts;