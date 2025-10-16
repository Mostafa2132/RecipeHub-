import { motion } from "framer-motion";
import { FaClock, FaUsers, FaFireAlt, FaStar, FaFlag } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, i }) {
  const totalTime = recipe?.prepTimeMinutes + recipe?.cookTimeMinutes;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer relative group focus-within:ring-2 focus-within:ring-orange-400"
      initial={{ opacity: 0, y: 100, rotateX: -15, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      whileHover={{
        scale: 1.06,
        rotateX: 3,
        rotateY: -3,
        boxShadow: "0 25px 40px rgba(0,0,0,0.25)",
        transition: { duration: 0.4, type: "spring" },
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden relative rounded-t-2xl">
        <motion.img
          src={recipe.image}
          alt={recipe.name || "Recipe image"}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
          className="absolute top-3 right-3 bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md"
        >
          <FaStar className="text-yellow-400" aria-hidden="true" /> {recipe.rating}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-2xl font-extrabold text-gray-800 mb-2 line-clamp-1 group-hover:text-orange-600 transition"
          whileHover={{ x: 5 }}
        >
          {recipe.name}
        </motion.h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {recipe.description || "Delicious recipe you’ll love!"}
        </p>

        {/* Info Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
          className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-5"
        >
          <div className="flex items-center gap-2">
            <FaClock className="text-orange-500" /> {totalTime} min
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-orange-500" /> {recipe.servings} servings
          </div>
          <div className="flex items-center gap-2">
            <FaFireAlt className="text-orange-500" /> {recipe.caloriesPerServing} cal
          </div>
          <div className="flex items-center gap-2">
            <FaFlag className="text-orange-500" /> {recipe.cuisine}
          </div>
        </motion.div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-bold uppercase tracking-wide">
            {recipe.difficulty}
          </span>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to={`/recipe/${recipe.id}`}
              className="relative px-5 py-2 text-sm bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            >
              View Recipe
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
