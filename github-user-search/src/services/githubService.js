import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to search users with advanced criteria
export const searchUsers = async (searchParams) => {
  try {
    const { username, location, minRepos, page = 1 } = searchParams;
    
    // Build query string
    let query = '';
    
    if (username) {
      query += username;
    }
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
    
    // If no query parameters, search for all users
    if (!query) {
      query = 'type:user';
    }
    
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
};