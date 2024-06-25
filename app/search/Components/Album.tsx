"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ShapeAlbum, ShapeResultAlbum } from "@/app/AppInterfaces";

interface Props {
  album: ShapeResultAlbum;
  artist: string;
}

const Album = ({
  artist,
  album: { id, title, cover_image, resource_url, master_id },
}: Props) => {
  const router = useRouter();

  function handleClick(id: number) {
    router.push(`/${artist}/${id}`);
  }

  return (
    <article className="border-blue-50 " onClick={() => handleClick(master_id)}>
      <figure className="block align-top aspect-square">
        <Image
          className="w-full h-full object-cover rounded-xl"
          width={258}
          height={258}
          src={cover_image}
          alt={title + " album cover"}
        />
      </figure>
      <div className="w-4/6 flex flex-col align-top">
        <h5 className="text-sm mt-3">{title}</h5>
        <h6>{artist}</h6>
      </div>
    </article>
  );
};

export default Album;
