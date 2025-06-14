import type { Character } from "../../types/FetchTypes";
import React from "react";
import ExpandedRow from "./ExpandedRow";

type Props = {
  characters: Character[];
  isExpanded: number | null;
  toggleExpand: (id: number) => void;
};

export default function CharacterRow({
  characters,
  isExpanded,
  toggleExpand,
}: Props) {
  return (
    <div className="overflow-y-scroll h-5/6 w-full">
      <table className="w-full h-4/5 text-left bg-white table-auto">
        <thead className="sticky top-0 z-10 ">
          <tr>
            <th className="bg-stone-400 w-3/12">Name</th>
            <th className="bg-stone-400 w-1/12">Gender</th>
            <th className="bg-stone-400 w-1/12">Status</th>
            <th className="bg-stone-400 w-2/12">Species</th>
            <th className="bg-stone-400 w-4/12">Location</th>
            <th className="bg-stone-400 w-1/12">Episodes</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            // does't let me use an empty fragment here, so I use React.Fragment
            <React.Fragment key={character.id}>
              <tr
                key={character.id}
                className={`hover:bg-blue-400 transition cursor-pointer ${
                  isExpanded === character.id
                    ? "bg-blue-400"
                    : " odd:bg-white even:bg-gray-200"
                }`}
                onClick={() => toggleExpand(character.id)}
              >
                <td className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      character.status === "Alive"
                        ? "bg-green-500"
                        : character.status === "Dead"
                        ? "bg-red-500"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  {character.name}
                </td>
                <td>{character.gender}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
                <td>{character.location.name}</td>
                <td>{character.episode.length}</td>
              </tr>
              {isExpanded === character.id && (
                <ExpandedRow character={character}></ExpandedRow>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
