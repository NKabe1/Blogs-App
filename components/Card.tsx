"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArticleType } from "@/types/articleTypes";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { getArticleThumbnail } from "@/utils/fetchingData";

export default function Card({ article }: { article: ArticleType }) {
  const [imageURL, setImageUrl] = useState();

  const getImageURL = async () => {
    const fetchedImageURL = await getArticleThumbnail(article.id);
    setImageUrl(fetchedImageURL);
  };
  useEffect(() => {
    getImageURL();
  }, []);

  return (
    <div>
      <div className="max-w-xs mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
        {imageURL && (
          <div className="overflow-hidden mb-4 h-40 flex justify-center items-center">
            <Image
              className="rounded-lg"
              src={`http://127.0.0.1:1337${imageURL}`}
              alt={article.attributes.title}
              width={250}
              height={160}
              priority={false}
            />
          </div>
        )}

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
          {article.attributes.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {article.attributes.content}
        </p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          Date released: {article.attributes.publishedDate.toString()}
        </p>
        <Link
          href={`/article/${article.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
          Details
          <HiOutlineArrowNarrowRight className="text-lg ml-1" />
        </Link>
      </div>
    </div>
  );
}
