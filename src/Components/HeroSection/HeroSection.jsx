import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const QuickFilters = [
  { id: 1, name: "Easy" },
  { id: 2, name: "Quick", title: "Under 30 min" },
  { id: 3, name: "Vegetarian" },
  { id: 4, name: "Desserts" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const { data } = useQuery({
    queryKey: ["recipes", query],
    queryFn: () => axios.get(`https://dummyjson.com/recipes/search?q=${query}`),
  });
  const searchedRecipes = data?.data?.recipes || [];

  return (
    <>


      <section className="max-w-7xl overflow-hidden mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center relative ">
        {/* Image Section */}
        <motion.div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Main Hero Image */}
          <img
            src="./imgs/hero.avif"
            alt="main-food"
            className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
          />

          {/* Floating Pizza */}
          <motion.img
            src="./imgs/pizza.png"
            alt="pizza"
            className="absolute -left-2 top-1/3 w-20 h-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Apple */}
          <motion.img
            src="./imgs/apple.png"
            alt="apple"
            className="absolute -right-12 top-1/2 w-16 h-16"
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Floating Burger */}
          <motion.img
            src="./imgs/burger.png"
            alt="burger"
            className="absolute left-1/4 -top-8 w-20 h-20"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating Donut */}
          <motion.img
            src="./imgs/donut.png"
            alt="donut"
            className="absolute right-1/4 bottom-0 w-16 h-16"
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Discover Delicious <span className="text-orange">Recipes</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Explore a wide variety of recipes based on your available
            ingredients. Filter, search, and save your favorite dishes with
            ease.
          </p>

          {/* Search Form */}
          <form className="flex gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search by recipe or ingredient..."
              className="flex-1 rounded-lg px-4 py-3 border shadow border-gray-200 focus:outline-none"
            />
            <button className="px-4 py-3 rounded-lg shadow bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
              Search
            </button>
          </form>

          {/* Quick filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {QuickFilters.map((filter) => (
              <button
                key={filter.id}
                className="px-4 py-2 rounded-lg text-sm bg-white shadow text-gray-600 font-semibold hover:shadow-md transition"
              >
                {filter.name} {filter.title && `(${filter.title})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* show Searched Recipes result */}
        <div className="col-span-full">
          <Splide
            options={{
              perPage: 4,
              perMove: 1,
              gap: "1.5rem",
              autoplay: true,
              interval: 2500,
              rewind: true,
              arrows: false,
              pagination: false,
              breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
              },
            }}
          >
            {searchedRecipes.length > 0 &&
              query.length > 2 &&
              searchedRecipes.map((meal, i) => (
                <SplideSlide className={"py-4"} key={i}>
                  <RecipeCard recipe={meal} />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </section>
    </>
  );
}
