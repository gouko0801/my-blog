import { noteFetch } from '../../lib/note-fetch';

const Note = async (req: any, res: any) => {
  const page = req.query ? Number(req.query.page) : 1;
  const gzip = await noteFetch(page);
  const json = await gzip.json();
  res.json(json);
};

export default Note;
