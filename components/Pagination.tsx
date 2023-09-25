"use client";
import { useContext } from "react";
import { PaginateContext } from "@/contexts/PaginateContext";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const { currentPage, setCurrentPage } = useContext(PaginateContext);
  return (
    <div className="text-center space-x-2 space-y-2 my-8">
      <button
        className={`md:p-2 rounded py-2 text-black text-white p-2 ${
          currentPage === 1 ? "bg-gray-400" : "bg-sky-600"
        }  ${currentPage !== 1 ? "hover:bg-sky-700" : ""}
        `}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <FiArrowLeft />
      </button>
      <button
        className={`md:p-2 rounded py-2 text-black text-white p-2 ${
          currentPage === pageCount ? "bg-gray-400" : "bg-sky-600"
        } ${currentPage !== pageCount ? "hover:bg-sky-700" : ""}
        `}
        disabled={currentPage === pageCount}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <FiArrowRight />
      </button>
      <span>{`${currentPage} of ${pageCount}`}</span>
    </div>
  );
}
