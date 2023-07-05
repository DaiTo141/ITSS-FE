import { Rating } from "@mui/material";
import React from "react";

export default function RowInfo({ item }) {
  return (
    <div className="my-10 h-16 grid grid-cols-4 gap-2 rounded-2xl text-xl border shadow-md border-black bg-white">
      <div className="flex justify-center items-center truncate">
        {item.nameFood}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.name}
      </div>
      <div className="flex justify-center items-center truncate">
        {item.rating}
        <svg class="w-6 h-6 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </div>
      <div className="flex justify-center items-center truncate">
        {item.comment}
      </div>
    </div>
  );
}
