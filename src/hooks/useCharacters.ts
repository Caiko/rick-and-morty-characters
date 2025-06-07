import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchCharacters } from "../service/fetchCharacters";
import type { FetchCharactersResult } from "../types/FetchTypes";

export function useCharacters(page: number, searchTerm: string) {
  return useQuery<FetchCharactersResult>({
    queryKey: ["characters", page, searchTerm],
    queryFn: () => fetchCharacters(page, searchTerm),
    staleTime: 2 * 60 * 60 * 1000,
    placeholderData: keepPreviousData, // If I want to style the placeholder data, while the new data is being fetched
    // I can use the isPlaceholderData prop in the custom hook to style it while it's true
    // In this case I won't because I just want to avoit the flicker of the table when the data is being fetched
  });
}
