import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

const NewGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: "/gallery/jnac2016.jpg",
      title: "6th JNAC 2016",
      category: "International Tournament",
    },
    {
      id: 2,
      src: "/gallery/singapore2013.jpg",
      title: "Indor Archery Youth Cup 2013 - Singapore",
      category: "International Tournament",
    },
    {
      id: 3,
      src: "/gallery/singapore2013_2.jpg",
      title: "Flamming Arrows Outdoor Shoot 2013- Singapore",
      category: "International Tournament",
    },
    {
      id: 4,
      src: "/gallery/cas1.jpg",
      title: "CAS Tournament",
      category: "Tournaments",
    },
    {
      id: 6,
      src: "/gallery/jnac2013.jpg",
      title: "Junior National Archery Championship 2013",
      category: "Tournaments",
    },
    {
      id: 5,
      src: "/gallery/comunity.jpg",
      title: "Victory Celebration",
      category: "Community",
    },
    {
      id: 7,
      src: "/gallery/moives.jpg",
      title: "Moive Day",
      category: "Community",
    },
    {
      id: 8,
      src: "/gallery/practice2.jpg",
      title: "Team Spirit",
      category: "Training",
    },
    {
      id: 9,
      src: "/gallery/practice1.jpg",
      title: "Team Spirit",
      category: "Training",
    },
    {
      id: 10,
      src: "/gallery/uvahessara-group.jpg",
      title: "Uva Heesara Team",
      category: "Uva Heesara 2025",
    },
    {
      id: 11,
      src: "/gallery/wayamba.jpg",
      title: "Wayamba Archery Championship",
      category: "Tournaments",
    },
    {
      id: 12,
      src: "/gallery/south1.jpg",
      title: "South Asian Games 2019 - Nepal",
      category: "Achievement",
    },
    {
      id: 13,
      src: "/gallery/youth-olympic.jpg",
      title: "Youth Olympic 2018",
      category: "Achievement",
    },
    {
      id: 14,
      src: "/gallery/moviesday2.jpg",
      title: "Movie Day",
      category: "Community",
    },
  ];

  const categories = [
    "All",
    "Training",
    "International Tournament",
    "Tournaments",
    "Achievement",
    "Community",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <SEO 
        title="Gallery" 
        description="Explore our gallery of archery events, competitions, and community moments."
        url="/newgallery"
      />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
          Our Gallery
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Capturing moments of precision, dedication, and triumph in our archery
          journey.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {image.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-purple-500/80 text-white text-sm rounded-full">
                    {image.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Navigation */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-bold text-xl mb-2">
                  {selectedImage.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-purple-500/80 text-white text-sm rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewGallery;
