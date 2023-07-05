import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import ModalDelete from "./ModalDelete";
import { Rating } from "@mui/material";

export default function RowReview({ item }) {
  const [modalDelete, setModalDelete] = useState(false);

  const openModalDelete = () => {
    return setModalDelete(true);
  };

  const closeModalDelete = () => {
    return setModalDelete(false);
  };
  return (
    <div className="my-5 mx-3 h-16 grid grid-cols-7 gap-2 rounded-2xl text-xl border shadow-md border-black bg-white">
      <div className="flex justify-center items-center font-thin">
        {item.id}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.user.name}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.food.name}
      </div>
      <div className="flex justify-center items-center truncate gap-x-2">
        {item.rating}
        <svg class="w-6 h-6 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </div>
      <div className="flex justify-center items-center truncate">
        {item.review_text}
      </div>
      <div className="flex justify-center items-center truncate">
        {new Date(item.review_date).toDateString()}
      </div>
      <div className="flex justify-center text-3xl text-gray-500 items-center">
        <FiSettings 
          className="mx-2 hover:text-blue-500 cursor-pointer" 
        />
        <AiOutlineMinusCircle
          onClick={() => openModalDelete()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
      </div>
      {modalDelete && <ModalDelete closeModalDelete={closeModalDelete} />}
    </div>
  );
}
