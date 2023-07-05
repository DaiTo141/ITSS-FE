import React, { useEffect, useState } from "react";
import Api from "../services/axios";

export default function Home() {
  const [foods, setFoods] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [users, setUsers] = useState([])
  const getUsers = () => {
    Api.get('/users')
      .then(res => {
        setUsers(res.data)
      })
  }
  const getFoods = () => {
    Api.get('/foods')
      .then(res => {
        setFoods(res.data)
      })
  }
  const getRestaurants = () => {
    Api.get('/restaurants')
      .then(res => {
        setRestaurants(res.data)
      })
  }
  useEffect(() => {
    getUsers()
    getRestaurants()
    getFoods()
  }, [])
  return (
    <div>
      <div className="flex justify-evenly mx-10 mt-24">
        <div className="h-32 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          <div className="flex flex-col justify-center items-center text-xl">
            <div>レストラン数: {restaurants.length}</div>
          </div>
        </div>
        <div className="h-32 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          <div className="flex flex-col justify-center items-center text-xl">
            <div>料理数: {foods.length}</div>
          </div>
        </div>
        <div className="h-32 w-80 rounded-2xl border flex justify-center items-center font-semibold border-black shadow-lg cursor-pointer bg-white">
          <div className="flex flex-col justify-center items-center text-xl">
            <div>ユーザー数: {users.length}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-20 font-semibold">
        <div>
          <div className="h-64 w-64 bg-slate-300 mb-5"></div>
          <div className="flex justify-center items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
              </svg>
            </div>
            <div>ウェブサイトのトラフィック</div>
          </div>
        </div>
        <div>
          <div className="h-64 w-64 bg-slate-300 mb-5"></div>

          <div className="flex justify-center items-center">
            レビューチャート
          </div>
        </div>
      </div>
      <div className="flex mt-24  justify-evenly items-center">
        <div>
          <img
            src="https://vcdn-dulich.vnecdn.net/2020/01/17/26158077-167284690667495-84349-7736-6542-1579256216.jpg"
            alt=""
            className="h-48 w-48 mb-5 rounded-full
            "
          />
          <div className="text-center font-semibold">注目のユーザー</div>
        </div>
        <div>
          <img
            src={"https://vcdn-dulich.vnecdn.net/2020/01/17/26158077-167284690667495-84349-7736-6542-1579256216.jpg"}
            alt=""
            className="h-56 w-76 mb-5 rounded-[32px]
            "
          />
          <div className="text-center font-semibold">注目の料理</div>
        </div>
        <div>
          <img
            src={"https://vcdn-dulich.vnecdn.net/2020/01/17/26158077-167284690667495-84349-7736-6542-1579256216.jpg"}
            alt=""
            className="h-56 w-76 mb-5 rounded-[32px]
            "
          />
          <div className="text-center font-semibold">注目のレストラン</div>
        </div>
      </div>
    </div>
  );
}
