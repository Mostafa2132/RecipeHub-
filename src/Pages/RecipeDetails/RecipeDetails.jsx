import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaClock,
  FaUsers,
  FaFireAlt,
  FaStar,
  FaFlag,
  FaUtensilSpoon,
} from "react-icons/fa";

export default function RecipeDetails() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => axios.get(`https://dummyjson.com/recipes/${id}`),
  });

  if (isLoading) return <Loading />;

  const recipe = data?.data || {};

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>{recipe.name} | Recipe Hub</title>
        <meta
          name="description"
          content={recipe.description || "A delicious recipe you’ll love!"}
        />
        <meta name="keywords" content={`recipe, ${recipe.name}, ${recipe.tags?.join(", ")}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10"
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Recipe Image */}
            <motion.div
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <FaStar className="text-yellow-400" />{" "}
                <span className="font-bold">{recipe.rating}</span>
                <span className="text-gray-500 text-sm">
                  ({recipe.reviewCount} reviews)
                </span>
              </div>
            </motion.div>

            {/* Recipe Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                {recipe.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                {recipe.description || "A delicious recipe you’ll definitely love!"}
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
                <div className="flex items-center gap-2">
                  <FaClock className="text-orange-500" />{" "}
                  <span>
                    {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min total
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-orange-500" />{" "}
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFireAlt className="text-orange-500" />{" "}
                  <span>{recipe.caloriesPerServing} cal/serving</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFlag className="text-orange-500" />{" "}
                  <span>{recipe.cuisine}</span>
                </div>
              </div>

              {/* Difficulty + Tags */}
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase">
                  {recipe.difficulty}
                </span>
                {recipe.tags?.map((tag, i) => (
                  <Link 
                    to={`/recipesByTag/${tag}`}
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Ingredients 🥗
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              {recipe.ingredients?.map((ing, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg shadow-sm"
                >
                  <FaUtensilSpoon className="text-orange-500" />
                  {ing}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">
              Instructions 📜
            </h2>
            <ol className="relative border-l-4 border-orange-300 ml-6 space-y-6">
              {recipe.instructions?.map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="ml-6 bg-orange-50 p-4 rounded-lg shadow-md"
                >
                  <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700">{step}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Reviews & Extras */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-600">
            <p>
              <span className="font-bold">Meal Type:</span>{" "}
              {recipe.mealType?.join(", ")}
            </p>
            <p>
              <span className="font-bold">Created By User ID:</span> {recipe.userId}
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              ← Back to Recipes
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
