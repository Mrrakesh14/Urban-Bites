/* eslint-disable  */
import axios from "axios";
import { useEffect, useState } from "react";

export const foodItems = async () => {
  const res = await axios.get("http://localhost:8000/users/foods/");
  return res.data;
};
export const foodItemsById = async (id) => {
  const res = await axios.get("http://localhost:8000/users/foods/" + id);
  return res.data;
};
export const fetchUser = async (id) => {
  const res = await axios.get("http://localhost:8000/users/" + id);
  console.log(res.data);

  return res.data;
};

export const addToCart = async (item) => {
  const response = axios.post(`http://localhost:8000/users/cart`, { item });
  console.log(response.data);
};
export const fetchItemsFromCart = async (id) => {
  const res = await axios.get("http://localhost:8000/users/carts/" + id);
  return res.data;
};
export function useCart(id) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function getData(id) {
      const res = await axios.get("http://localhost:8000/users/carts/" + id);
      console.log(res.data);
      setCart(res.data);
    }
    getData(id);
  }, []);
  return cart;
}
