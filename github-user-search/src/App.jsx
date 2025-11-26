import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          GitHub User Search
        </h1>
        <p className="text-xl text-gray-600">
          Search for GitHub users with advanced filters
        </p>
      </header>
      
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;