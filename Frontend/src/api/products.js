import axios from "axios";
import { API_CONFIG } from "../constants/Api.jsx";
export const fetchProducts = async () => {
  const res = await axios.get(API_CONFIG.productsEndpoint);
  return res.data;
};
