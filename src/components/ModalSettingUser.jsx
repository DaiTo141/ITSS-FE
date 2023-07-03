import React from "react";

export default function ModalSettingUser({ closeModalSettingUser }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={() => closeModalSettingUser()}></div>
      <div className="modal-content bg-white w-[60%]">
        <div className="w-full mt-4 mb-8 flex justify-center items-center">
          <div className="h-14 w-[70%] shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-full bg-[#81F6BE]">
            ユーザーを編集
          </div>
        </div>
        <div className="w-full px-10">
          <form className="w-full">
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
                メール
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
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                ロール
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
                className="text-black bg-white hover:bg-gray-300 border border-red-500 rounded-xl font-medium shadow-md text-xl flex items-center px-10 py-4 "
              >
                編集
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
