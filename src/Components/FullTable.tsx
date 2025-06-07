import { useState, useCallback } from "react";
import PageButton from "./TableComponents/PageButton";
import CharacterTable from "./TableComponents/CharacterTable";
import { useCharacters } from "../hooks/useCharacters";
import SearchBar from "./TableComponents/SearchBar";

export default function FullTable() {
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError, error, isPlaceholderData } = useCharacters(
    page,
    searchTerm
  );

  const toggleExpand = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  // const filteredCharacters = characters.filter((character) =>
  //   character.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // No need to manually filter characters here, as the API already supports searching by name.

  ///////////////////// Pagination Handlers /////////////////////
  const handleNextPageChange = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handlePrevPageChange = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setPage(1);
  }, []);

  ///////////////////// Loading State /////////////////////
  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-5xl">
          One screw turn... aand two screw turns... aaand...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl">Opps... {(error as Error).message}</p>
      </div>
    );
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />

      <CharacterTable
        characters={data.characters}
        isExpanded={expandedId}
        toggleExpand={toggleExpand}
      />

      <div className="flex justify-evenly items-center h-1/6">
        <PageButton
          onClick={handlePrevPageChange}
          disabled={!data.pageInfo.prev}
        >
          Prev
        </PageButton>

        <p className="w-1/6 h-1/2 bg-white shadow flex items-center justify-center border-2 border-black">
          Page {isPlaceholderData ? page - 1 : page} of {data.pageInfo.pages}
        </p>

        <PageButton
          onClick={handleNextPageChange}
          disabled={!data.pageInfo.next}
        >
          Next
        </PageButton>
      </div>
    </>
  );
}
