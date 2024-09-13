const API_URL = "https://api.example.com";
const TOKEN_KEY = "auth_token";

const secureRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
