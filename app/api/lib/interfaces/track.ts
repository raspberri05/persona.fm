export interface Track {
  mbid: string;
  name: string;
  artist: {
    name: string;
  };
  playcount: string;
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
