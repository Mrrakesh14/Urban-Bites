// import React from 'react'
/* eslint-disable  */
import { Link } from "react-router-dom";
// import { useState } from "react";
import Footer from "../components/footer";
import Navbar2 from "../components/navbar2";
import { fetchItemsFromCart, useCart } from "./Api";
export default function Cart() {
  const id = localStorage.getItem("userId");
  const data = useCart(id);
  console.log(data);
  let sum = 0;
  data.forEach((element) => {
    sum += element.foods.price;
  });
  console.log(sum);
  const discountPrice = (price, percent) => {
    return price - price / percent;
  };

  return (
    <div>
      <Navbar2 />
      <div className=" bg-[url('./images/bg.jpg')]  flex  flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="text-white">
          <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className=" border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="text-4xl my-5 font-Cottage font-bold tracking-tight text-white">
                Cart
              </h1>
              <div className="flow-root">
                <ul
                  role="list"
                  className="my-2 font-Cottage divide-y divide-gray-200"
                >
                  {data &&
                    data.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.foods.img}
                            alt={item.foods.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-white-900">
                              <h3>
                                <Link>{item.foods.name}</Link>
                              </h3>
                            </div>
                            <p className="mt-1 text-sm text-yellow-400">
                              {item.foods.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-white">
                              Price : {item.foods.price}.00
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="border-t font-Cottage border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-white-900">
                <p>Subtotal</p>
                <p className="line-through">{sum}.00</p>
                <p>After discount : {discountPrice(sum, 10)}.00</p>
              </div>
              <p className="mt-0.5 text-md text-white-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  to="/order"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
