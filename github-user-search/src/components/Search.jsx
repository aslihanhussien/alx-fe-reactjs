import { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    performSearch(1);
  };

  const performSearch = async (pageNum) => {
    setLoading(true);
    setError(false);

    try {
      const searchParams = {
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos.trim(),
        page: pageNum
      };

      const data = await searchUsers(searchParams);
      
      if (pageNum === 1) {
        setUsers(data.items);
      } else {
        setUsers(prev => [...prev, ...data.items]);
      }
      
      setHasMore(data.items.length === 10);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    performSearch(nextPage);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="e.g. octocat"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g. San Francisco"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Min Repositories Input */}
          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
              Min Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              placeholder="e.g. 10"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
        >
          Search Users
        </button>
      </form>

      {/* Loading State */}
      {loading && page === 1 && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-8">
          <p className="text-lg text-red-600">Looks like we cant find the user</p>
        </div>
      )}

      {/* Results Display */}
      {users.length > 0 && !loading && !error && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
              >
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-20 h-20 rounded-full border-2 border-gray-200"
                  />

                  {/* User Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {user.login}
                    </h3>
                    
                    {user.location && (
                      <p className="text-sm text-gray-600 mb-2">
                        📍 {user.location}
                      </p>
                    )}

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      {user.public_repos !== undefined && (
                        <span>📚 {user.public_repos} repos</span>
                      )}
                    </div>

                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-gray-600 text-white font-medium py-3 px-8 rounded-md hover:bg-gray-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {users.length === 0 && !loading && !error && (
        <div className="text-center py-8">
          <p className="text-gray-500">Enter search criteria and click "Search Users" to begin</p>
        </div>
      )}
    </div>
  );
}

export default Search;