import { genericRequest, genericRequestAutheticated } from '../utils/api';

const base_url = import.meta.env.VITE_ENDPOINT_API ?? 'https://localhost:7004/api'

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
}

const handleError = async (error: any, context: string) => {
  const errorMessage = `Error during ${context}: ${error.message}`
  console.error(errorMessage)

  const errorDetails = {
    response: error.response
      ? {
          data: error.response.data,
          status: error.response.status,
          headers: error.response.headers,
        }
      : null,
    request: error.request || null,
    message: error.message,
  }

}

export const LoginService = async (name: string, password: string) => {
    try {
      const response = await genericRequest(base_url + '/User/login', 'POST', { name, password });
  
      console.log('API Response:', response);
      return response;
    } catch (error) {
      await handleError(error, 'login');
      throw error;
    }
  };

export const RegisterService = async (email: string, password: string) => {
  try {
    return await genericRequest(base_url + '/User/register', 'POST', { email, password })
  } catch (error) {
    await handleError(error, 'registration')
    throw error;
  }
}

export const LogoutService = async () => {
  try {

    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    await genericRequestAutheticated(headers, base_url + '/User/logout', 'POST')
  } catch (error) {
    await handleError(error, 'logout')
    throw error;
  }
}