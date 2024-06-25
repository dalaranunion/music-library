"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavBar = () => {
  const searchParams: URLSearchParams = useSearchParams();
  const artistSearched: string | null = searchParams.get("artist");
  return (
    <>
      <h1 className="text-3xl mb-5">Search your favourite artist</h1>
      <form className="form-wrap" action="./search" method="get" role="search">
        <label className="input h-auto rounded-full flex items-center gap-2 border-2 focus-within:outline-none focus-within:border-primary border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="search"
            name="artist"
            defaultValue={artistSearched ? artistSearched : ""}
            className="grow input-md text-lg px-1 py-7"
            placeholder="SOHN, Bent, RAYE..."
          />
        </label>
      </form>
    </>
  );
};

export default NavBar;
