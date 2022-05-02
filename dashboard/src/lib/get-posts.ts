import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { gunzipSync } from 'zlib';
import { createNotePosts, noteFetch } from './note-fetch';
import dayjs from 'dayjs';

export type LocalPost = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags: string;
};

export type SlugPost = LocalPost & {
  prev: string | null;
  next: string | null;
};

export type AllPost = LocalPost & {
  isNote?: boolean;
}
type Field = 'slug' | 'content' | 'title' | 'date' | 'tags';

const postsDirectory = path.join(process.cwd(), 'content');

/**
 * postsDirectory 以下のmdファイル名(拡張子除く)を取得する
 */
export const getPostSlugs = () => {
  const allMarkdowns = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allMarkdowns.map(({ name }) => name.replace('.md', ''));
};

/**
 * 指定したフィールド名から、記事のフィールドの値を取得する
 */
export const getPostBySlug = (slug: string, fields: Field[] = []) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // TODO:itemsの初期化処理の変更
  const items: AllPost = {
    slug: '',
    content: '',
    title: '',
    date: '',
    tags: '',
    isNote: false,
  };

  fields.forEach(field => {
    switch (field) {
      case 'slug':
        items[field] = slug;
        break;
      case 'content':
        items[field] = content;
        break;
      default:
        items[field] = data[field];
        break;
    }
  });
  return items;
};

/**
 * すべての記事について、指定したフィールドの値を取得して返す
 * @param fields 取得するフィールド
 */
export const getAllLocalPosts = (fields: Field[] = [], isSort: boolean = true) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  if (isSort) {
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  }
  return posts;
};

/**
 * noteを含めたすべての記事について、指定したフィールドの値を取得して返す
 * @param fields 取得するフィールド
 */
export const getAllPosts = async () => {
  let posts: AllPost[];
  const localPosts = getAllLocalPosts(['slug', 'title', 'date', 'content', 'tags']);
  const gzip = await noteFetch();
  if (gzip) {
    const { notePosts } = createNotePosts(gzip);
    const dto = localPosts.concat(notePosts);
    posts = dto.sort((a, b) => (a.date > b.date ? - 1 : 1));
  } else {
    posts = localPosts.sort((a, b) => (a.date > b.date ? - 1 : 1));
  }
  return posts;
};

