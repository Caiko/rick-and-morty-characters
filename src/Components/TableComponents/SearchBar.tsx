type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="w-2/3 pt-4">
      <input
        type="text"
        placeholder="Pass the butter..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full p-2 bg-white shadow-sm focus:outline-none"
      />
    </div>
  );
}
