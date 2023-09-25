"use client"
import { useState, PropsWithChildren } from "react";
import { PaginateContext } from "@/contexts/PaginateContext"; 

export function PaginateProvider({ children }: PropsWithChildren) {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <PaginateContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginateContext.Provider>
  );
}