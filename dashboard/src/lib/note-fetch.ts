const fetch = require('isomorphic-fetch');
const zlib = require('zlib');
const { pipeline } = require('stream');

export const noteFetch = async (query?: string) => {
  return await fetch(`https://note.com/api/v2/creators/portrait_timer/contents?${query ?? 'kind=note&page=1'}`, {
    method: 'GET',
  });
};
