import { getFilteredBlogsByAuthors } from "@/utils/fetchingData";
import ResultsCardWrapper from "@/components/ResultsCardWrapper";

export default async function AuthPage({
  params,
}: {
  params: { authorName: string };
}) {
  const authorName = params.authorName;
  const filteredArticles = await getFilteredBlogsByAuthors(authorName);
  const modifiedAuthorName = authorName.replace("%20", " ");

  return (
    <div>
      {filteredArticles && filteredArticles.length === 0 ? (
        <h1 className="text-center text-lg">
          No results for
          <p className="font-semibold text-red-500">{authorName}</p>
        </h1>
      ) : (
        <div>
          <h1 className="text-center text-2xl font-medium dark:text-sky-600 pb-4">
            Blogs by {modifiedAuthorName}
          </h1>
          <ResultsCardWrapper articles={filteredArticles} />
        </div>
      )}
    </div>
  );
}
