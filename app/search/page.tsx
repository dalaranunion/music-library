"use client";
import React from "react";
import Album from "./Components/Album";
import { data } from "../artistExample";

interface Props {
  params: { artist: string };
}

export default function SearchLanding({ params: { artist } }: Props) {
  const route = window.location.search;
  console.log(route);
  return (
    <>
      <div className="results grid grid-cols-3 gap-6 py-6">
        {data.results.map((a, b) => (
          <Album key={b} album={a} artist={artist} />
        ))}
      </div>
      <nav className="contentwidth">
        <button className="btn btn-secondary">Next Page</button>
        <button className="btn btn-secondary">Previous Page</button>
      </nav>
    </>
  );
}
