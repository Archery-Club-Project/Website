/**
 * API Configuration
 * Central configuration for all API endpoints and settings
 */

export const API_CONFIG = {
  BASE_URLS: {
    GOOGLE_APPS_SCRIPT: 'https://script.google.com/macros/s/',
  },
  
  ENDPOINTS: {
    ACHIEVEMENTS: import.meta.env.VITE_GOOGLE_APPS_SCRIPT_ID || 'APP_ID/exec',
  },
  
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
};

/**
 * Get full URL for an endpoint
 * @param {string} endpoint - The endpoint key from ENDPOINTS
 * @returns {string} Full URL
 */
export const getApiUrl = (endpoint) => {
  const endpointPath = API_CONFIG.ENDPOINTS[endpoint];
  if (!endpointPath) {
    throw new Error(`Unknown endpoint: ${endpoint}`);
  }
  
  return `${API_CONFIG.BASE_URLS.GOOGLE_APPS_SCRIPT}${endpointPath}`;
};
