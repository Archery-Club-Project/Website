import { makeApiCall } from './client.js';
import { getApiUrl } from './config.js';

/**
 * Achievement Data Validation Schema
 * Validates the structure of achievement data from API
 */
const validateAchievementData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('Achievement data must be an array');
  }
  
  return data.map((achievement, index) => {
    // Required fields validation
    const requiredFields = ['id', 'title', 'description', 'category', 'year'];
    for (const field of requiredFields) {
      if (!achievement[field]) {
        console.warn(`Missing required field '${field}' in achievement at index ${index}`);
      }
    }
    
    // Ensure numeric fields are numbers
    const numericFields = ['gold', 'silver', 'bronze'];
    numericFields.forEach(field => {
      if (achievement[field] !== undefined) {
        achievement[field] = Number(achievement[field]) || 0;
      }
    });
    
    // Ensure arrays exist
    if (!Array.isArray(achievement.highlights)) {
      achievement.highlights = [];
    }
    
    if (!Array.isArray(achievement.medals)) {
      achievement.medals = [];
    }
    
    // Ensure image field exists
    if (!achievement.img) {
      achievement.img = '/placeholder-achievement.jpg'; // fallback image
    }
    
    return achievement;
  });
};

/**
 * Fetch achievements data from Google Apps Script
 * @returns {Promise<Array>} Array of achievement objects
 */
export const fetchAchievements = async () => {
  try {
    console.log('📊 Fetching achievements data...');
    
    const config = {
      method: 'GET',
      url: getApiUrl('ACHIEVEMENTS'),
      params: {
        // Add any query parameters if needed
        timestamp: Date.now(), // Cache busting
      },
    };
    
    const data = await makeApiCall(config);
    
    console.log('✅ Achievements data fetched successfully');
    
    // Validate and transform data
    const validatedData = validateAchievementData(data);
    
    return validatedData;
  } catch (error) {
    console.error('❌ Failed to fetch achievements:', error.message);
    
    // Return fallback data or empty array based on your preference
    throw new Error(`Failed to load achievements: ${error.message}`);
  }
};

/**
 * Fetch a specific achievement by ID
 * @param {string|number} achievementId - The achievement ID
 * @returns {Promise<Object>} Achievement object
 */
export const fetchAchievementById = async (achievementId) => {
  try {
    const achievements = await fetchAchievements();
    const achievement = achievements.find(item => item.id === achievementId);
    
    if (!achievement) {
      throw new Error(`Achievement with ID ${achievementId} not found`);
    }
    
    return achievement;
  } catch (error) {
    console.error('❌ Failed to fetch achievement by ID:', error.message);
    throw error;
  }
};

/**
 * Get achievements by category
 * @param {string} category - The category to filter by
 * @returns {Promise<Array>} Filtered achievements array
 */
export const fetchAchievementsByCategory = async (category) => {
  try {
    const achievements = await fetchAchievements();
    return achievements.filter(achievement => 
      achievement.category?.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error('❌ Failed to fetch achievements by category:', error.message);
    throw error;
  }
};
