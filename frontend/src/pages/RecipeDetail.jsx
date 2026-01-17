import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, ChefHat, Loader2 } from "lucide-react";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Scroll position resets to the top
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`https://recipe-discovery-backend.onrender.com/api/recipe/${id}`);
        const data = await res.json();
        
        if (data.meals && data.meals[0]) {
          setRecipe(data.meals[0]);
        } else {
          setError("Recipe not found");
        }
      } catch (err) {
        setError("Failed to load recipe details");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  // Extract ingredients and measurements
  const getIngredients = () => {
    if (!recipe) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure?.trim() || ""
        });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-[#EA0014]" />
        <p className="text-gray-600">Loading recipe details...</p>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
        <p className="text-center text-red-600 font-semibold">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 mx-auto block bg-[#EA0014] text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Back to Search
        </button>
      </div>
    );
  }

  const ingredients = getIngredients();

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-[#EA0014] hover:text-red-700 font-semibold my-5 transition">
        <ArrowLeft className="w-5 h-5" />
        Back to Search
      </button>

      {/* Recipe Header */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-80 md:h-auto">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-full max-w-lg object-cover"/>
            {recipe.strCategory && (
              <span className="absolute top-4 left-4 bg-[#EA0014] text-white px-4 py-1 rounded-full text-sm font-semibold">
                {recipe.strCategory}
              </span>
            )}
          </div>

          {/* Info Section */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {recipe.strMeal}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              {recipe.strArea && (
                <div className="flex items-center gap-2 text-gray-600">
                  <ChefHat className="w-5 h-5 text-[#EA0014]" />
                  <span className="font-semibold">{recipe.strArea} Cuisine</span>
                </div>
              )}
            </div>

            {recipe.strTags && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {recipe.strTags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#FFF5F5] text-[#961A1A] px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

           {/* Ingredients List */}
            <div className="bg-[#FFF5F5] rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="grid grid-cols-2 gap-x-4 space-y-2">
                {ingredients.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                    <span className="text-[#EA0014] font-bold">•</span>
                    <span className="text-gray-700">
                    <span className="font-semibold">{item.measure}</span> {item.ingredient}
                    </span>
                </li>
                ))}
            </ul>
            </div>
            </div>
            </div>

        <div className="p-8 border-t border-gray-200 grid grid-cols-2">

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl leading-none font-bold text-gray-800 mb-4">Instructions</h2>
          <div className="prose max-w-none text-sm pr-6">
            {recipe.strInstructions.split("\n").map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            ))}
          </div>
        </div>
        
        {/* Video Section */}
         {recipe.strYoutube && (
          <div className="px-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Tutorial</h2>
            <div className="aspect-video">
              <iframe
                className="w-full h-full max-w-xl rounded-lg"
                src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
                title="Recipe Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        )}

        </div>     
      </div>
    </div>
  );
};

export default RecipeDetail;