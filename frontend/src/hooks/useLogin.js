import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }

      localStorage.setItem('user', JSON.stringify(result));
      dispatch({ type: 'LOGIN', payload: result });

      return result; // return result for further use if needed

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

// import { useState } from 'react'
// import { useAuthContext } from './useAuthContext'

// export const useLogin = () => {

//   const [error, setError] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const { dispatch } = useAuthContext()

//   const login = async (email, password) => {
//     setIsLoading(true);
//     setError(null);
  
//     const response = await fetch('/api/user/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
  
//     const json = await response.json();

//     // console.log('Login response:', json); 
  
//     if (!response.ok) {
//       setIsLoading(false);
//       setError(json.error);

//     } else {
//       localStorage.setItem('user', JSON.stringify(json));
//       // console.log('hello')
//       dispatch({ type: 'LOGIN', payload: json });
//       setIsLoading(false);
//     }
//   };
  

//   return { login, isLoading, error }
// }