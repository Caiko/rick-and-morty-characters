import type { Character } from "../../types/FetchTypes";
import React from "react";

interface Props {
  characters: Character[];
  isExpanded: number | null;
  toggleExpand: (id: number) => void;
}

export default function CharacterRow({
  characters,
  isExpanded,
  toggleExpand,
}: Props) {
  return (
    <table className="w-full h-4/5 text-center bg-white border-2 border-black table-auto">
      <thead>
        <tr>
          <th className="bg-stone-400">Name</th>
          <th className="bg-stone-400">Gender</th>
          <th className="bg-stone-400">Status</th>
          <th className="bg-stone-400">Species</th>
          <th className="bg-stone-400">Location</th>
          <th className="bg-stone-400">Episodes</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <React.Fragment key={character.id}>
            <tr
              key={character.id}
              className="hover:bg-gray-300 transition cursor-pointer"
              onClick={() => toggleExpand(character.id)}
            >
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.gender}</td>
              <td>{character.species}</td>
              <td>{character.location.name}</td>
              <td>{character.episode.length}</td>
            </tr>
            {isExpanded === character.id && (
              <tr className="bg-gray-100">
                <td colSpan={6}>
                  <div className="p-4 flex gap-6 items-center">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-32 h-32 rounded-lg border"
                    />
                    <div className="text-left space-y-1">
                      <p>
                        <strong>Origin:</strong> {character.origin.name}
                      </p>
                      <p>
                        <strong>Location:</strong> {character.location.name}
                      </p>
                      <p>
                        <strong>Episodes:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {character.episode.map((ep, idx) => (
                          <li key={idx}>{ep}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
