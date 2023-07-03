import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import ModalDelete from "./ModalDelete";

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
        {item.name}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.food}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.rating}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.review}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.date}
      </div>
      <div className="flex justify-center text-3xl text-gray-500 items-center">
        <FiSettings className="mx-2 hover:text-blue-500 cursor-pointer" />
        <AiOutlineMinusCircle
          onClick={() => openModalDelete()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
      </div>
      {modalDelete && <ModalDelete closeModalDelete={closeModalDelete} />}
    </div>
  );
}
