import axios from "axios";

const API_URL = "http://localhost:5000/api/influencers";

export const getInfluencers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createInfluencer = async (data: any) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateInfluencer = async (id: string, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};
