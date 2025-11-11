import axios from "axios";

const API_URL = "/api/posts";

export const getPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getPost = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axios.post(API_URL, postData);
  return res.data;
};

export const updatePost = async (id, postData) => {
  const res = await axios.put(`${API_URL}/${id}`, postData);
  return res.data;
};

export const deletePost = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
