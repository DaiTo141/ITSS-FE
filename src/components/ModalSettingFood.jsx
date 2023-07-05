import React, { useEffect, useState } from "react";
import Api from "../services/axios";
import { useNavigate } from "react-router-dom";

export default function ModalSettingFood({ item, closeModalSettingFood }) {
  const navigate = useNavigate()
  const [name, setName] = useState(item.name)
  const [description, setDescription] = useState(item.description)
  const [restaurant_id, setRestaurantId] = useState(item.restaurant_id)
  const [image, setImage] = useState(item.image)
  const [price, setPrice] = useState(item.price)
  const [restaurantList, setRestaurantList] = useState([])
  const updateFood = () => {
    Api.patch(`/foods/${item.id}`, {
      name,
      description,
      restaurant_id,
      price: +price,
      image
    }).then(() => {
      return navigate(0, {replace: true})
    })
  };
  useEffect(() => {
    Api.get('/restaurants')
      .then(res => {
        setRestaurantList(res.data)
      })
  }, [])
  return (
    <div className="modal">
      <div className="overlay" onClick={() => closeModalSettingFood()}></div>
      <div className="modal-content bg-white w-[60%]">
        <div className="w-full mt-4 mb-8 flex justify-center items-center">
          <div className="h-14 w-[70%] shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-full bg-[#81F6BE]">
            料理を編集
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
            <form className="w-full ml-16" onSubmit={updateFood}>
              <div className="mb-8">
                <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                  名前
                </div>
                <div className="w-full">
                  <input
                    name="name"
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                  ディスクリプション
                </div>
                <div className="w-full">
                  <input
                    name="description"
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                  価格
                </div>
                <div className="w-full">
                  <input
                    name="price"
                    type="number"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                  イメージ
                </div>
                <div className="w-full">
                  <input
                    name="image"
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                  レストラン
                </div>
                <div className="w-full">
                  <select
                    required
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full"
                    value={restaurant_id}
                    onSelect={(e) => setRestaurantId(e.target.value)}
                  >
                    {restaurantList.map((value) => {
                      return (
                        <option key={value.id} value={value.id} >
                          {value.name}
                        </option>
                      )
                    })}
                  </select>
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
