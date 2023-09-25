"use client";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Card";
import { ArticleType } from "@/types/articleTypes";
import { PaginateContext } from "@/contexts/PaginateContext";
import Pagination from "./Pagination";
import { pageSize } from "@/assets/pageSize";

export default function CardWrapper() {
  const [articles, setArticles] = useState<ArticleType[]>();
  const { currentPage } = useContext(PaginateContext);
  const [pageCount, setPageCount] = useState<number>(1);

  const getAllSortedArticles = async () => {
    try {
      const resp = await axios.get(
        `http://127.0.0.1:1337/api/articles?sort[0]=publishedDate:desc&sort[1]=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
      );
      const fetchedData = resp.data;
      const articles = fetchedData.data;
      setArticles(articles);
      setPageCount(fetchedData.meta.pagination.pageCount);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAllSortedArticles();
  }, [currentPage]);

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-w-7xl mx-auto py-3 items-center justify-center p-4">
        {articles &&
          articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
      </div>
      {articles && <Pagination pageCount={pageCount} />}
    </div>
  );
}
