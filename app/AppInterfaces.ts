export interface ShapeAlbumImage {
  type: "primary" | "secondary";
  uri: string;
  resource_url: string;
  uri150: string;
  width: number;
  height: number;
}
export interface ShapeTrack {
  position: string; // 1,2,3,4 string type
  type_: string;
  title: string;
  duration: string;
}
export interface ShapeResultAlbum {
  id: number;
  master_id: number;
  country: string;
  format: string[]; // cd, lp, vynyl, album, unofficial/official release
  uri: string; // url on discogs
  title: string; // album title
  thumb: string; // img src
  cover_image: string; // img src
  resource_url: string; // the actual album API link
  genre: string[];
}
export interface ShapeAlbum {
  id: number;
  main_release: number;
  country: string;
  format: string[]; // cd, lp, vynyl, album, unofficial/official release
  uri: string; // url on discogs
  title: string; // album title
  images: ShapeAlbumImage[]; // Array of album images
  resource_url: string; // the actual album API link
  genre: string[];
}

export interface ShapeArtist {
  name: string;
  anv: string;
  resource_url: string; // API link to artist
}
