import React, {useState} from "react";
import Api from "../services/axios";
import { useNavigate } from "react-router-dom";

export default function ModalSettingUser({item, closeModalSettingUser }) {
  const navigate = useNavigate()
  const [name, setName] = useState(item.name)
  const [email, setEmail] = useState(item.email)
  const [image, setImage] = useState(item.image)
  const [nation, setNation] = useState(item.nation)
  const updateUser = () => {
    Api.patch(`/users/${item.id}`, {
      name,
      email,
      nation,
      image
    }).then(() => {
      return navigate(0, {replace: true})
    })
  };
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
          <form className="w-full" onSubmit={updateUser}>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                名前
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder={name}
                  onChange={e => {setName(e.target.value)}}
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
                  placeholder={email}
                  onChange={e => {setEmail(e.target.value)}}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                イメージ
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className=" border shadow-md w-full border-red-500 p-3  text-gray-900  rounded-full "
                  placeholder={image}
                  onChange={e => {setImage(e.target.value)}}
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="h-8 mb-4 w-[30%] shadow-md  flex justify-center items-center  border border-red-500 rounded-full bg-white">
                国籍
              </div>
              <div className="w-full">
                <select
                  className=" border shadow-md w-full border-red-500 p-3 rounded-full "
                  value={nation}
                  onSelect={e => setNation(e.target.value)}
                >
                  <option key={'jp'} value={'jp'}>日本人</option>
                  <option key={'vi'} value={'vi'}>ベトナム人</option>
                </select>
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
