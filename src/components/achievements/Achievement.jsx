import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './achievements.scss';
import { useFetchAchievementData } from '../../hooks/useFetchAchievementData.js';

// Professional SVG Icons
const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C13.1 2 14 2.9 14 4V7.5C14 8.3 13.3 9 12.5 9S11 8.3 11 7.5V4C11 2.9 11.9 2 12 2M21 9V7C21 6.4 20.6 6 20 6H17V4C17 2.3 15.7 1 14 1H10C8.3 1 7 2.3 7 4V6H4C3.4 6 3 6.4 3 7V9C3 11.8 5.2 14 8 14H9V16H7C6.4 16 6 16.4 6 17S6.4 18 7 18H17C17.6 18 18 17.6 18 17S17.6 16 17 16H15V14H16C18.8 14 21 11.8 21 9M19 9C19 10.7 17.7 12 16 12H15V7H19V9M9 12C7.3 12 6 10.7 6 9V7H9V12Z"/>
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
  </svg>
);

const WorldIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16C9,17.1 9.9,18 11,18V19.93M17.9,17.39C17.64,16.58 16.9,16 16,16H15V13C15,12.45 14.55,12 14,12H8V10H10C10.55,10 11,9.55 11,9V7H13C14.1,7 15,6.1 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39Z"/>
  </svg>
);

const AwardIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" fill="#10B981"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.89,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V8H19V19Z"/>
  </svg>
);

// Professional Medal SVG Icons
const GoldMedalIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 6.5L11.5 9.5L9 9.5L11 11L10.5 13.5L12 12L13.5 13.5L13 11L15 9.5L12.5 9.5L12 6.5Z" fill="#FFD700"/>
  </svg>
);

const SilverMedalIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 6.5L11.5 9.5L9 9.5L11 11L10.5 13.5L12 12L13.5 13.5L13 11L15 9.5L12.5 9.5L12 6.5Z" fill="#C0C0C0"/>
  </svg>
);

const BronzeMedalIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 6.5L11.5 9.5L9 9.5L11 11L10.5 13.5L12 12L13.5 13.5L13 11L15 9.5L12.5 9.5L12 6.5Z" fill="#CD7F32"/>
  </svg>
);

const ResultIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" fill="#4F9EF8"/>
  </svg>
);

// Helper function to convert Google Drive share URL to direct thumbnail URL
const getGoogleDriveImageUrl = (url) => {
  if (!url) return null;
   
  // If it's already a direct URL, return as is
  if (url.includes('drive.google.com/thumbnail') || url.includes('drive.google.com/uc')) {
    return url;
  }
  
  // Extract file ID from Google Drive share URL
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  }
  
  // If no match found, return original URL
  return url;
};

const Achievement = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Get data from API endpoint - moved inside component
  const achievementsData = useFetchAchievementData();
  
  // Destructure the hook return values
  const { data: achievements, loading, error, refetch } = achievementsData;

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };
  const getCategoryColor = (category) => {
    switch (category) {
      case 'International Training': return 'from-blue-500 to-cyan-500';
      case 'World Championship': return 'from-purple-500 to-pink-500';
      case 'National Championship': return 'from-green-500 to-emerald-500';
      case 'Youth Olympics': return 'from-red-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'International Training': return <TargetIcon />;
      case 'World Championship': return <WorldIcon />;
      case 'National Championship': return <TrophyIcon />;
      case 'Youth Olympics': return <AwardIcon />;
      default: return <TrophyIcon />;
    }
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="achievements container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
          <p className="text-white mt-4">Loading achievements...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="achievements container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center">
          <div className="text-red-400 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Failed to Load Achievements</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={refetch}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="achievements container mx-auto px-4 py-16 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6 animated-gradient-text">
          Our Achievements
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Years of dedication, training, and passion have led us to remarkable victories on national and international stages.
        </p>
      </motion.div>

      {/* Achievement Cards */}
      <div className="space-y-8">
        {achievements && achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="achievement-card bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-2/5">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={getGoogleDriveImageUrl(achievement.img)}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback image if the Google Drive image fails to load
                      e.target.src = 'https://placehold.co/800?text=Uva+Archery&font=roboto';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white text-sm font-medium flex items-center space-x-2`}>
                    <span className="category-icon text-white">{getCategoryIcon(achievement.category)}</span>
                    <span>{achievement.category}</span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm flex items-center space-x-1">
                    <CalendarIcon />
                    <span>{achievement.year}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">{achievement.title}</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                  </div>
                </div>                {/* Medal Summary */}
                <div className="flex flex-wrap gap-4 items-center mb-6">                  {achievement.gold > 0 && (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-3 py-2 rounded-lg border border-yellow-400/30">
                      <span className="medal-icon"><GoldMedalIcon /></span>
                      <span className="text-white font-bold text-lg">{achievement.gold}</span>
                      <span className="text-yellow-400 text-sm font-medium">Gold</span>
                    </div>
                  )}
                  {achievement.silver > 0 && (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-300/20 to-gray-500/20 px-3 py-2 rounded-lg border border-gray-300/30">
                      <span className="medal-icon"><SilverMedalIcon /></span>
                      <span className="text-white font-bold text-lg">{achievement.silver}</span>
                      <span className="text-gray-300 text-sm font-medium">Silver</span>
                    </div>
                  )}
                  {achievement.bronze > 0 && (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-400/20 to-orange-600/20 px-3 py-2 rounded-lg border border-orange-400/30">
                      <span className="medal-icon"><BronzeMedalIcon /></span>
                      <span className="text-white font-bold text-lg">{achievement.bronze}</span>
                      <span className="text-orange-400 text-sm font-medium">Bronze</span>
                    </div>
                  )}
                </div>                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {achievement.highlights.map((highlight, index) => (
                    <div key={`${achievement.id}-highlight-${highlight.slice(0, 20)}-${index}`} className="flex items-start space-x-3 p-2 bg-white/5 rounded-lg border-l-4 border-gradient-to-b border-l-green-400">
                      <div className="mt-0.5">
                        <CheckIcon />
                      </div>
                      <span className="text-gray-200 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>                {/* View More Button */}
                <motion.button
                  onClick={() => toggleCard(achievement.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="achievement-button group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center space-x-2">
                    <EyeIcon />
                    <span className="font-semibold">
                      {expandedCard === achievement.id ? 'Show Less' : 'View More Details'}
                    </span>
                    <motion.span 
                      animate={{ rotate: expandedCard === achievement.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-1"
                    >
                      <ChevronDownIcon />
                    </motion.span>
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedCard === achievement.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10 bg-white/5"
                >                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                      <TrophyIcon />
                      <span>Medal Winners</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievement.medals.map((medal, medalIndex) => (
                        <div key={`${achievement.id}-medal-${medalIndex}-${medal.category}`} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200">
                          <div className="font-medium text-white mb-3 flex items-center space-x-2">
                            <TargetIcon />
                            <span>{medal.category}</span>
                          </div>
                          <div className="space-y-2">                            {medal.Gold && (
                              <div className="flex items-center space-x-3 p-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg">
                                <span className="medal-icon"><GoldMedalIcon /></span>
                                <span className="text-gray-200 text-sm font-medium">{medal.Gold}</span>
                              </div>
                            )}
                            {medal.Silver && (
                              <div className="flex items-center space-x-3 p-2 bg-gradient-to-r from-gray-300/10 to-gray-500/10 rounded-lg">
                                <span className="medal-icon"><SilverMedalIcon /></span>
                                <span className="text-gray-200 text-sm font-medium">{medal.Silver}</span>
                              </div>
                            )}
                            {medal.Bronze && (
                              <div className="flex items-center space-x-3 p-2 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-lg">
                                <span className="medal-icon"><BronzeMedalIcon /></span>
                                <span className="text-gray-200 text-sm font-medium">{medal.Bronze}</span>
                              </div>
                            )}
                            {medal.result && (
                              <div className="flex items-center space-x-3 p-2 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-lg">
                                <span className="medal-icon"><ResultIcon /></span>
                                <span className="text-gray-200 text-sm font-medium">{medal.result}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;