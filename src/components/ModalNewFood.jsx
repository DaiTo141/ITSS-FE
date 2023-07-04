import React, { useEffect, useState } from "react";
import Api from "../services/axios";

export default function ModalNewFood({ closeModalNewFood }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [restaurant_id, setRestaurantId] = useState(0)
  const [restaurantList, setRestaurantList] = useState([])
  const insertFood = () => {
    Api.post('/foods',{
        name,
        description,
        image,
        restaurant_id,
        price: +price,
        rating_average: 0
      }
    ).then((res) => {
      console.log(res)
    })
  };
  useEffect(() => {
    Api.get(
      '/restaurants'
    ).then((res) => {
      setRestaurantList(res.data)
    })
  }, [])
  return (
    <div className="modal">
      <div className="overlay" onClick={() => closeModalNewFood()}></div>
      <div className="modal-content bg-white w-[60%]">
        <div className="w-full mt-4 mb-8 flex justify-center items-center">
          <div className="h-14 w-[70%] shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-full bg-[#81F6BE]">
            新しい料理
          </div>
        </div>
        <div className="w-full px-10">
          <form className="w-full" onSubmit={insertFood}>
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
                ディスクリプション
              </div>
              <div className="w-full">
                <input
                  name="description"
                  required
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setDescription(e.target.value)}
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
                  required
                  type="number"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setPrice(e.target.value)}
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
                  required
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                レストラン
              </div>
              <div className="w-full">
                <select
                  name="image"
                  required
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  onChange={(e) => setRestaurantId(e.target.value)}
                >
                  {restaurantList.map((value) => {
                    return (
                    <option value={value.id} >
                      {value.name}
                    </option>
                    )
                  })

                  }
                </select>
              </div>
            </div>
            <div className="w-full flex justify-end">
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
