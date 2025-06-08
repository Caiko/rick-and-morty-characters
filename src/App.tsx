import FullTable from "./components/FullTable";

function App() {
  return (
    <>
      <main className="w-screen h-screen bg-[url('/ricks-toilet.webp')] bg-cover bg-center flex items-center flex-col justify-center">
        <h1 className="text-2xl font-bold pb-4">
          Rick and Morty - Character List
        </h1>
        <div className="h-4/5 w-4/5">
          <FullTable />
        </div>
      </main>
    </>
  );
}

export default App;
