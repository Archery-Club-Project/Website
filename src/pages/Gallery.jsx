import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Competition Day",
    description: "National Championship 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Training Session",
    description: "Advanced Technique Workshop",
  },
  {
    url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Team Practice",
    description: "Evening Practice Session",
  },
  {
    url: "https://media.istockphoto.com/id/145998064/photo/four-archery-targets-in-a-row-on-green-meadow.jpg?s=612x612&w=0&k=20&c=sqxSSmiRnFSKV78MniSgMAm5oU60-eUxiHohhSD9OdA=",
    title: "Competition Day",
    description: "National Championship 2023",
  },
  {
    url: "https://cbayou.org/wp-content/uploads/2013/06/IMG_5774.jpg",
    title: "Training Session",
    description: "Advanced Technique Workshop",
  },
  {
    url: "https://www.worldarchery.sport/sites/default/files/styles/full_desktop/public/news/images/body/sha18_a17_2283-x3.jpg?itok=9z9jVTY-",
    title: "Team Practice",
    description: "Evening Practice Session",
  },
  {
    url: "https://drive.google.com/uc?export=view&id=1su1wgpLP5D6WXX1cr1bpWhP27tMOkJw6",
    title: "Training Session",
    description: "Advanced Technique Workshop",
  },
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <LayoutGroup>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-3 w-full">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <>
              {/* Background Overlay - Closes on Click */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedImage(null)}
              />

              {/* Expanded Image View - Clicking inside doesn't close */}
              <motion.div
                layoutId={`image-${images.indexOf(selectedImage)}`}
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)} // Click outside closes the image
              >
                <motion.div
                  className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
                >
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default Gallery;
