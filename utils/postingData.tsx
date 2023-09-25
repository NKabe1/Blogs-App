import axios from "axios";
import { PostedBlogType } from "@/types/articleTypes";

export const postArticle = async (props: PostedBlogType) => {
  const { title, content, publishedDate, author, thumbnail } = props;
  try {
    const resp = await axios.post(
      "http://127.0.0.1:1337/api/articles",

      {
        data: {
          title: title,
          content: content,
          publishedDate: publishedDate,
          author,
          thumbnail,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const postingData = {
      author,
      title,
      content,
      publishedDate,
      thumbnail,
    };
    return postingData;
  } catch (error: any) {
    throw error;
  }
};

export const postAuthor = async (author: string) => {
  try {
    const resp = await axios.post(
      "http://127.0.0.1:1337/api/authors",

      {
        data: {
          author,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const authorId = resp.data.data.id;
    return authorId;
  } catch (error: any) {
    throw error;
  }
};

export const postImage = async (thumbnail: Blob | string) => {
  try {
    const formData = new FormData();
    formData.append("files", thumbnail);
    const resp = await axios.post(
      "http://127.0.0.1:1337/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const thumbnailId = resp.data[0].id;
    return thumbnailId;
  } catch (error: any) {
    throw error;
  }
};
