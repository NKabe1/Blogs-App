import { getSearchedArticles } from "@/utils/fetchingData";
import SearchResults from "@/components/SearchResults";
import { SearchPageType } from "@/types/articleTypes";

export default async function SearchPage({ params }: SearchPageType) {
  const searchKeyword = params.searchKeyword;
  const searchedArticles = await getSearchedArticles(searchKeyword);

  return (
    <SearchResults
      searchedArticles={searchedArticles}
      searchKeyword={searchKeyword}
    />
  );
}
