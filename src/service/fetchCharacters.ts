import type { FetchCharactersResult } from "../types/FetchTypes";

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
