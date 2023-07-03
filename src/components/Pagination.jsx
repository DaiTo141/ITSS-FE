import classNames from "classnames";
import { Link } from "react-router-dom";

/**
Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh current_page
[1] 2 3 ... 19 20
1 [2] 3 4 ... 19 20
1 2 [3] 4 5 ... 19 20
1 2 3 [4] 5 6 ... 19 20
1 2 3 4 [5] 6 7 ... 19 20
1 2 ... 4 5 [6] 8 9 ... 19 20
1 2 ...13 14 [15] 16 17 ... 19 20
1 2 ... 14 15 [16] 17 18 19 20
1 2 ... 15 16 [17] 18 19 20
1 2 ... 16 17 [18] 19 20
1 2 ... 17 18 [19] 20
1 2 ... 18 19 [20]
 */

const RANGE = 2;
export default function Pagination({ pages, pageSize }) {
  const page = Number(pages);
  const renderPagination = () => {
    let dotAfter = false;
    let dotBefore = false;
    const renderDotBefore = (index) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <span
            key={index}
            className="bg-white rounded text-black px-3 py-2 shadow-sm mx-2 border"
          >
            ...
          </span>
        );
      }
      return null;
    };
    const renderDotAfter = (index) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <span key={index} className=" text-black px-3 py-2 mx-2 ">
            ...
          </span>
        );
      }
      return null;
    };
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;

        // Điều kiện để return về ...
        if (
          page <= RANGE * 2 + 1 &&
          pageNumber > page + RANGE &&
          pageNumber < pageSize - RANGE + 1
        ) {
          return renderDotAfter(index);
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (
            pageNumber > page + RANGE &&
            pageNumber < pageSize - RANGE + 1
          ) {
            return renderDotAfter(index);
          }
        } else if (
          page >= pageSize - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < page - RANGE
        ) {
          return renderDotBefore(index);
        }

        return (
          <Link
            to={{}}
            key={index}
            className={classNames(
              " text-black px-3 py-2 hover:text-blue-400 mx-2 cursor-pointer ",
              {
                " text-blue-400": pageNumber === page,
                "border-transparent": pageNumber !== page,
              }
            )}
          >
            {pageNumber}
          </Link>
        );
      });
  };
  return (
    <div className="flex flex-wrap  justify-center">{renderPagination()}</div>
  );
}
