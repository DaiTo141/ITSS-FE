import React from "react";
import axios from "axios"
export default function ModalNewFood({ closeModalNewFood }) {
  const insertFood = async ( event) => {
    // event.preventDefault();
    const name = event.target.name.value
    const description = event.target.description.value
    const price = event.target.price.value
    const image = event.target.image.value
    const body = {
      "name": name,
      "description": description,
      "image": image,
      "restaurant_id": 0,
      "price": +price,
      "rating_average": 0
    }
    const res = await axios.post( process.env.REACT_APP_BE_URL + '/foods',
                                    body)
    // alert( res.status);

  };
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
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder="................"
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
                  />
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
