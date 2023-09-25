import CardWrapper from "@/components/HomeCardWrapper";

export default async function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium dark:text-sky-600 pb-4">All blogs</h1>
      <CardWrapper />
    </div>
  );
}
