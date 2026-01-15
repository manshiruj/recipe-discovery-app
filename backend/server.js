import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Search recipes by ingredient
app.get("/api/recipes", async (req, res) => {
  const ingredient = req.query.ingredient;

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Get recipe details
app.get("/api/recipe/:id", async (req, res) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.id}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipe" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
