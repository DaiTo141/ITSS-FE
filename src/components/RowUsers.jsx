import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMinusCircle, AiFillUnlock, AiFillLock } from "react-icons/ai";
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
        {
          item.status === 1 && 
          <div style={{color: "blue"}}>オンライン</div>
        }
        {
          item.status === 0 && 
          <div style={{color: "red"}}>ブロック</div>
        }
      </div>
      <div className="flex justify-center items-center truncate">
        {item.nation === 'jp' &&
        <svg xmlns="http://www.w3.org/2000/svg" style={{background:"#eee", width: 40, height:28}}>
          <circle cx="50%" cy="50%" r="24%" fill="#bc002d"/>
        </svg>
        }
        {item.nation === 'vi' &&
        <svg width="40" height="28" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect width="30" height="20" fill="#da251d"/>
          <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0"/>
        </svg>                    
        }
      </div>
      {/* <div className="flex justify-center items-center truncate">
        {item.role}
      </div> */}
      <div className="flex justify-center text-3xl text-gray-500 items-center">
        {item.status === 0 && 
          <AiFillLock
            className="mx-2 hover:text-blue-500 cursor-pointer"
            onClick={() => openModalCheck()}
          />
        }
        {item.status === 1 && 
          <AiFillUnlock
            className="mx-2 hover:text-blue-500 cursor-pointer"
            onClick={() => openModalCheck()}
          />
        }
        <FiSettings
          className="mx-2 hover:text-blue-500 cursor-pointer"
          onClick={() => openModalSettingUser()}
        />
        <AiOutlineMinusCircle
          onClick={() => openModalDelete()}
          className="mx-2 hover:text-blue-500 cursor-pointer"
        />
      </div>
      {modalDelete && <ModalDelete url={'/users/'+item.id} closeModalDelete={closeModalDelete} />}
      {modalCheck && <ModalCheck item={item} closeModalCheck={closeModalCheck} />}
      {modalSettingUser && (
        <div className="text-base">
          <ModalSettingUser item={item} closeModalSettingUser={closeModalSettingUser} />
        </div>
      )}
    </div>
  );
}
