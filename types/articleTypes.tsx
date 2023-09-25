export type ArticleType = {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedDate: Date;
  };
};

export type ArticleDetailsType = {
  article: ArticleType;
  imageURL: string;
  author: string;
};

export type searchedArticlesType = {
  searchedArticles: ArticleType[];
  searchKeyword: string;
};

export type ArticleDetailsPageType = {
  params: {
    id: number;
  };
};

export type SearchPageType = {
  params: {
    searchKeyword: string;
  };
};

export type PostedBlogType = {
  author: string;
  title: string;
  content: string;
  publishedDate: Date;
  thumbnail: Blob
};
