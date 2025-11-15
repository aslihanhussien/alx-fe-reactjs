import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    // Generate recommendations when component mounts
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{
      margin: '20px 0',
      padding: '20px',
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      backgroundColor: '#F0FFF4'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h2 style={{ color: '#333', margin: '0' }}>🎯 Recommended for You</h2>
        <button
          onClick={generateRecommendations}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Refresh Recommendations
        </button>
      </div>

      {recommendations.length === 0 ? (
        <p style={{ color: '#666' }}>
          No recommendations available. Add more recipes or favorites to get personalized suggestions!
        </p>
      ) : (
        recommendations.map((recipe) => (
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
            <Link
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
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
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;