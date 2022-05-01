import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../pages/[slug]';

export type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags: string;
};

export type SlugPost = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags: string;
  prev: string | null;
  next: string | null;
};
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

  // TODO:typeの初期化処理の変更
  const items: Post = {
    slug: '',
    content: '',
    title: '',
    date: '',
    tags: '',
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
export const getAllPosts = (fields: Field[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields)).sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
};
