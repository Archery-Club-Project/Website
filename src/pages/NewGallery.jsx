import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const NewGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/508157765_3172278342939894_6657387375347918488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGN1Pc7AcW9pYCzrJsE7puGywvxa-JcAzXLC_Fr4lwDNeO-3hUbx6Fn3Mu4QpZglh_NBDIJblblDStbOiZgKRe1&_nc_ohc=rJw_V1tLh-8Q7kNvwHBAbVi&_nc_oc=AdklJhW9tD_BLs2ul8yvju0JiBLImEHJi5PajDxiYyb0zU_85dSnqPjgzI_NR_UYgaI&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=pI63X-00EAtEg1qrmTHLBg&oh=00_AfYlz_RFLNxq0PFoNIRkaUIRKkjhfF3TZfEdFwADcdy1JA&oe=68BF576F",
      title: "6th JNAC 2016",
      category: "International Tournament",
    },
    {
      id: 2,
      src: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/500801285_3149696711864724_1642215038862539556_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGivD8HfxWiE-MP9zKnvywrNu-q1sNpVrw276rWw2lWvBSxxv7Hi1wtcPP7P_V9d1uCf90Z14Ze1w3Zv9dtyi3G&_nc_ohc=j-RqKKKHx70Q7kNvwEQXR4G&_nc_oc=AdmaXisWIuJ-8rH6oNJumqgvbcHSIR-TSmRpsayQ7-eXwLzKAB-vPoUEV6rIDplqDis&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=abgKx9Ws-Jaix5Wq0LngIw&oh=00_AfZ5GauS9V68aeH5r4dWlj8mhcNT1QAZN4VAaTqJ3Km18w&oe=68BF3FB0",
      title: "Indor Archery Youth Cup 2012 - Singapore",
      category: "International Tournament",
    },
    {
      id: 3,
      src: "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/504655134_3158730734294655_7817952505381598245_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeH1wAJtTKtLWg3PusvNwrLLSYItkzwRUbdJgi2TPBFRt-ixSLPCh1LicrjK5e2RVvEH5mCPQJdAnjIEQFbT2vtZ&_nc_ohc=sy1WBH1JVoIQ7kNvwGwEJTH&_nc_oc=Adk5ECOQHO1GhK3y-RbQz5YCeJFXEpD7T_eC_wkyssBUMDT3d4kC4gB3RVz1mq970Qc&_nc_zt=23&_nc_ht=scontent-bom1-1.xx&_nc_gid=JtOazTe_xZoyiPIfnURMDg&oh=00_AfaOD-x-9aydLPyM27EDdZTdDKTgui0ZZFV94MVY-_YOwQ&oe=68BF6B5B",
      title: "Flamming Arrows Outdoor Shoot 2013- Singapore",
      category: "International Tournament",
    },
    {
      id: 4,
      src: "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/480731432_1138272614657190_89740941561431889_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHZifde6Clmj2y18FYMdcOOjpfyYhvVJemOl_JiG9Ul6QnH5NhOu9DD8Owtv4NBB33yTy77X2cHqaQoI_aK4Fdo&_nc_ohc=oijYwgMqjOYQ7kNvwH5S4Dl&_nc_oc=AdmlZpMePKXVNgvU4PtqQnaEMgeP1JMII65ayRdsBcu7tW-9lX6OHz_aIFo8NTtw810&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=QqjtgOFY5Vw35y_7_qlOBg&oh=00_AfbBRLZ8NXiqiebKJNo9pu-wcxCoKBqxs_Ev0t2k6Za1cw&oe=68BF3F34",
      title: "CAS Tournament",
      category: "Tournaments",
    },
    {
      id: 5,
      src: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/475885469_1123166352834483_5825430131323173131_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE228CjXvQaEjsQZHtYILxwWrjx27gmhA1auPHbuCaEDRIdwHdyCxdAyhQTevtRkbwJHRMMjm8I5_VTQLpzFPwt&_nc_ohc=xWFUPIBE7lwQ7kNvwHfDi_o&_nc_oc=AdnVyiZH9MqPt8liclVQ-j3Il3tRYxUlcHAGgA2ujfO-g_8zEoEXT0li2HIFa6het9w&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=NC2efnvItHPmcVxABRHbIg&oh=00_AfbA5nrU9q3f0FLYHaKY-WetAaktMuSKhfa2U3kSZrCPVg&oe=68BF4A10",
      title: "Victory Celebration",
      category: "Community",
    },
    {
      id: 7,
      src: "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/475264888_1119743389843446_337428527593830512_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqgp-WZU1LoP3jzNM7IzvoF5z_rHdZ5oUXnP-sd1nmhdRcZc0nzY3LykbwpElbvfJnkxGKkHQqZM8v_FBwe8wf&_nc_ohc=_WixAHxEEK4Q7kNvwEK5Rhr&_nc_oc=AdmoVhSNJiqsOnV4SbzO6tiiuhDwoWuEQsgL1tMjE9Zq9Wow5ZFzq1FLYyJ0-T8lhSE&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=NGSz7ESNVX9_xMjwR2pTQw&oh=00_AfZHeLgJEiB3QfYveitUyiDjkN8K8X2rmZLb8ipGBDBUmg&oe=68BF66DA",
      title: "Team Spirit",
      category: "Community",
    },
    {
      id: 8,
      src: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/475295821_1119743469843438_5328891190617695063_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtIEnenVHSinvjMcSIrKjuzxQ9FvO9OkrPFD0W8706StO4M1PYuzQce3sXTUO1B47Qp0zbVYG_CGOcm_7h03Hf&_nc_ohc=bes7uefCGh0Q7kNvwGqN5j1&_nc_oc=AdmXVxmxWXpjx4Pv6Ns4s1vWTl5GwZjEqBP5B66Rdw1MPH7rUy414iJZlCHUngq8cNk&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=uY3Y01i-acZvq7ImoHQEoQ&oh=00_AfYSlSCThKKUv_cJ2GUSgTc8vU5_JdIhHQ7crAi0gNFobA&oe=68BF35EB",
      title: "Team Spirit",
      category: "Training",
    },
    {
      id: 9,
      src: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/475301032_1119743206510131_4708407843892819521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUTws0zIjTYPPszT3JAlSf2DKX59t1uE_YMpfn23W4T156LNGfIKP0m3vO4Lrp_-5AUy66xQYBU-XOy8b_Wa6k&_nc_ohc=kd9Lh2y5QHAQ7kNvwFaEwMW&_nc_oc=AdmXyJhQg_m9rHgSUZQShhhBQwDsofSYHXjeqflYSw7Q_zWoFf9ctbMPajo2oKozwgI&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=T7TRsET4ftmvYNbBex7ibw&oh=00_Afb4YEGGJGdUtcFCNZaTdgLX3qT0jZ9Apl-Z0hcRIk3xTw&oe=68BF3D48",
      title: "Team Spirit",
      category: "Training",
    },
    {
      id: 10,
      src: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/472738443_1105083711309414_4372850645190630193_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGC2LQF-GQ7j-LXJa6HKn2u07D9vM_HJsLTsP28z8cmwoMeXPNOLVjQqxkLPNalqtKsqShWDv-uIpV5FtHpI3T6&_nc_ohc=Bc87innKrGkQ7kNvwGJIQPv&_nc_oc=AdnNUJU4Jwn8DJ07D8XF8TqyAHrgkxTMZb_qqnyQMlm0EnsMaQUbeGypDt-PcpuneUM&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=utaKpajFxw8jKV7iiDzpIQ&oh=00_AfZMWTyjwVwJyneMRzO2XBrJFNR-ZCzqX-y5dvpHxZSCOA&oe=68BF4396",
      title: "Team Spirit",
      category: "Training",
    },
    {
      id: 11,
      src: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/476902195_1128817532269365_3168191802874024474_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCyRT8W3sKc4HjRJbaZSxMjZCeK4nskL6NkJ4rieyQvrO4ZbKQ5gjxBXaoNgJc_CT8onnLrDWiCxOAn3FOC_-P&_nc_ohc=HkfSyRpzs7YQ7kNvwG2CbnD&_nc_oc=Adk75bcA9hOAeiKdE5ame4Tpd3wXe7D-KzRti8s8Ynzcsy_nQ8uq7Cdp7cUwMv2gQIw&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=6xhNG4s6KabedXwKNEFVDA&oh=00_AfZ_esfL19yFGP4RQNMQwy_MlWOgP-tyrubqCvvlG42ryw&oe=68BF3843",
      title: "Wayamba Archery Championship",
      category: "Tournaments",
    },
    {
      id: 11,
      src: "https://scontent-bom2-1.xx.fbcdn.net/v/t1.6435-9/196492187_291856229298837_546698633093354382_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHujrRqc2iSzEZGtl9Ict47p9CyEx_JEnKn0LITH8kSctQQVMFUlt5fl120eO2tSjKgXLQjyRgvcQL05oFXd2h_&_nc_ohc=wMva_JXYN0wQ7kNvwGO9NEU&_nc_oc=AdlKHFNYzcP42om-Z4NgagBtsF1iLAqgEa47UwcR8nwSJEZyxtS8uX4pQp42yWQDgPw&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=Emt_HIoLEwKnUww660jWJQ&oh=00_AfaydkSh3_AxVatowXmSwLUxqdB-nVfkfhJbnj_u10bsCw&oe=68E0E35A",
      title: "South Asian Games 2019 - Nepal",
      category: "Achievement",
    },
    {
      id: 12,
      src: "https://scontent-bom2-4.xx.fbcdn.net/v/t1.6435-9/166490672_245276560623471_4380942018722422742_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJHEN9ffml8uYUOzWreIx3KMdIKn1RBG0ox0gqfVEEbXwVrBW4Tui2BTq1AshQWu8t1gkpfghX5qcTmtKO2am2&_nc_ohc=zVW2eTynVYEQ7kNvwGulZYP&_nc_oc=AdkDLU0cH1FMVT3tZGhz9yD-Dp4avEt1S29RZvXKbgE-dXLukr_okPgz2_VkSgC92JY&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=GaF7tR9tjzn6iVBMxoxm2g&oh=00_Afa7b-1eKTtHL6iaxM25QjIxhvwHPLUeeXsnsxCM3-Wh2g&oe=68E0F23C",
      title: "Youth Olympic 2018",
      category: "Achievement",
    },
{
      id: 13,
      src: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/481082738_1141281501022968_6377497151362139579_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGnnSrbRWtycjODVEWyFI1LxGer92JOE-vEZ6v3Yk4T66J6r3FITqJZERwTSFxCAOdFrNU6i6B6g8fn8F-tOhJi&_nc_ohc=42zNVelFFdAQ7kNvwGmhRyC&_nc_oc=AdnBig9GcvAcBmpbbzxDbCpZGHp9FdG5xXi-tI-sTqeBerKUO6Wz0kOnCKtlnuNfd1w&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=bWu3k182FxCT-hCKueQiiQ&oh=00_AfaZXrh9gbWI4CjFmOhxDj2hRfjfJNLFC5X6L5es0750KA&oe=68BF5270",
      title: "Team Spirit",
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
