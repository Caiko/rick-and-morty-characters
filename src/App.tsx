import CharactersTable from "./Components/FullTable";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/ricks-toilet.png')] bg-cover bg-center flex items-center justify-center">
        <div className="h-3/4 w-3/4">
          <CharactersTable />
        </div>
      </div>
    </>
  );
}

export default App;
