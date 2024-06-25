import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const AlbumTracksTableHeader = () => {
  return (
    <div className="sticky top-0  text-sm bg-base-100 text-gray-300 tracksTable border-b border-b-gray-600 mb-2 pb-2">
      <div className="text-center">#</div>
      <div>Title</div>
      <div className="text-center">
        <MdOutlineAccessTime className="inline-block text-[1.25em] align-top" />
      </div>
    </div>
  );
};

export default AlbumTracksTableHeader;
