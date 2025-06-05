export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type PageInfo = {
  pages: number;
  next: string | null;
  prev: string | null;
};

export type EpisodeInfo = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type FetchCharactersResult = {
  characters: Character[];
  pageInfo: PageInfo;
};
