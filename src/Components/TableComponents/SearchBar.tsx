import { FaSearch } from "react-icons/fa";

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="relative w-[30rem] ">
      <input
        type="text"
        placeholder="Pass the butter..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full p-4 pl-12 bg-white h-[2.5rem]"
      />
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
