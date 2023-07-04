import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import ModalDelete from "./ModalDelete";
import ModalCheck from "./ModalCheck";
import ModalSettingUser from "./ModalSettingUser";

export default function RowUsers({ item }) {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [modalSettingUser, setModalSettingUser] = useState(false);

  const openModalSettingUser = () => {
    return setModalSettingUser(true);
  };

  const closeModalSettingUser = () => {
    return setModalSettingUser(false);
  };
  const openModalDelete = () => {
    return setModalDelete(true);
  };

  const closeModalDelete = () => {
    return setModalDelete(false);
  };

  const openModalCheck = () => {
    return setModalCheck(true);
  };

  const closeModalCheck = () => {
    return setModalCheck(false);
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
        {item.email}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.status}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.nation}
      </div>
      {/* <div className="flex justify-center items-center truncate">
        {item.role}
      </div> */}
      <div className="flex justify-center text-3xl text-gray-500 items-center">
        <AiOutlinePlusCircle
          className="mx-2 hover:text-blue-500 cursor-pointer"
          onClick={() => openModalCheck()}
        />
        <FiSettings
          className="mx-2 hover:text-blue-500 cursor-pointer"
          onClick={() => openModalSettingUser()}
        />
        <AiOutlineMinusCircle
          onClick={() => openModalDelete()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
      </div>
      {modalDelete && <ModalDelete closeModalDelete={closeModalDelete} />}
      {modalCheck && <ModalCheck closeModalCheck={closeModalCheck} />}
      {modalSettingUser && (
        <div className="text-base">
          <ModalSettingUser closeModalSettingUser={closeModalSettingUser} />
        </div>
      )}
    </div>
  );
}