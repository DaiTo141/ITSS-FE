import React, { useState } from "react";
import RowInfo from "../components/RowInfo";
import ModalDelete from "../components/ModalDelete";

export default function Info() {
  const listItems = [
    {
      id: 0,
      nameFood: "bánh cuốn",
      name: "Nhà hàng bánh cuốn",
      rating: "5 sao",
      comment: "ok",
    },
    {
      id: 1,
      nameFood: "bánh cuốn",
      name: "Nhà hàng bánh cuốn",
      rating: "5 sao",
      comment: "ok",
    },
    {
      id: 2,
      nameFood: "bánh cuốn",
      name: "Nhà hàng bánh cuốn",
      rating: "5 sao",
      comment: "ok",
    },
    {
      id: 3,
      nameFood: "bánh cuốn",
      name: "Nhà hàng bánh cuốn",
      rating: "5 sao",
      comment: "ok",
    },
  ];

  const [input, setInput] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => {
    return setModalDelete(true);
  };

  const closeModalDelete = () => {
    return setModalDelete(false);
  };
  const handleClick = () => {
    setInput(!input);
  };

  const checkDisable = () => {
    if (input) {
      return false;
    } else return true;
  };
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 mx-32 my-20 ">
        <div className="col-span-1">
          <img
            src="https://vcdn-dulich.vnecdn.net/2020/01/17/26158077-167284690667495-84349-7736-6542-1579256216.jpg"
            alt=""
            className="h-64 w-60 mb-5 rounded-full
            "
          />
        </div>
        <div className="w-3/4 col-span-2">
          <div className="mb-12">
            <input
              type="text"
              className=" border shadow-md w-full disabled:bg-white border-red-500 p-3 text-center text-gray-900  rounded-full "
              defaultValue="名前"
              disabled={checkDisable()}
            />
          </div>
          <div className="mb-12">
            <input
              type="text"
              className=" border shadow-md w-full disabled:bg-white border-red-500 p-3 text-center  text-gray-900  rounded-full "
              defaultValue="メール"
              disabled={checkDisable()}
            />
          </div>
          <div className="w-full flex justify-between">
            <div>
              <button
                onClick={handleClick}
                type="button"
                className="text-black bg-white hover:bg-gray-300 border border-red-500 rounded-full font-medium shadow-md text-xl flex items-center px-20 py-3 "
              >
                編集
              </button>
            </div>
            <div>
              <button
                onClick={() => openModalDelete()}
                type="button"
                className="text-black bg-white hover:bg-gray-300 border border-red-500 rounded-full font-medium shadow-md text-xl flex items-center px-20 py-3 "
              >
                除く
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-32">
        <div className=" mb-16 h-16 flex justify-center items-center rounded-2xl text-xl border shadow-md border-black bg-white">
          私のレビューリスト
        </div>

        {listItems.map((item) => {
          return (
            <div key={item.id}>
              <RowInfo item={item} />
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="h-10 border shadow-md border-black w-auto text-center  rounded-full  bg-white">
        </div>
      </div>
      {modalDelete && <ModalDelete closeModalDelete={closeModalDelete} />}
    </div>
  );
}
