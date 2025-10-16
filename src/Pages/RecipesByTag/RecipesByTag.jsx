import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function RecipesByTag() {
  const { tag } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["recipes", tag],
    queryFn: () => axios.get(`https://dummyjson.com/recipes/tag/${tag}`),
  });

  const recipes = data?.data?.recipes || [];
  if (isLoading) return <Loading />;

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>{tag} Recipes | Recipe Hub</title>
        <meta
          name="description"
          content={`Explore delicious handpicked recipes in the ${tag} category.`}
        />
        <meta name="keywords" content={`recipes, ${tag}, food, cooking`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-orange-100 text-orange-600 font-bold rounded-full shadow-md mb-4">
            🍴 Category
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Recipes By Tag <span className="text-orange-500">{tag}</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the best handpicked recipes from the{" "}
            <span className="font-semibold">{tag}</span> category.
          </p>
        </motion.div>

        {/* Recipes Grid */}
        <div className="max-w-7xl mx-auto">
          {recipes.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recipes.map((recipe, i) => (
                <motion.div
                  key={recipe.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <RecipeCard recipe={recipe} i={i} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <motion.img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt={`No recipes in ${tag}`}
                className="w-24 h-24 mx-auto mb-6"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <h2 className="text-xl font-semibold text-gray-500">
                No recipes found in this category.
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
