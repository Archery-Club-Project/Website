/**
 * Test file for API functionality
 * Run this in browser console to test API endpoints
 */

import { fetchAchievements } from './api/achievementsApi.js';

// Test the achievements API
export const testAchievementsAPI = async () => {
  console.log('🧪 Testing Achievements API...');
  
  try {
    const data = await fetchAchievements();
    console.log('✅ API Test Successful!');
    console.log('📊 Data received:', data);
    console.log(`📈 Total achievements: ${data.length}`);
    
    if (data.length > 0) {
      console.log('📋 First achievement:', data[0]);
    }
    
    return data;
  } catch (error) {
    console.error('❌ API Test Failed:', error);
    throw error;
  }
};

// Uncomment to run test immediately
// testAchievementsAPI();
