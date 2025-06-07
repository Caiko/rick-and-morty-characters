import { useState, useCallback } from "react";
import PageButton from "./TableComponents/PageButton";
import CharacterTable from "./TableComponents/CharacterTable";
import { useCharacters } from "../hooks/useCharacters";
import SearchBar from "./TableComponents/SearchBar";
import FilterSelect from "./TableComponents/FilterSelect";

export default function FullTable() {
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
    species: "",
  });

  const { data, isLoading, isError, error, isPlaceholderData } = useCharacters(
    page,
    searchTerm,
    filters
  );

  const toggleExpand = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  ///////////////////// Pagination and Filter Handlers /////////////////////
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

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
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
      <div className="flex gap-10 bg-stone-400 p-4">
        <FilterSelect
          value={filters.status}
          label="Status"
          onChange={(value) => handleFilterChange("status", value)}
          options={["Alive", "Dead", "unknown"]}
        />

        <FilterSelect
          value={filters.gender}
          label="Gender"
          onChange={(value) => handleFilterChange("gender", value)}
          options={["Male", "Female", "Genderless", "unknown"]}
        />

        <FilterSelect
          value={filters.species}
          label="Species"
          onChange={(value) => handleFilterChange("species", value)}
          options={["Human", "Alien", "Robot", "Mythological", "Poopybutthole"]}
        />

        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
      </div>

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

        <span className="w-1/6 h-1/2 bg-white shadow flex items-center justify-center border border-black">
          Page {isPlaceholderData ? page - 1 : page} of {data.pageInfo.pages}
        </span>

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
