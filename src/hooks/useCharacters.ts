import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchCharacters } from "../service/fetchCharacters";
import type { FetchCharactersResult } from "../types/FetchTypes";

export function useCharacters(page: number, searchTerm: string) {
  return useQuery<FetchCharactersResult>({
    queryKey: ["characters", page, searchTerm],
    queryFn: () => fetchCharacters(page, searchTerm),
    staleTime: 60 * 1000,
    placeholderData: keepPreviousData,
  });
}
