import axios from 'axios'

//request generico para hacer peticiones a la API
export const genericRequest = async (url: string, method: string, body?: any) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    })
    return response.data
  } catch (error: any) {
    
  }
}

export const genericRequestAutheticated = async (
  headers: any,
  url: string,
  method: string,
  body?: any,
) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: headers,
      data: body,
    })
    return response.data
  } catch (error: any) {
    
  }
}

//Ejemplo de uso
// genericRequest('http://localhost:3001/api/users', 'GET').then((data) => {
//   console.log(data)
// })