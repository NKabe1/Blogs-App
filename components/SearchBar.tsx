"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
  };

  const onClick = () => {
    {
      search && router.push(`/search/${search}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-7xl mx-auto justify-between items-center p-4"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search article..."
        className="w-full outline-none bg-transparent"
        required
      />
      <button onClick={onClick} type="submit" className="text-gray-800">
        <LuSearch className="text-sky-600" />
      </button>
    </form>
  );
}
