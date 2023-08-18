import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/products");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
