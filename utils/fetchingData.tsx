import axios from "axios";

export async function getSelectedArticle(articleId: number) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:1337/api/articles/${articleId}`
    );
    const article = response.data.data;
    return article;
  } catch (error) {
    throw error;
  }
}

export async function getArticleThumbnail(articleId: number) {
  try {
    const resp = await axios.get(
      `http://127.0.0.1:1337/api/articles/${articleId}?populate=thumbnail`
    );
    const result = resp.data.data;
    const imageURL = result.attributes.thumbnail.data[0].attributes.url;
    return imageURL;
  } catch (error) {
    throw error;
  }
}

export async function getArticleAuthor(articleId: number) {
  try {
    const resp = await axios.get(
      `http://127.0.0.1:1337/api/articles/${articleId}?populate=thumbnail&populate=author`
    );
    const result = resp.data.data;
    const author = result.attributes.author.data.attributes.author;
    return author;
  } catch (error) {
    throw error;
  }
}

export async function getSearchedArticles(searchKeyword: string) {
  try {
    const resp = await axios.get(
      `http://127.0.0.1:1337/api/articles?sort[0]=publishedDate:desc&filters[title][$contains]=${searchKeyword}`
    );
    const searchedArticles = resp.data.data;
    return searchedArticles;
  } catch (error) {
    throw error;
  }
}

export async function getFilteredBlogsByAuthors(authorName: string) {
  try {
    const resp = await axios.get(
      `http://127.0.0.1:1337/api/articles?sort[0]=publishedDate:desc&filters[author][author][$contains]=${authorName}`
    );
    const filteredArticles = resp.data.data;
    return filteredArticles;
  } catch (error) {
    throw error;
  }
}
