import React from "react";
import axios from "axios"

export default function ModalDelete({ url, closeModalDelete }) {
  const deleteFood = async()=>{
    // const res = await axios.delete( url);
    // alert( res.status);
    closeModalDelete();
  };
  return (
    <div className="modal">
      <div className="overlay" onClick={() => closeModalDelete()}></div>
      <div className="modal-content bg-[#C6FFC8]">
        <div className="relative w-full max-w-md max-h-full">
          <div className="p-6 text-center">
            <h3 className="mb-7 text-2xl text-black dark:text-gray-400">
              この行を削除しますか?
            </h3>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={()=>deleteFood()}
                className="text-black bg-white hover:bg-gray-300 border border-black rounded-full font-medium shadow-md text-xl flex items-center px-8 py-1 "
              >
                はい
              </button>
              <button
                type="button"
                onClick={() => closeModalDelete()}
                className="text-black bg-white hover:bg-gray-300 border border-black rounded-full font-medium shadow-md text-xl flex items-center px-8 py-1 "
              >
                いいえ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
