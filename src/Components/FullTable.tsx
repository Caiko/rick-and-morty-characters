import { useEffect, useState, useCallback } from "react";
import PageButton from "./TableComponents/PageButton";
import type { Character, PageInfo } from "../types/FetchTypes";
import CharacterTable from "./TableComponents/CharacterTable";
import { fetchCharacters } from "../utils/fetchData";
import SearchBar from "./TableComponents/SearchBar";

export default function FullTable() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    pages: 0,
    next: null,
    prev: null,
  });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleExpand = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  /////////////////////////// Fetch Characters and set the pageInfo ///////////////////
  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters(page, searchTerm);
        setCharacters(data.characters);
        setPageInfo(data.pageInfo);
      } catch (error) {
        console.error("Wubba Lubba dub-dub: ", error);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, [page, searchTerm]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term);
          setPage(1);
        }}
      />

      <CharacterTable
        characters={filteredCharacters}
        isExpanded={expandedId}
        toggleExpand={toggleExpand}
      />

      <div className="flex justify-evenly items-center h-1/6">
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
