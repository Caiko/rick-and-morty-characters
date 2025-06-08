type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="w-2/3">
      <input
        type="text"
        placeholder="Pass the butter..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full p-4 bg-white focus:outline-none"
      />
    </div>
  );
}
