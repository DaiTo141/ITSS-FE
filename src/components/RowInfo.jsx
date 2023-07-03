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
      </div>
      <div className="flex justify-center items-center truncate">
        {item.comment}
      </div>
    </div>
  );
}
