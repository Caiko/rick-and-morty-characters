import CharactersTable from "./Components/FullTable";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/ricks-toilet.png')] bg-cover bg-center flex items-center justify-center">
        <div className="h-4/5 w-4/5">
          <CharactersTable />
        </div>
      </div>
    </>
  );
}

export default App;
