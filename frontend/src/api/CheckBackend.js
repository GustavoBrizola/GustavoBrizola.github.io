import axios from "axios";

// Import from .env
// @ts-ignore
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
* Checks connection with the backend server by requesting data from multiple endpoints.
* Can be imported by other files to verify backend connectivity.
 * 
 * Returns boolean
 * @param {boolean} alertstats Sends information to client about the connection
 */
export default 
async function BackendCheck(alertstats)
{
  let response;
  let data;
  try
  {
    // All endpoint requests from backend should be the same
    response = await axios.get(`${BACKEND_URL}/api/request/verify`);
    data = `${response.data.status}: ${response.data.message}`+'\n';

    response = await axios.get(`${BACKEND_URL}/api/request/data`);
    data += `${response.data.message}: ${response.data.timestamp}`+'\n';

    // Prints on browser terminal and sends a alert message to client using parameter
    if (alertstats) 
    {
      console.log(data);
      alert(data);
    }

    return true;
  }
  catch(error)
  {
    // @ts-ignore
    const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred";
    
    if (alertstats) 
    {
      console.error("Backend connection error:", errorMessage);
      alert(`Error: ${errorMessage}`);  
    }

    return false;
  }
}