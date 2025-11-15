import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && description.trim()) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        margin: '20px 0', 
        padding: '20px', 
        border: '1px solid #ddd',
        borderRadius: '5px'
      }}
    >
      <h2>Add a New Recipe</h2>
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
          fontSize: '16px'
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;