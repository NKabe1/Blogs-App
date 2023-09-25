"use client";
import { createContext } from "react";
import { TPaginateCtxTypes } from "@/types/paginateContextTypes";

export const PaginateContext = createContext<TPaginateCtxTypes>({
  currentPage: 1,
  setCurrentPage: () => {},
});
