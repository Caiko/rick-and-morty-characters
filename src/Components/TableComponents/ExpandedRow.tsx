import { useEffect, useState } from "react";
import type { Character, EpisodeInfo } from "../../types/FetchTypes";
import { fetchEpisodes } from "../../utils/fetchData";

export default function ExpandedRow({ character }: { character: Character }) {
  const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);
  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const data = await fetchEpisodes(character.episode);
        setEpisodes(data);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    loadEpisodes();
  }, [character.episode]);

  return (
    <>
      <tr className="bg-gray-100 ">
        <td colSpan={6}>
          <div className=" flex items-center w-full justify-between ">
            <div className="flex gap-4 text-left ">
              <img
                src={character.image}
                alt={character.name}
                className="w-32 h-32 rounded-lg border"
              />
              <div className="flex flex-col justify-center">
                <p>
                  <strong>Name:</strong> {character.name}
                </p>
                <p>
                  <strong>Status:</strong> {character.status}
                </p>
                <p>
                  <strong>Species:</strong> {character.species}
                </p>
                <p>
                  <strong>Origin:</strong> {character.origin.name}
                </p>
              </div>
            </div>

            <div className=" h-40 w-3/4   overflow-y-scroll  max-w-full ">
              <table className="w-full table-auto text-left">
                <thead className="bg-green-400 sticky top-0 ">
                  <tr>
                    <th className="px-2 py-1 border">Episodes</th>
                    <th className="px-2 py-1 border">Season and Episode</th>
                    <th className="px-2 py-1 border">Title</th>
                  </tr>
                </thead>
                <tbody className="bg-white ">
                  {episodes.map((ep, idx) => (
                    <tr key={ep.id}>
                      <td className="px-2 py-1 border">{idx + 1}</td>
                      <td className="px-2 py-1 border">{ep.episode}</td>
                      <td className="px-2 py-1 border">{ep.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
