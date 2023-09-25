import Card from "./Card";
import { ArticleType } from "@/types/articleTypes";

export default function ResultsCardWrapper({
  articles,
}: {
  articles: ArticleType[];
}) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-w-7xl mx-auto py-3 items-center justify-center p-4">
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  );
}
