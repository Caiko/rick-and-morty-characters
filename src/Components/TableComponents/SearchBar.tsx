type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="flex justify-end p-4 bg-transparent w-full">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Pass the butter..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full p-2  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    </div>
  );
}
