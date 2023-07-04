import React from "react";
import axios from "axios"


export default function ModalSettingFood({ item, closeModalSettingFood }) {
  const updateFood = async ( event) => {
    // event.preventDefault();
    const name = event.target.name.value
                  ?event.target.name.value
                  :item.name;
    const description = event.target.description.value
                        ?event.target.description.value
                        :item.description;
    const price = event.target.price.value
                  ?event.target.price.value
                  :item.price;
    const image = event.target.image.value
                  ?event.target.image.value
                  :item.image;
    const body = {
      "name": name,
      "description": description,
      "image": image,
      "restaurant_id": item.restaurant_id,
      "price": +price,
      "rating_average": item.rating_average
    }
    const res = await axios.patch( process.env.REACT_APP_BE_URL + '/foods/' + item.id,
                                    body)
    // alert( res.status);
    console.log( res);

  };
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
                src="https://vcdn-dulich.vnecdn.net/2020/01/17/26158077-167284690667495-84349-7736-6542-1579256216.jpg"
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
                    placeholder={item.name}
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
                    placeholder={item.description}
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
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder={item.price}
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
                    placeholder={item.image}
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
