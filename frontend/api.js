export async function registerUser(userData) {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  }
  
  export async function fetchUserData(id) {
    const response = await fetch(`http://localhost:5000/api/profile/${id}`);
    if (response.status === 404) {
      throw new Error('User not found');
    }
    if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        throw new Error('Network response was not ok');
      }
    return response.json();
  }