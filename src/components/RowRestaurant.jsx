import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import ModalDelete from "./ModalDelete";
import ModalSettingRes from "./ModalSettingRes";

export default function RowRestaurant({ item }) {
  const [modalDelete, setModalDelete] = useState(false);

  const [modalSettingRes, setModalSettingRes] = useState(false);

  const openModalDelete = () => {
    return setModalDelete(true);
  };

  const closeModalDelete = () => {
    return setModalDelete(false);
  };

  const openModalSettingRes = () => {
    return setModalSettingRes(true);
  };

  const closeModalSettingRes = () => {
    return setModalSettingRes(false);
  };

  return (
    <div className="my-5 mx-3 h-16 grid grid-cols-6 gap-2 rounded-2xl text-xl border shadow-md border-black bg-white">
      <div className="flex justify-center items-center font-thin">
        {item.id}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.name}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.address}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.low_price} - {item.high_price}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.rating_average}
      </div>
      <div className="flex justify-center text-3xl text-gray-500 items-center">
        <FiSettings
          onClick={() => openModalSettingRes()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
        <AiOutlineMinusCircle
          onClick={() => openModalDelete()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
      </div>

      {modalDelete && <ModalDelete closeModalDelete={closeModalDelete} />}
      {modalSettingRes && (
        <div className="text-base">
          <ModalSettingRes closeModalSettingRes={closeModalSettingRes} />
        </div>
      )}
    </div>
  );
}
