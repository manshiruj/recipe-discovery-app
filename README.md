# Recipe Discovery App – Full Stack Assignment

## 1. What did you build?

I built a full stack Recipe Discovery application using **TheMealDB public API**.

Features:
- Search recipes by ingredient
- View recipe details (image, ingredients, instructions, recipe video)
- Backend handles all external API communication

Frontend and backend are clearly separated and communicate via REST APIs.

---

## 2. Why did you choose this approach and architecture?

I chose a **client–server architecture** with a separated frontend and backend to reflect real-world production systems.

Reasons:
- Keeps API keys and logic secure on the backend
- Allows better error handling and response control
- Makes frontend simpler and focused only on UI/UX
- Easy to extend later (favorites, auth, database)

Tech choices:
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- External API: TheMealDB

I avoided over-engineering and focused on clarity, maintainability, and correctness.

---

## 3. How does data flow from API → backend → frontend?

1. User enters an ingredient in the frontend search box
2. Frontend sends request to backend:
3. Backend calls TheMealDB API
4. Backend processes and validates the response
5. Backend sends clean JSON data to frontend
6. Frontend renders recipe cards
7. On “View Details”, frontend requests:

The frontend never calls TheMealDB directly.

---

## 4. How do we run this locally?

### Prerequisites
- Node.js (v18+)
- npm

### Setup
```bash
Backend Setup
cd recipe-discovery-app\backend
npm install
npm start
Backend runs on:
http://localhost:5000

Frontend Setup
cd part-1-fullstack/frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173 
```
---

## 5. What would you improve with more time

1. User Accounts & Favorites: Allow users to create accounts, save favorite recipes, and add notes.
2. Enhanced UI/UX: Add pagination or infinite scroll, loading skeletons, and better mobile responsiveness.
3. Performance & Caching: Cache API responses, optimize images, and reduce load time.
4. Additional Features: Filter recipes by category or ingredient, share recipes, and provide personalized recommendations.

### Live Demo
You can also view the app live here:  
(https://janorecipe.vercel.app)
