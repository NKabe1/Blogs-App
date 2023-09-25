import {
  getSelectedArticle,
  getArticleThumbnail,
  getArticleAuthor,
} from "@/utils/fetchingData";
import ArticleDetails from "@/components/ArticleDetails";
import { ArticleDetailsPageType } from "@/types/articleTypes";

import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: ArticleDetailsPageType): Promise<Metadata> => {
  const article = await getSelectedArticle(params.id);
  return {
    title: article.attributes.title,
    description: article.attributes.content,
  };
};

export default async function ArticleDetailsPage({
  params,
}: ArticleDetailsPageType) {
  const articleId = params.id;
  const article = await getSelectedArticle(articleId);
  const imageURL = await getArticleThumbnail(articleId);
  const author = await getArticleAuthor(articleId);

  return (
    <ArticleDetails article={article} imageURL={imageURL} author={author} />
  );
}
