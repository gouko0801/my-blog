import type { NextPage } from 'next';
import { createNotePosts } from '../lib/note-fetch';
import { Layout } from '../components/organism/layout';
import { ArticleList } from '../components/molecule/article-list';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pager } from '../components/molecule/pager';
const fetch = require('isomorphic-fetch');
import { AllPost } from '../lib/get-posts';

const Notes: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const [posts, setPosts] = useState<AllPost[]>([]);
  const [prev, setPrev] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const fetchData = async (page: number) => {
        const res = await fetch(`/api/note?page=${page}`);
        const json = await res.json();
        const { notePosts, isLastPage } = createNotePosts(json);
        setPosts(notePosts);
        setPrev(notePosts.length === 0 || isLastPage ? null : `/notes?page=${page + 1}`);
        setNext(page > 1 && notePosts.length > 0 ? `/notes?page=${page - 1}` : null);
      };
      const newPage = query.page ? Number(query.page) : 1;
      fetchData(newPage);
    }
  }, [query, router]);

  return (
    <Layout>
      <ArticleList posts={posts} />
      <Pager prev={prev} next={next} />
    </Layout>
  );
};

export default Notes;
