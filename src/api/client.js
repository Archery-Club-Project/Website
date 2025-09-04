import axios from 'axios';
import { API_CONFIG } from './config.js';

/**
 * Create axios instance with default configuration
 */
const apiClient = axios.create({
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

/**
 * Request interceptor for logging and request transformation
 */
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for logging and error handling
 */
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.status, error.message);
    
    // Handle specific error cases
    if (error.response?.status === 404) {
      throw new Error('Resource not found');
    }
    
    if (error.response?.status >= 500) {
      throw new Error('Server error. Please try again later.');
    }
    
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);

/**
 * Generic API call function with retry logic
 * @param {Object} config - Axios configuration object
 * @param {number} retryCount - Current retry attempt
 * @returns {Promise} API response
 */
export const makeApiCall = async (config, retryCount = 0) => {
  try {
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    if (retryCount < API_CONFIG.RETRY_ATTEMPTS) {
      console.log(`🔄 Retrying API call (${retryCount + 1}/${API_CONFIG.RETRY_ATTEMPTS})`);
      
      // Wait before retrying
      await new Promise(resolve => 
        setTimeout(resolve, API_CONFIG.RETRY_DELAY * (retryCount + 1))
      );
      
      return makeApiCall(config, retryCount + 1);
    }
    
    throw error;
  }
};

export default apiClient;
