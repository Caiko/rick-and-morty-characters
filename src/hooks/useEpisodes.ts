import { useQuery } from "@tanstack/react-query";
import { fetchEpisodes } from "../service/fetchEpisodes";
import type { EpisodeInfo } from "../types/FetchTypes";

export function useEpisodes(episodeUrls: { id: string }[]) {
  return useQuery<EpisodeInfo[]>({
    queryKey: ["episodes", episodeUrls],
    queryFn: () => fetchEpisodes(episodeUrls),
    enabled: episodeUrls.length > 0, // Will only fetch if there are episode URLs
    staleTime: 1000 * 60 * 60 * 2,
  });
}
