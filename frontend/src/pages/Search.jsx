import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const searchRecipes = async (ingredient) => {
    if (!ingredient) return;

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/recipes?ingredient=${ingredient}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);

      if (!data.meals) {
        setError(
          `No recipes found for "${ingredient}". Try another ingredient!`
        );
      }
    } catch (err) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={searchRecipes} loading={loading} />

      {!hasSearched && <Home />}

      {/* Loading Animation */}
      {loading && (
        <div className="flex flex-col justify-center items-center mt-10 gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EA0014]"></div>
          <p className="text-gray-600">Searching for recipes...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="max-w-2xl mx-auto mt-10 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-center text-red-600 font-semibold">{error}</p>
        </div>
      )}

      {/* Recipe Grid */}
      {recipes.length > 0 && !loading && (
        <div className="max-w-7xl mx-auto px-6 mt-10 pb-20">
          <h2 className="text-2xl font-bold text-[#961A1A] mb-6">
            Found {recipes.length} recipe{recipes.length !== 1 ? "s" : ""}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
                    {meal.strMeal}
                  </h3>

                  <button
                    onClick={() => navigate(`/recipe/${meal.idMeal}`)}
                    className="mt-3 w-full bg-[#EA0014] text-white py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
