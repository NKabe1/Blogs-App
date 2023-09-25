"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { postArticle, postAuthor, postImage } from "@/utils/postingData";
import Modal from "./Modal";

export default function BlogForm() {
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string | Blob>("");
  const [content, setContent] = useState<string>("");

  const [showModal, setShowModal] = useState<boolean>(false);

  const publishedDate = new Date();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthor("");
    setTitle("");
    setContent("");
    setThumbnail("");
  };

  const thumbnailUpload = async () => {
    const thumbnailId = await postImage(thumbnail);
    return thumbnailId;
  };

  const postAuthorName = async () => {
    const postedAuthorId = await postAuthor(author);
    return postedAuthorId;
  };

  const onClick = async () => {
    if (content && title && author && thumbnail) {
      const postedAuthorId = await postAuthorName();
      const thumbnailId = await thumbnailUpload();

      const inputData = {
        title,
        content,
        publishedDate,
        author: postedAuthorId,
        thumbnail: thumbnailId,
      };

      await postArticle(inputData);
      if (title && content && author && thumbnail) {
        setShowModal(true);
      }
    } else {
      console.log("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setAuthor(e.target.value);
              }}
              value={author}
              type="text"
              name="authorName"
              id="authorName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:border-sky-700 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="authorName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-700 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              type="text"
              name="articleTitle"
              id="articleTitle"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:border-sky-700 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="articleTitle"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-700 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Article title
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              rows={2}
              name="articleContent"
              id="articleContent"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:border-sky-700 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="articleContent"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-700 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Article content
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 mt-3 group">
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files !== null) {
                  setThumbnail(e.target.files[0]);
                }
              }}
              type="file"
              name="articleImage"
              id="articleImage"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:border-sky-700 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="articleImage"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-700 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Upload image
            </label>
          </div>
        </div>

        <button
          onClick={onClick}
          type="submit"
          className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-700"
        >
          Submit
        </button>
      </form>
      {showModal && <Modal />}
    </div>
  );
}
