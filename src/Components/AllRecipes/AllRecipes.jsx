import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
import { FaUtensils } from "react-icons/fa";

export default function AllRecipes() {
  const { data, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => axios.get("https://dummyjson.com/recipes"),
  });

  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  if (isLoading) return <Loading />;

  const recipes = data?.data?.recipes || [];

  // Filters
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.difficulty === selectedDifficulty || selectedDifficulty === "All"
  );

  // Sorting
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case "prepTime":
        return a.prepTimeMinutes - b.prepTimeMinutes;
      case "cookTime":
        return a.cookTimeMinutes - b.cookTimeMinutes;
      case "rating":
        return b.rating - a.rating;
      case "servings":
        return b.servings - a.servings;
      default:
        return 0;
    }
  });

  const difficulties = ["All", "Easy", "Medium", "Hard"];
  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "prepTime", label: "Prep Time (Fastest)" },
    { value: "cookTime", label: "Cook Time (Shortest)" },
    { value: "rating", label: "Highest Rating" },
    { value: "servings", label: "Most Servings" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 text-4xl font-bold text-gray-800">
          <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white">
            <FaUtensils className="text-2xl" />
          </span>
          <h2>All Recipes</h2>
        </div>
        <p className="text-gray-500 mt-2">
          Discover and explore a variety of delicious recipes
        </p>
      </motion.div>

      {/* Filters + Sorting */}
      <div className="flex flex-wrap justify-between items-center gap-5 mb-10">
        {/* Difficulty Filter */}
        <div className="flex flex-wrap gap-3">
          {difficulties.map((diff) => (
            <motion.button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedDifficulty === diff
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {diff}
            </motion.button>
          ))}
        </div>

        {/* Sorting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-orange-400"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      {/* Recipes Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {sortedRecipes.length > 0 ? (
          sortedRecipes.map((recipe, i) => (
            <RecipeCard key={recipe.id} recipe={recipe} i={i} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 flex flex-col items-center gap-3 py-10">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="sad-food"
              className="w-24 h-24"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="text-lg font-medium"
            >
              No recipes found.
            </motion.span>
          </p>
        )}
      </motion.div>
    </div>
  );
}
