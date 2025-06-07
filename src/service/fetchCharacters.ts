import type { FetchCharactersResult } from "../types/FetchTypes";

export const fetchCharacters = async (
  page: number,
  filters: { status: string; gender: string; species: string },
  searchTerm?: string
): Promise<FetchCharactersResult> => {
  const query = `
    query ($page: Int, $name: String, $status: String, $species: String, $gender: String) {
      characters(page: $page, filter: {
        name: $name,
        status: $status,
        species: $species,
        gender: $gender
        }) {
        info {
          next
          prev
          pages
        }
        results {
          id
          name
          status
          species
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            id
            name
            episode
          }
          created
        }
      }
    }
  `;
  const variables = {
    page,
    name: searchTerm || undefined,
    status: filters.status || undefined,
    gender: filters.gender || undefined,
    species: filters.species || undefined,
  };

  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Error:", JSON.stringify(json.errors, null, 2));
    throw new Error("GraphQL query failed");
  }

  const data = json.data.characters;

  return {
    characters: data.results,
    pageInfo: {
      next: data.info.next,
      prev: data.info.prev,
      pages: data.info.pages,
    },
  };
};

/////////////////////////// Before GraphQL Version ///////////////////////////
// import type { FetchCharactersResult } from "../types/FetchTypes";

// export const fetchCharacters = async (
//   page: number,
//   searchTerm?: string
// ): Promise<FetchCharactersResult> => {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character?page=${page}&name=${
//       searchTerm || ""
//     }`
//   );
//   if (!response.ok)
//     throw new Error("The character fetch was Riggity-riggity-rekt-son!");
//   const data = await response.json();

//   return {
//     characters: data.results,
//     pageInfo: {
//       next: data.info.next,
//       prev: data.info.prev,
//       pages: data.info.pages,
//     },
//   };
// };
