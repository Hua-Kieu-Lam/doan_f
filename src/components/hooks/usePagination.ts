/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { generateRange } from "../../utils/helpers";

const usePagination = (totalCountProduct: any, currentPage: any, siblingCount = 1) => {
  const paginationArray = useMemo(() => {
    // const pageSize = process.env.REACT_APP_PRODUCT_LIMIT || 10;
    const pageSize = 2;
    const paginationCount = Math.ceil(totalCountProduct / pageSize);
    const totalPaginationItem = siblingCount + 5;

    if (paginationCount <= totalPaginationItem) {
      return generateRange(1, paginationCount);
    }

    const isShowLeft = currentPage - siblingCount > 2;
    const isShowRight = currentPage + siblingCount < paginationCount - 1;

    if (isShowLeft && !isShowRight) {
      const rightStar = paginationCount - 4;
      const rightRange = generateRange(rightStar, paginationCount);
      return [1, "...", ...rightRange];
    }

    if (!isShowLeft && isShowRight) {
      const leftEnd = 5;
      const leftRange = generateRange(1, leftEnd);
      return [...leftRange, "...", paginationCount];
    }

    const siblingLeft = Math.max(currentPage - siblingCount, 1);
    const siblingRight = Math.min(currentPage + siblingCount, paginationCount);

    if (isShowLeft && isShowRight) {
      const middleRange = generateRange(siblingLeft, siblingRight);
      return [
        1,
        "...",
        ...middleRange,
        "...",
        paginationCount,
      ];
    }
  }, [totalCountProduct, currentPage, siblingCount]);

  return paginationArray;
};

export default usePagination;
