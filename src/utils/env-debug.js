/**
 * Environment utilities for debugging and validation
 */

export const ENV_DEBUG = {
  // Check if environment variables are loaded correctly
  checkEnvVars() {
    const envVars = {
      VITE_GOOGLE_APPS_SCRIPT_ID: import.meta.env.VITE_GOOGLE_APPS_SCRIPT_ID,
      NODE_ENV: import.meta.env.NODE_ENV,
      MODE: import.meta.env.MODE,
      DEV: import.meta.env.DEV,
      PROD: import.meta.env.PROD,
    };
    
    console.group('🔧 Environment Variables');
    Object.entries(envVars).forEach(([key, value]) => {
      const status = value ? '✅' : '❌';
      console.log(`${status} ${key}:`, value || 'undefined');
    });
    console.groupEnd();
    
    return envVars;
  },
  
  // Validate that required environment variables are present
  validateRequiredEnvVars() {
    const required = ['VITE_GOOGLE_APPS_SCRIPT_ID'];
    const missing = required.filter(key => !import.meta.env[key]);
    
    if (missing.length > 0) {
      console.warn('⚠️ Missing required environment variables:', missing);
      console.log('💡 Make sure you have a .env file with these variables:');
      missing.forEach(key => console.log(`   ${key}=your_value_here`));
      return false;
    }
    
    console.log('✅ All required environment variables are present');
    return true;
  }
};

// Only run in development
if (import.meta.env.DEV) {
  ENV_DEBUG.checkEnvVars();
  ENV_DEBUG.validateRequiredEnvVars();
}
