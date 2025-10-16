import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// Lazy-loaded components
const AllRecipes = lazy(() => import("../../Components/AllRecipes/AllRecipes"));
const Categories = lazy(() => import("../../Components/Categories/Categories"));
const HeroSection = lazy(() =>
  import("../../Components/HeroSection/HeroSection")
);

export default function Home() {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Recipe Hub | Discover Delicious Recipes</title>
        <meta
          name="description"
          content="Discover and explore a wide variety of recipes by category. From breakfast ideas to dinner favorites, Recipe Hub makes cooking easy and fun."
        />
        <meta
          name="keywords"
          content="recipes, cooking, food, dinner, breakfast, categories, easy meals"
        />
        <meta property="og:title" content="Recipe Hub | Discover Recipes" />
        <meta
          property="og:description"
          content="Browse thousands of recipes by category. Start your cooking journey today with Recipe Hub."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Recipe Hub" />
      </Helmet>

      {/* Page Content */}
      <main
        id="main-content"
        className="min-h-screen bg-gray-50 dark:bg-neutral-900"
        role="main"
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[50vh]">
              <div
                className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"
                role="status"
                aria-label="Loading content..."
              ></div>
            </div>
          }
        >
          <HeroSection />
          <Categories />
          <AllRecipes />
        </Suspense>
      </main>
    </>
  );
}
