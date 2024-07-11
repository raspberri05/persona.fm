export interface Track {
  mbid: string;
  name: string;
  artist: {
    name: string;
  };
  playcount: string;
  image: string;
}

export interface TopTracks {
  [key: string]: Array<Track>;
  "7day": Array<Track>;
  "1month": Array<Track>;
  "3month": Array<Track>;
  "6month": Array<Track>;
  "12month": Array<Track>;
  overall: Array<Track>;
}

export interface Recent {
  mbid: string;
  name: string;
  artist: {
    "#text": string;
  };
  date: {
    "#text": string;
  };
  url: string;
  "@attr": {
    nowplaying: boolean;
  };
  image: {
    "#text": string;
  }[];
}
