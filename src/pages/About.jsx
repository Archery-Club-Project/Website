import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "26", label: "Years of Excellence", icon: Calendar },
    { number: "50+", label: "Active Members", icon: Users },
    { number: "50+", label: "Championships Won", icon: Award },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every arrow counts, every shot matters. We train with dedication to achieve perfect accuracy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lifelong friendships through shared passion and mutual support in our archery journey.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for greatness in every aspect, from training methods to competitive performance.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement and innovation in techniques, equipment, and coaching methodologies.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          About Our Club
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Since 2000, we've been nurturing champions and building a community where precision meets passion.
        </p>
      </motion.div>      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.label} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
              <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </motion.div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mb-20"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Founded in 1999, the Archery Club of Uva began as a small group of passionate individuals 
              who shared a common dream: to elevate archery as a sport of precision and discipline in Sri Lanka.
            </p>
            <p>
              Over the years, we've grown from humble beginnings to become one of the most prestigious 
              archery clubs in the region, producing national champions and Olympic contenders.
            </p>
            <p>
              Our commitment to excellence has made us a beacon for aspiring archers, providing 
              world-class training facilities and expert coaching to athletes of all skill levels.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-blue-400">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Rotoruwa, Kabillawela North, Bandarawela</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10 backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>          <ul className="space-y-4">
            {[
              "Promote archery as a sport of precision and discipline",
              "Provide world-class training facilities and coaching",
              "Foster a supportive community of passionate archers",
              "Develop competitive athletes for national and international competitions",
              "Make archery accessible and enjoyable for everyone"
            ].map((item) => (
              <li key={item} className="flex items-start space-x-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2.5 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;