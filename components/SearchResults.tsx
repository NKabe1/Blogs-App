import ResultsCardWrapper from "./ResultsCardWrapper";
import { searchedArticlesType } from "@/types/articleTypes";

export default function SearchResults(props: searchedArticlesType) {
  const { searchedArticles, searchKeyword } = props;
  return (
    <div>
      {searchedArticles && searchedArticles.length === 0 && (
        <h1 className="text-center text-lg">
          No results for{" "}
          <p className="font-semibold text-red-500">{searchKeyword}</p>
        </h1>
      )}
      <h1 className="text-center text-2xl font-medium dark:text-sky-600 pb-4">
        Results for {searchKeyword}
      </h1>
      {searchedArticles && <ResultsCardWrapper articles={searchedArticles} />}
    </div>
  );
}
