import { useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "./Components/Loading/Loading";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home/Home"));
const RecipeDetails = lazy(() => import("./Pages/RecipeDetails/RecipeDetails"));
const RecipesByTag = lazy(() => import("./Pages/RecipesByTag/RecipesByTag"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

// Load Preline
async function loadPreline() {
  return import("preline/dist/index.js");
}

// Create React Query client
const queryClient = new QueryClient();

// Define routes
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "recipe/:id", element: <RecipeDetails /> },
      { path: "recipesByTag/:tag", element: <RecipesByTag /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [window.location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routers} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
