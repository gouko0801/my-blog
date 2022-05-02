import { micromark } from 'micromark';

/**
 * Markdown を解析して HTML にして返す
 * @param markdown Markdown ファイル名
 * @returns HTML
 */
export const markdownToHtml = async (markdown: string) => {
  return micromark(markdown, { allowDangerousHtml: true });
};
