import React, { useState } from "react";
import Api from "../services/axios";
import { useNavigate } from "react-router-dom";

export default function ModalSettingRes({ item, closeModalSettingRes }) {
  const navigate = useNavigate()
  const [name, setName] = useState(item.name)
  const [address, setAddress] = useState(item.address)
  const [low_price, setLowPrice] = useState(item.low_price)
  const [high_price, setHighPrice] = useState(item.high_price)
  const [web, setWeb] = useState(item.website)
  const [open_time, setOpenTime] = useState(item.open_time)
  const [close_time, setCloseTime] = useState(item.close_time)
  const [image, setImage] = useState(item.image)
  const [phone, setPhone] = useState(item.phone_number)
  const updateRes = () => {
    Api.patch('/restaurants/' + item.id,{
      name,
      image,
      address,
      website:web,
      low_price: +low_price,
      high_price: +high_price,
      open_time,
      close_time,
    }
    ).then(() => {
      return navigate(0, {replace: true})
    })
  };
  return (
    <div className="modal">
      <div className="overlay" onClick={() => closeModalSettingRes()}></div>
      <div className="modal-content bg-white w-[60%]">
        <div className="w-full mt-4 mb-8 flex justify-center items-center">
          <div className="h-14 w-[70%] shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-full bg-[#81F6BE]">
            レストランを編集
          </div>
        </div>
        <div className="w-full px-10">
          <div className="w-full flex ">
            <div className="object-cover">
              <img
                src={image}
                alt=""
                className="h-40 w-72  mb-5 rounded-[32px]"
              />
            </div>
            <form className="w-full ml-16" onSubmit={updateRes} style={{height: 800, overflowY:"scroll" }}>
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={name}
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={address}
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={web ? web : '.............'}
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={phone}
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={low_price}
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={high_price}
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
                    type="time"
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
                    type="time"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={close_time}
                    onChange={(e) => setCloseTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="text-black bg-white hover:bg-gray-300 border border-red-500 rounded-full font-medium shadow-md text-xl flex items-center px-10 py-4 "
                >
                  編集
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
