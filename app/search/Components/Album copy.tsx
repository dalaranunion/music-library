import React from "react";
import Image from "next/image";
import { ShapeAlbum, ShapeResultAlbum } from "@/app/AppInterfaces";
import { albumData } from "@/app/artistExample";
import AlbumTracksTable from "@/app/Core/Components/AlbumTracksTable";

interface Props {
  album: ShapeResultAlbum;
}

// async function loadTracks(apiEndpoint : string): Promise<ShapeAlbum> {

//   return '';

// }

const Album = ({
  album: {
    id,
    country,
    genre,
    format,
    uri,
    title,
    thumb,
    cover_image,
    resource_url,
  },
}: Props) => {
  return (
    <section className="pb-10 mb-10 border-b border-blue-50 guttercontentwidthhalf">
      <div className="w-2/6 inline-block align-top guttercontentwidthhalf">
        <Image
          className="w-full rounded-sm"
          width={258}
          height={258}
          src={cover_image}
          alt={title + " album cover"}
        />
        <div className="albuminfo mt-3">
          <ul className="inline list-none m-0 p-0">
            {format.map((a, b) => (
              <li className="badge badge-netrual badge-xs mr-1" key={b}>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-4/6 inline-block align-top guttercontentwidthhalf">
        <h2 className="text-3xl mb-3">{title}</h2>

        <div className="trackListing pt-6">
          {<AlbumTracksTable trackList={albumData.tracklist} />}
        </div>
      </div>
    </section>
  );
};

export default Album;
