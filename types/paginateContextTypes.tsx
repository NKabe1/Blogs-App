import { Dispatch, SetStateAction } from "react";

export type TPaginateCtxTypes = {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
  };