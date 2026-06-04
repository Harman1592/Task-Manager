import { useState, useMemo } from 'react';

const PAGE_SIZE = 10;

function usePagination(items) {
  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(items.length / PAGE_SIZE)
  );

  const paginatedItems = useMemo(() => {
    const start =
      (currentPage - 1) * PAGE_SIZE;

    return items.slice(
      start,
      start + PAGE_SIZE
    );
  }, [items, currentPage]);

  const goToPage = (page) => {
    if (
      page >= 1 &&
      page <= totalPages
    ) {
      setCurrentPage(page);
    }
  };

  const reset = () => {
    setCurrentPage(1);
  };

  return {
    paginatedItems,
    currentPage,
    totalPages,
    goToPage,
    reset,
  };
}

export default usePagination;
