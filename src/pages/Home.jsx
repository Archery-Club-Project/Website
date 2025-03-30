import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArcherAnimation from '../components/ArcherAnimation';
import Achievements from './Achievements';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to the Archery Club of Uva
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the art of precision and discipline through archery
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Join Us Today
          </motion.a>
        </motion.div>
      </section>


      {/* Features Section */}
      <section ref={ref} className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expert Training</h3>
              <p className="text-gray-300">
                Learn from experienced coaches and improve your archery skills
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Modern Facilities</h3>
              <p className="text-gray-300">
                Access to state-of-the-art equipment and training facilities
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Regular Competitions</h3>
              <p className="text-gray-300">
                Participate in tournaments and showcase your skills
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4">
        <About/>  
      </section>
      <section className="py-20 px-4">
        <Achievements/>  
      </section>
      <section className="py-20 px-4">
        {/* <Gallery/>   */}
      </section>
      <section className="py-20 px-4">
        <Contact/>  
      </section>
    </div>
  );
};

export default Home;