import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getPosts = async () => {
  const { data } = await axios.get(`${url}/api/post`);
  return data.data;
};

export const getPostBySlug = async (slug) => {
  const { data } = await axios.get(`${url}/api/post`);
  // Agar backendda maxsus /api/post/:slug endpointi bo'lsa, to'g'ridan-to'g'ri o'shanga so'rov yuborish yaxshi.
  // Agar hozircha bo'lmasa, barcha postlar ichidan slug bo'yicha qidiramiz:
  const barchaPostlar = data.data;
  return barchaPostlar.find((item) => item.sluge === slug);
};
