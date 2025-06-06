import type { EpisodeInfo } from "../types/FetchTypes";

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

  const results = await Promise.allSettled(requests);

  return results
    .filter(
      (result): result is PromiseFulfilledResult<EpisodeInfo> =>
        result.status === "fulfilled"
    )
    .map((result) => result.value);
};
// NOTE to self: status can be "fulfilled" + value or "rejected" + reason, I can map the rejected results to an error message *(result.status === rejected => result.reason) if needed
