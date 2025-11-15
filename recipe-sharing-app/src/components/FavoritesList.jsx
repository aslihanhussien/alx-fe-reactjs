import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Get the actual recipe objects from the favorites IDs
  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  ).filter(Boolean); // Remove any undefined entries

  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '20px', 
      border: '2px solid #FFD700',
      borderRadius: '8px',
      backgroundColor: '#FFFEF0'
    }}>
      <h2 style={{ color: '#333', marginTop: '0' }}>⭐ My Favorites</h2>
      
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#666' }}>
          No favorites yet. Start adding recipes to your favorites!
        </p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div 
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '5px',
              backgroundColor: '#fff'
            }}
          >
            <h3 style={{ margin: '0 0 10px 0' }}>{recipe.title}</h3>
            <p style={{ color: '#666', marginBottom: '10px' }}>
              {recipe.description.substring(0, 100)}...
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                View Details
              </Link>
              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;