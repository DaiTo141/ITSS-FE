import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import ModalDelete from "./ModalDelete";
import ModalSettingFood from "./ModalSettingFood";

export default function RowFoods({ item }) {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalSettingFood, setModalSettingFood] = useState(false);

  const openModalSettingFood = () => {
    return setModalSettingFood(true);
  };

  const closeModalSettingFood = () => {
    return setModalSettingFood(false);
  };

  const openModalDelete = () => {
    return setModalDelete(true);
  };

  const closeModalDelete = () => {
    return setModalDelete(false);
  };
  return (
    <div className="my-5 mx-3 h-16 grid grid-cols-5 gap-2 rounded-2xl text-xl border shadow-md border-black bg-white">
      <div className="flex justify-center items-center font-thin">
        {item.id}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.name}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.description}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.price}
      </div>
      <div className="flex justify-center text-3xl text-gray-500 items-center">
        <FiSettings
          onClick={() => openModalSettingFood()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
        <AiOutlineMinusCircle
          onClick={() => openModalDelete()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
      </div>
      {modalDelete && <ModalDelete url={process.env.REACT_APP_BE_URL + '/foods/'+item.id} closeModalDelete={closeModalDelete} />}
      {modalSettingFood && (
        <div className="text-base">
          <ModalSettingFood item={item} closeModalSettingFood={closeModalSettingFood} />
        </div>
      )}
    </div>
  );
}
