# Achievements API Documentation

This folder contains a maintainable API structure for fetching achievement data from Google Apps Script endpoints.

## Structure

```
src/api/
├── config.js           # API configuration and endpoints
├── client.js           # Axios client with interceptors and retry logic
├── achievementsApi.js  # Achievement-specific API functions
└── index.js           # Barrel exports
```

## Features

### 🔧 Configuration Management
- Centralized API configuration in `config.js`
- Easy endpoint management
- Configurable timeouts and retry settings

### 🔄 Retry Logic
- Automatic retry on failed requests
- Configurable retry attempts and delays
- Exponential backoff

### 📝 Request/Response Logging
- Detailed logging for debugging
- Request and response interceptors
- Error tracking

### ✅ Data Validation
- Validates achievement data structure
- Provides fallback values for missing fields
- Type coercion for numeric fields

### 🎯 Error Handling
- Comprehensive error handling
- User-friendly error messages
- Graceful degradation

## Usage

### Basic Usage with Hook

```jsx
import { useFetchAchievementData } from '../hooks/useFetchAchievementData.js';

const MyComponent = () => {
  const achievementsData = useFetchAchievementData();
  const { loading, error, refetch } = achievementsData;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {achievementsData.map(achievement => (
        <div key={achievement.id}>{achievement.title}</div>
      ))}
    </div>
  );
};
```

### Direct API Usage

```jsx
import { fetchAchievements, fetchAchievementById } from '../api';

// Fetch all achievements
const achievements = await fetchAchievements();

// Fetch specific achievement
const achievement = await fetchAchievementById('achievement-id');
```

## Configuration

### API Endpoints

Update endpoints in `src/api/config.js`:

```javascript
export const API_CONFIG = {
  ENDPOINTS: {
    ACHIEVEMENTS: 'your-endpoint-id/exec',
    // Add more endpoints here
  },
};
```

### Retry Settings

Adjust retry behavior in `src/api/config.js`:

```javascript
export const API_CONFIG = {
  TIMEOUT: 10000,        // Request timeout in ms
  RETRY_ATTEMPTS: 3,     // Number of retry attempts
  RETRY_DELAY: 1000,     // Base retry delay in ms
};
```

## Data Format

Expected achievement data structure:

```javascript
{
  id: "unique-id",
  title: "Achievement Title",
  description: "Achievement description",
  category: "Competition Category",
  year: 2024,
  img: "image-url",
  gold: 1,
  silver: 2,
  bronze: 1,
  highlights: ["highlight 1", "highlight 2"],
  medals: [
    {
      category: "Men's Individual",
      Gold: "John Doe",
      Silver: "Jane Smith",
      Bronze: "Bob Wilson"
    }
  ]
}
```

## Error Handling

The API includes comprehensive error handling:

1. **Network Errors**: Automatic retry with exponential backoff
2. **Timeout Errors**: Clear timeout messages
3. **Server Errors**: Specific error messages for different status codes
4. **Data Validation**: Fallback values for missing or invalid data

## Adding New API Endpoints

1. Add endpoint to `src/api/config.js`
2. Create API function in appropriate file (e.g., `src/api/newApi.js`)
3. Export from `src/api/index.js`
4. Create corresponding hook in `src/hooks/`

## Testing

You can test the API functions directly:

```javascript
import { fetchAchievements } from './src/api';

// Test the API
fetchAchievements()
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
```

## Best Practices

1. **Always use the hook** for React components
2. **Handle loading and error states** in your UI
3. **Use TypeScript** for better type safety (optional enhancement)
4. **Cache responses** when appropriate
5. **Implement offline fallbacks** for better UX

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure Google Apps Script is deployed with correct permissions
2. **Timeout Errors**: Check network connection and increase timeout if needed
3. **Data Format Errors**: Verify the API returns data in expected format

### Debug Logs

Enable detailed logging by checking the browser console. All requests and responses are logged with prefixes:
- 🚀 API Request
- ✅ API Response  
- ❌ Response Error
- 🔄 Retrying API call
