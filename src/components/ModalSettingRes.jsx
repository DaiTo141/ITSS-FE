import React from "react";

export default function ModalSettingRes({ closeModalSettingRes }) {
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
                src="https://vcdn-dulich.vnecdn.net/2020/01/17/26158077-167284690667495-84349-7736-6542-1579256216.jpg"
                alt=""
                className="h-40 w-72  mb-5 rounded-[32px]"
              />
            </div>
            <form className="w-full ml-16">
              <div className="mb-8">
                <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                  名前
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                    placeholder="................"
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
                    placeholder="................"
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
                    placeholder="................"
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
                    placeholder="................"
                  />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="button"
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
