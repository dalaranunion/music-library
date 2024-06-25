import React from "react";
import AlbumTracksTableHeader from "./AlbumTracksTableHeader";
import AlbumTrackRow from "./AlbumTrackRow";
import { TrackRowShape } from "./AlbumTrackRow";

interface Props {
  trackList: TrackRowShape[];
}

const AlbumTracksTable = ({ trackList }: Props) => {
  return (
    <>
      <AlbumTracksTableHeader />
      {trackList.map((a, b) => {
        return (
          <>
            {/* <div className="disc">
              {a.position.indexOf("A") > -1 ? "A Disc" : ""}

              {a.position.indexOf("B") > -1 ? "B Disc" : ""}
            </div> */}
            <AlbumTrackRow
              title={a.title}
              duration={a.duration}
              position={a.position.replace(/\w/, "")}
              type_={null}
            />
          </>
        );
      })}
    </>
  );
};

export default AlbumTracksTable;
