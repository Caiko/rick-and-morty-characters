import CharactersTable from "./Components/CharactersTable";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/ricks-toilet.png')] bg-cover bg-center flex items-center justify-center">
        <div className="h-2/3 w-2/3">
          <CharactersTable />
        </div>
      </div>
    </>
  );
}

export default App;
