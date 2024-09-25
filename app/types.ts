export interface Persona {
    energetic: {
        description: string;
        percent: number;
    };
    mainstream: {
        description: string;
        percent: number;
    };
    vibe: string;
}

export interface rawData {
    duration: string;
    genres: string[];
    playcount: string;
}

export interface Tag {
    name: string;
    url: string;
}

export interface Track {
    name: string;
    artist: {
        name: string;
    };
    playcount: string;
}

export interface TrackInfo {
    name: string;
    artist: string;
    playcount: string;
}
