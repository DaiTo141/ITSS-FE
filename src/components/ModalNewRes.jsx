import React, {useState} from "react";
import Api from "../services/axios";
import { useMediaQuery } from "@mui/material";

export default function ModalNewRes({ closeModalNewRes }) {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [web, setWeb] = useState('')
  const [phone, setPhone] = useState('')
  const [low_price, setLowPrice] = useState(0)
  const [high_price, setHighPrice] = useState(0)
  const [open_time, setOpenTime] = useState('9:00')
  const [close_time, setCloseTime] = useState(23)
  const [image, setImage] = useState('')
  const insertRes = () => {
    Api.post('/restaurants',{
        name,
        image,
        low_price,
        high_price,
        address,
        website: web,
        phone_number: phone,
        open_time,
        close_time,
        rating_average: 0
      }
    ).then((res) => {
      console.log(res)
    })
  };
  return (
    <div className="modal">
      <div className="overlay" onClick={() => closeModalNewRes()}></div>
      <div className="modal-content bg-white w-[60%]">
        <div className="w-full mt-4 mb-8 flex justify-center items-center">
          <div className="h-14 w-[70%] shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-full bg-[#81F6BE]">
            新しいレストラン
          </div>
        </div>
        <div className="w-full px-10">
          <form className="w-full" onSubmit={insertRes} style={{height: 800, overflowY:"scroll" }}>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                イメージ
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                名前
              </div>
              <div className="w-full">
                <input
                  name="name"
                  required
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                場所
              </div>
              <div className="w-full">
                <input
                  required
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                ウェブサイト
              </div>
              <div className="w-full">
                <input
                  required
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setWeb(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                電話番号
              </div>
              <div className="w-full">
                <input
                  required
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
              価格から
              </div>
              <div className="w-full">
                <input
                  required
                  type="number"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setLowPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                価格まで
              </div>
              <div className="w-full">
                <input
                  required
                  type="number"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setHighPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                開店時間
              </div>
              <div className="w-full">
                <input
                  required
                  type="number"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder={open_time}
                  onChange={(e) => setOpenTime(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                閉店時間
              </div>
              <div className="w-full">
                <input
                  required
                  type="number"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder={close_time}
                  onChange={(e) => setCloseTime(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex justify-end" style={{marginBottom: 10}}>
              <button
                type="submit"
                className="text-black bg-white hover:bg-gray-300 border border-red-500 rounded-xl font-medium shadow-md text-xl flex items-center px-10 py-4 "
              >
                追加
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
