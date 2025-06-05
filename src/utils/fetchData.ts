import type { FetchCharactersResult, EpisodeInfo } from "../types/FetchTypes";

export const fetchCharacters = async (
  page: number,
  searchTerm?: string
): Promise<FetchCharactersResult> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${
      searchTerm || ""
    }`
  );
  if (!response.ok)
    throw new Error("The character fetch was Riggity-riggity-rekt-son!");
  const data = await response.json();

  return {
    characters: data.results,
    pageInfo: {
      next: data.info.next,
      prev: data.info.prev,
      pages: data.info.pages,
    },
  };
};

export const fetchEpisodes = async (
  episodeUrls: string[]
): Promise<EpisodeInfo[]> => {
  const requests = episodeUrls.map((url) =>
    fetch(url).then((res) => {
      if (!res.ok)
        throw new Error(`We have a problem with this one --> ${url}`);
      return res.json();
    })
  );

  return Promise.all(requests);
};
