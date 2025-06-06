import FullTable from "./Components/FullTable";

function App() {
  return (
    <>
      <main className="w-screen h-screen bg-[url('/ricks-toilet.webp')] bg-cover bg-center flex items-center justify-center">
        <div className="h-4/5 w-4/5">
          <FullTable />
        </div>
      </main>
    </>
  );
}

export default App;
