// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const url = "http://localhost:5000";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
memories-fullstack