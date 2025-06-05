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
      <tr className="bg-blue-300">
        <td colSpan={6}>
          <div className="h-60 flex items-center w-full justify-between  ">
            <div className="flex gap-4 text-left items-center w-1/4">
              <img
                src={character.image}
                alt={character.name}
                className="w-32 h-32 border"
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

            <div className=" h-50 w-3/4   overflow-y-scroll  max-w-full ">
              <table className="w-full  table-auto text-left">
                <thead className="bg-stone-400 sticky top-0 ">
                  <tr>
                    <th>Episodes</th>
                    <th>Season and Episode</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody className="bg-white ">
                  {episodes.map((ep, idx) => (
                    <tr key={ep.id} className="odd:bg-white even:bg-gray-200">
                      <td>{idx + 1}</td>
                      <td>{ep.episode}</td>
                      <td>{ep.name}</td>
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
