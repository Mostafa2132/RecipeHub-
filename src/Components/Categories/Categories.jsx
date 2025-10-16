import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function Categories() {
  // Fetch recipe categories (tags)
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axios.get("https://dummyjson.com/recipes/tags"),
    staleTime: 1000 * 60 * 5, // cache for 5 mins (performance boost)
  });

  if (isLoading) return <Loading />;

  const categories = data?.data || [];

  return (
    <section
      className="py-16 bg-gray-50 dark:bg-neutral-900"
      aria-labelledby="categories-heading"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          id="categories-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Explore Recipe <span className="text-orange">Categories</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Discover delicious meals by category. From breakfast ideas to dinner
          favorites, we’ve got you covered.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Splide
          aria-label="Recipe Categories Carousel"
          options={{
            perPage: 4,
            perMove: 1,
            gap: "1.5rem",
            autoplay: true,
            interval: 3000,
            rewind: true,
            arrows: false,
            pagination: false,
            drag: "free",
            breakpoints: {
              1280: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >
          {categories.map((meal, i) => (
            <SplideSlide key={i} className="py-6">
              <Link
                to={`/recipesByTag/${meal}`}
                className="flex flex-col items-center bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl hover:shadow-orange-200 cursor-pointer transition-transform transform hover:scale-105 p-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label={`View recipes for ${meal}`}
              >
                {/* Icon / Letter */}
                <div
                  className="w-20 h-20 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full mb-4"
                  role="img"
                  aria-label={`Category ${meal}`}
                >
                  <span className="text-2xl font-bold text-orange-600">
                    {meal[0].toUpperCase()}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {meal}
                </h3>

                {/* Hidden for SEO: contextual description */}
                <p className="sr-only">Browse recipes in the {meal} category</p>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
