const fetch = require('isomorphic-fetch');
import { gunzipSync } from 'zlib';
import { AllPost } from './get-posts';
import dayjs from 'dayjs';
import useSWR from 'swr';

const NOTE_URL = 'https://note.com/portrait_timer/n/';

export const noteFetch = async (page: number = 1) => {
  return await fetch(`https://note.com/api/v2/creators/portrait_timer/contents?kind=note&page=${page}`, {
    method: 'GET',
  });
};

export const useNote = (page: number = 1) => {
  return useSWR(`https://note.com/api/v2/creators/portrait_timer/contents?kind=note&page=${page}`);
};

/**
 * gzip圧縮されたnote APIのレスポンスからnotePostsを作成する
 */
 export const createNotePosts = (res: any): { notePosts: AllPost[], isLastPage: boolean } => {
  const notePosts: AllPost[] = res.data.contents.map((d: any) => {
    return {
      slug: `${NOTE_URL}${d.key}`,
      content: d.body,
      title: d.name,
      date: dayjs(d.publishAt).format('YYYY/MM/DD'),
      tags: '#Note',
      isNote: true,
    } as AllPost;
  });
  const isLastPage: boolean = res.data.isLastPage;
  return { notePosts, isLastPage };
};
