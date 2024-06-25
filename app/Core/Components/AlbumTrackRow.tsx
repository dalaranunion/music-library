import React from "react";

export interface TrackRowShape {
  position: string;
  title: string;
  duration: string | null;
  type_: string | null;
}

const AlbumTrackRow = ({ title, duration, position }: TrackRowShape) => {
  return (
    <div className="tracksTable mb-2 pb-2">
      <div>{position}</div>
      <div>{title}</div>
      <div className="text-center">{duration}0:00</div>
    </div>
  );
};

export default AlbumTrackRow;
