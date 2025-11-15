import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Initialize filtered recipes on component mount or when recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Display filtered recipes if search term exists, otherwise show all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found matching "${searchTerm}"`
            : 'No recipes yet. Add one above!'}
        </p>
      ) : (
        displayRecipes.map((recipe) => (
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
            <h3>{recipe.title}</h3>
            <p>{recipe.description.substring(0, 100)}...</p>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#2196F3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              View Details
            </Link>
          </div>
        ))
      )}
      
      {searchTerm && displayRecipes.length > 0 && (
        <p style={{ 
          marginTop: '20px', 
          fontStyle: 'italic',
          color: '#666'
        }}>
          Showing {displayRecipes.length} recipe(s) matching "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default RecipeList;