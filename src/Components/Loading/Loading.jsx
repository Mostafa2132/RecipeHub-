import { motion } from "framer-motion";
import { FaPizzaSlice, FaHamburger, FaAppleAlt } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      {/* Animated Icons */}
      <div className="flex gap-6 text-4xl text-orange-500">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <FaPizzaSlice />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <FaHamburger />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        >
          <FaAppleAlt />
        </motion.div>
      </div>

      {/* Text Animation */}
      <motion.p
        className="text-gray-600 font-semibold text-lg tracking-wide"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Cooking something delicious...
      </motion.p>
    </div>
  );
}
