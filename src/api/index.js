// API exports
export { fetchAchievements, fetchAchievementById, fetchAchievementsByCategory } from './achievementsApi.js';
export { makeApiCall } from './client.js';
export { API_CONFIG, getApiUrl } from './config.js';

// Default export for the main achievements API
export { fetchAchievements as default } from './achievementsApi.js';
