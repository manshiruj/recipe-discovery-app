import { ChefHat } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 max-w-2xl mx-auto my-20 text-center px-4">
      <ChefHat className="w-16 h-16 text-[#F2BFBF]" />

      <p className="text-[#DE8385] text-xl">
        Search for any ingredient to discover amazing recipes!
      </p>

      <span className="text-sm text-[#DE8385]">
        Try searching for <span className="font-semibold">paneer</span>,{" "}
        <span className="font-semibold">pasta</span>, or{" "}
        <span className="font-semibold">cheese</span>
      </span>

      <span className="text-xs text-[#DE8385]">
        — JanoRecipe by Manshi Ruj
      </span>
    </div>
  );
};

export default Home;
