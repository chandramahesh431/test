import axios from "axios";

export const getProducts = async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3000/products"
  });
  return response.data;
};
