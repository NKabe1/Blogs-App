import Image from "next/image";
import Head from "next/head";
import { ArticleDetailsType } from "@/types/articleTypes";

//!!! next head doesn't really work here, it couldn't override the app/page.tsx metadata, so I had to use generateMetadata in app/article/[id]/page.tsx, which is dynamic metadata

export default function ArticleDetails(props: ArticleDetailsType) {
  const { article, imageURL, author } = props;
  return (
    <>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content={article.attributes.content} />
      </Head>
      <div className="max-w-7xl mx-auto p-4">
        {article && (
          <div className="py-3">
            <div className="py-3 sm:flex gap-4">
              {imageURL && (
                <Image
                  className="rounded-lg pb-2"
                  src={`http://127.0.0.1:1337${imageURL}`}
                  alt="image"
                  width={400}
                  height={250}
                />
              )}
              <div className="pt-2">
                <p className="sm:text-3xl text-xl font-bold pb-4">
                  {article.attributes.title}
                </p>
                <p className="pb-2">
                  Date released: {article.attributes.publishedDate.toString()}
                </p>
                <p className="pb-2">Author: {author}</p>
              </div>
            </div>
            <div className="pt-4">
              <p className="border rounded-lg p-4 shadow-lg bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-900">
                {article.attributes.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
