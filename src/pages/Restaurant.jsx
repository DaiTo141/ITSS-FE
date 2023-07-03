import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import RowRestaurant from "../components/RowRestaurant";
import Pagination from "../components/Pagination";
import ModalNewRes from "../components/ModalNewRes";

export default function Restaurant() {
  const [modalNewRes, setModalNewRes] = useState(false);

  const openModalNewRes = () => {
    return setModalNewRes(true);
  };

  const closeModalNewRes = () => {
    return setModalNewRes(false);
  };

  const listItems = [
    {
      id: 0,
      name: "Nhà hàng bánh cuốn",
      address: "Hà nội",
      price: 3000,
      rating: "5 sao",
    },
    {
      id: 1,
      name: "Nhà hàng bún",
      address: "Hà nội",
      price: 3000,
      rating: "5 sao",
    },
    {
      id: 2,
      name: "Nhà hàng phở",
      address: "Đà nẵng , hà nội, hồ chí minh",
      price: 3000,
      rating: "5 sao",
    },
    {
      id: 3,
      name: "Nhà hàng cua",
      address: "Đà nẵng",
      price: 3000,
      rating: "5 sao",
    },
  ];
  return (
    <div className="pt-20 mx-20">
      <div className="flex justify-between ">
        <form className="flex items-center">
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt className="text-2xl text-gray-500" />
            </div>
            <input
              type="text"
              id="simple-search"
              className=" border shadow-md border-black text-gray-900 text-xl rounded-xl block w-full pl-20 py-3 pr-10  "
              placeholder="レストランの名前"
            />
          </div>
          <div className="h-14 w-16 shadow-md ml-5 flex justify-center items-center border border-black rounded-xl bg-white">
            <MdOutlineKeyboardArrowDown className="text-4xl" />
          </div>
        </form>
        <div>
          <div
            onClick={() => openModalNewRes()}
            className="h-14 w-32 shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-xl bg-white"
          >
            <AiOutlinePlusCircle className="text-4xl mr-3" />
            追加
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-full h-16 rounded-2xl text-xl border shadow-md border-black bg-white justify-items-center grid grid-cols-6 gap-2">
          <div className="flex justify-center items-center font-thin">ID</div>
          <div className="flex justify-center items-center">名前</div>
          <div className="flex justify-center items-center">場所</div>
          <div className="flex justify-center items-center">価格</div>
          <div className="flex justify-center items-center">レーティング</div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
      <div className="mt-16">
        <div className="w-full grid grid-cols-1 rounded-2xl text-xl border shadow-md border-black  bg-white ">
          {listItems.map((item) => {
            return (
              <div key={item.id}>
                <RowRestaurant item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="h-10 border shadow-md border-black w-auto text-center  rounded-full  bg-white">
          <Pagination pageSize={8} pages={3} />
        </div>
      </div>

      {modalNewRes && <ModalNewRes closeModalNewRes={closeModalNewRes} />}
    </div>
  );
}