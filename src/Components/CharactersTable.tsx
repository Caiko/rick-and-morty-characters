import { useEffect, useState } from "react";

export default function CharactersTable() {
  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type?: string;
    gender: string;
    origin: { name: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  const [character, setCharacter] = useState<Character[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=1"
        );
        const data = await response.json();
        setCharacter(data.results);
      } catch (error) {
        console.error("Wubba Lubba dub-dub: ", error);
      } finally {
        setLoading(false);
      }
    };
    console.log("Fetching characters...");
    fetchCharacters();
  }, []);

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
    <table className="w-full h-full text-center bg-white border-2 border-black rounded-2xl">
      <thead>
        {character.map((character) => (
          <tr key={character.id} className="hover:bg-gray-50 transition">
            <th>{character.name}</th>
            <th className="">{character.gender}</th>
            <th className="">{character.status}</th>
            <th className="">{character.species}</th>
            <th className="">{character.location.name}</th>
            {/* <th className="">{character.episode}</th> */}
          </tr>
        ))}
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
}
