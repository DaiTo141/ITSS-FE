import React, {useState, useEffect} from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import RowReview from "../components/RowReview";
import Api from "../services/axios";
import { Pagination } from "@mui/material";

export default function Review() {
  const [pageSize, setPageSize] = useState(8)
  const [reviews, setReviews] = useState([])
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const getDataPage = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (!reviews) return [];
    return reviews.slice(startIndex, endIndex);
  };

  useEffect(() => {
    Api.get('reviews', {
      params: {
        name
      }
    }).then(res => {
      res.data.sort((a, b) => a.id - b.id)
      setReviews(res.data)
    })
  }, [name])
  return (
    <div className="pt-20 mx-20">
      <div className="flex justify-between ">
        <form className="flex items-center">
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt className="text-2xl text-gray-500" />
            </div>
            <input
              type="text"
              id="simple-search"
              className=" border shadow-md border-black text-gray-900 text-xl rounded-xl block w-full pl-20 py-3 pr-10  "
              placeholder="レビューのユーザー"
              onChange={e => setName(e.target.value)}
            />
          </div>
        </form>
        {/* <div>
          <div className="h-14 w-32 shadow-md text-xl flex justify-center items-center hover:bg-gray-200 cursor-pointer border border-black rounded-xl bg-white">
            <AiOutlinePlusCircle className="text-4xl mr-3" />
            追加
          </div>
        </div> */}
      </div>
      <div className="mt-20">
        <div className="w-full h-16 rounded-2xl text-xl border shadow-md border-black bg-white justify-items-center grid grid-cols-7 gap-2">
          <div className="flex justify-center items-center font-thin">ID</div>
          <div className="flex justify-center items-center">ユーザ</div>
          <div className="flex justify-center items-center">料理</div>
          <div className="flex justify-center items-center">レーティング</div>
          <div className="flex justify-center items-center">レビュー</div>
          <div className="flex justify-center items-center">デート</div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
      <div className="mt-16">
        <div className="w-full grid grid-cols-1 rounded-2xl text-xl border shadow-md border-black  bg-white ">
          {getDataPage().map((item) => {
            return (
              <div key={item.id}>
                <RowReview item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="h-10 border shadow-md border-black w-auto text-center  rounded-full  bg-white">
          <Pagination
            count={Math.ceil(reviews ? reviews.length / pageSize : 2)}
            onChange={(e, page) => {
              setPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
}
