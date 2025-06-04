import { useEffect, useState } from "react";
import PageButton from "./PageButton";

export default function CharactersTable() {
  interface Character {
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
  }

  interface PageInfo {
    pages: number;
    next: string | null;
    prev: string | null;
  }

  ///////////////////// State Management /////////////////////
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [page, setPage] = useState<number>(1);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    pages: 0,
    next: null,
    prev: null,
  });

  /////////////////////////// Fetch Characters and set the pageInfo ///////////////////
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setPageInfo({
          next: data.info.next,
          prev: data.info.prev,
          pages: data.info.pages,
        });
      } catch (error) {
        console.error("Wubba Lubba dub-dub: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  ///////////////////// Pagination Handlers /////////////////////
  function handleNextPageChange() {
    setPage((prev) => prev + 1);
  }

  function handlePrevPageChange() {
    setPage((prev) => Math.max(prev - 1, 1));
  }

  ///////////////////// Loading State /////////////////////
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-5xl">
          One screw turn... aand two screw turns... aaand...
        </p>
      </div>
    );
  }

  ///////////////////// Table Structure /////////////////////

  return (
    <>
      <table className="w-full h-4/5 text-center bg-white border-2 border-black table-auto ">
        <thead>
          <tr>
            <th className="bg-stone-400">Name</th>
            <th className="bg-stone-400">Gender</th>
            <th className="bg-stone-400">Status</th>
            <th className="bg-stone-400">Species</th>
            <th className="bg-stone-400">Location</th>
            <th className="bg-stone-400">Episodes</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id} className="hover:bg-gray-300 transition">
              <th>{character.name}</th>
              <th>{character.gender}</th>
              <th>{character.status}</th>
              <th>{character.species}</th>
              <th>{character.location.name}</th>
              <th>{character.episode.length}</th>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ////////////////////// Pagination Controls ///////////////////// */}

      <div className="flex justify-evenly items-center h-1/5">
        <PageButton onClick={handlePrevPageChange} disabled={!pageInfo.prev}>
          Prev
        </PageButton>

        <p className="w-1/6 h-1/2 bg-white shadow flex items-center justify-center border-2 border-black">
          Page {page} of {pageInfo.pages}
        </p>

        <PageButton onClick={handleNextPageChange} disabled={!pageInfo.next}>
          Next
        </PageButton>
      </div>
    </>
  );
}
