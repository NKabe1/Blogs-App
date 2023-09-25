import BlogForm from "@/components/BlogForm";

export default async function CreateBlogPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 p-4">
      <h1 className="text-center text-2xl font-medium dark:text-sky-600 pb-4">
        Create your blog
      </h1>
      <BlogForm />
    </div>
  );
}
