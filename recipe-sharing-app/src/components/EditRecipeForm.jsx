import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && description.trim()) {
      updateRecipe({ id: recipe.id, title, description });
      setIsEditing(false);
    }
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px',
          fontSize: '16px'
        }}
      >
        Edit Recipe
      </button>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h3>Edit Recipe</h3>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            marginBottom: '10px'
          }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            minHeight: '100px'
          }}
          required
        />
      </div>
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px',
          fontSize: '16px'
        }}
      >
        Save Changes
      </button>
      <button
        type="button"
        onClick={() => {
          setTitle(recipe.title);
          setDescription(recipe.description);
          setIsEditing(false);
        }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#757575',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;