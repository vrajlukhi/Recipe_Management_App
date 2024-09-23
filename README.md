This project is a Node.js and Express-based backend API for managing recipes. 
It provides user authentication and CRUD (Create, Read, Update, Delete) operations for recipes. 
MongoDB is used as the database, and JWT (JSON Web Tokens) is employed for secure authentication.

## Features

- **User Authentication**: JWT-based user registration and login.
- **Recipe Management**:
  - Create a new recipe.
  - Retrieve a list of recipes or a specific recipe by ID.
  - Update an existing recipe.
  - Delete a recipe.
- **MongoDB Integration**: Recipes and users are stored in a MongoDB database.
- **Error Handling**: Includes error handling for invalid requests, missing data, and server errors.
- **Authorization**: Protects recipe modification routes using JWT middleware.


Set up the .env file:
  MONGO_URI=<Your MongoDB URI>
  JWT_SECRET=<Your JWT Secret>
  PORT=5000

API Endpoints
  - POST /api/auth/register: Register a user.
  - POST /api/auth/login: Log in a user.
  - POST /api/recipes: Create a recipe (auth required).
  - GET /api/recipes: Get all recipes.
  - GET /api/recipes/:id: Get a specific recipe.
  - PUT /api/recipes/:id: Update a recipe (auth required).
  - DELETE /api/recipes/:id: Delete a recipe (auth required).

- Dependencies
  - bcryptjs: For hashing passwords.
  - dotenv: For loading environment variables.
  - express: Web framework for building the API.
  - jsonwebtoken: For JWT-based authentication.
  - mongoose: MongoDB ODM for schema design and database interactions.
