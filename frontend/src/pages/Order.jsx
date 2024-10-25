/* eslint-disable  */
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import { useCart, fetchUser } from "./Api";

export default function Order() {
  const id = localStorage.getItem("userId");
  const data = useCart(id);

  let sum = 0;
  data.forEach((element) => {
    sum += element.foods.price;
  });
  const discountPrice = (price, percent) => {
    return price - price / percent;
  };

  return (
    <div>
      <Navbar2 />
      <div className="mx-auto   bg-[url('./images/bg.jpg')] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" font-Cottage px-4 py-6 sm:px-6">
          <h1 className="text-2xl my-5 font-bold tracking-tight text-yellow-400">
            Order # {id}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
            Order Status : pending
          </h3>
          {data.map((item, index) => (
            <div className="flow-root" key={index}>
              <ul role="list" className=" my-1 divide-y divide-gray-200">
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      className="h-full w-full m- object-cover object-center"
                      src={item.foods.img}
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex flex-col justify-between text-base font-medium text-white">
                        <p>{item.foods.name}</p>
                        <p className=" text-yellow-400">
                          {item.foods.category}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500"></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between my-2 text-base font-medium text-white">
            <p>Subtotal</p>
            <p>{discountPrice(sum, 10)}.00</p>
          </div>
          <div className="flex justify-between my-2 text-base font-medium text-white">
            <p>Total Items in Cart</p>
            <p>{data.length} items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping Address :</p>
          <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-medium leading-6 text-white">
                  Rakesh kumar parida{" "}
                </p>
                <p className="text-sm font-medium leading-6 text-white">
                  paridarakesh30@gmail.com
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Bhubaneswar , 751003
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {" "}
                  Phone : 1234567890
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
