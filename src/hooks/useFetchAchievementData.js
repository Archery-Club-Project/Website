import { useState, useEffect, useCallback } from 'react';
import { fetchAchievements } from '../api/achievementsApi.js';

/**
 * Custom hook to fetch achievement data with loading states and error handling
 * @returns {Array & Object} Array of achievements with additional properties { data, loading, error, refetch }
 */
export const useFetchAchievementData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🎯 Hook: Starting to fetch achievements data...');
      
      const achievementsData = await fetchAchievements();
      
      // Additional validation
      if (!Array.isArray(achievementsData)) {
        throw new Error('Invalid data format: Expected array of achievements');
      }
      
      console.log(`🎯 Hook: Successfully loaded ${achievementsData.length} achievements`);
      setData(achievementsData);
    } catch (err) {
      console.error('🎯 Hook: Failed to fetch achievements:', err);
      setError(err.message || 'Failed to load achievements');
      
      // Try to load fallback data from JSON file if API fails
      try {
        console.log('🎯 Hook: Attempting to load fallback data...');
        // Dynamic import of JSON as fallback
        const fallbackModule = await import('../api/fallbackData.json');
        const fallbackData = fallbackModule.default || fallbackModule;
        
        if (Array.isArray(fallbackData) && fallbackData.length > 0) {
          console.log('🎯 Hook: Loaded fallback data successfully');
          setData(fallbackData);
          setError('Using cached data - API temporarily unavailable');
        } else {
          setData([]);
        }
      } catch (fallbackError) {
        console.warn('🎯 Hook: No fallback data available:', fallbackError);
        setData([]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Create the return object with array-like behavior
  const hookReturn = {
    data,
    loading,
    error,
    refetch: fetchData,
    isEmpty: data.length === 0,
    count: data.length,
  };

  // Make the return value behave like an array but also expose additional properties
  const dataWithMethods = [...data];
  Object.defineProperties(dataWithMethods, {
    loading: { value: loading, enumerable: false },
    error: { value: error, enumerable: false },
    refetch: { value: fetchData, enumerable: false },
    isEmpty: { value: data.length === 0, enumerable: false },
    count: { value: data.length, enumerable: false },
    data: { value: data, enumerable: false },
  });
  
  return dataWithMethods;
};
