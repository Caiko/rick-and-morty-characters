import type { EpisodeInfo } from "../types/FetchTypes";

export const fetchEpisodes = async (
  episodeUrls: { id: string }[]
): Promise<EpisodeInfo[]> => {
  const ids = episodeUrls.map((ep) => ep.id);

  const query = `
    query ($ids: [ID!]!) {
      episodesByIds(ids: $ids) {
        id
        name
        air_date
        episode 
        characters {
          id
          }
        created
      }
    }
  `;

  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { ids } }),
  });

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Error:", JSON.stringify(json.errors, null, 2));
    throw new Error("GraphQL query failed for episodes");
  }

  const data = json.data.episodesByIds;
  const episodes = Array.isArray(data) ? data : [data];

  const formattedEpisodes: EpisodeInfo[] = episodes.map((ep) => ({
    ...ep,
    characters: ep.characters.map(
      (char: { id: string }) =>
        `https://rickandmortyapi.com/api/character/${char.id}`
    ),
  }));

  return formattedEpisodes;
};

/////////////////////////// Before GraphQL Version ///////////////////////////
// import type { EpisodeInfo } from "../types/FetchTypes";

// export const fetchEpisodes = async (
//   episodeUrls: string[]
// ): Promise<EpisodeInfo[]> => {
//   const requests = episodeUrls.map((url) =>
//     fetch(url).then((res) => {
//       if (!res.ok)
//         throw new Error(`We have a problem with this one --> ${url}`);
//       return res.json();
//     })
//   );

//   const results = await Promise.allSettled(requests);

//   return results
//     .filter(
//       (result): result is PromiseFulfilledResult<EpisodeInfo> =>
//         result.status === "fulfilled"
//     )
//     .map((result) => result.value);
// };
// // NOTE to self: status can be "fulfilled" + value or "rejected" + reason, I can map the rejected results to an error message *(result.status === rejected => result.reason) if needed
