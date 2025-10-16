import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  // توليد مجموعة من الـ particles
  const particles = Array.from({ length: 20 });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 to-white overflow-hidden flex flex-col items-center justify-center px-6 text-center">

      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0, rotate: -45, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
        className="text-[10rem] md:text-[12rem] font-extrabold text-orange-500 mb-6 select-none relative z-10"
      >
        404
      </motion.h1>

      {/* Animated message */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 relative z-10"
      >
        Oops! The page you are looking for doesn’t exist.
      </motion.p>

      {/* Link back button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition-all"
        >
          ← Go Back Home
        </Link>
      </motion.div>

      {/* Decorative floating circles */}
      <motion.div
        className="absolute w-16 h-16 bg-orange-200 rounded-full opacity-50 top-10 left-10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-orange-300 rounded-full opacity-40 bottom-20 right-10"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-70"
          initial={{ x: Math.random() * 1000 - 500, y: Math.random() * 600 - 300, scale: 0 }}
          animate={{ y: [0, Math.random() * -100, 0], x: [0, Math.random() * 100 - 50, 0], scale: [0, 1, 0] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
