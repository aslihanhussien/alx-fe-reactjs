import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post number {id}.</p>
      <p>Dynamic routing allows us to use the same component for different posts!</p>
    </div>
  );
}

export default BlogPost;