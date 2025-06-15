# Quotes Project

A full-stack web application that fetches and displays random quotes using the [FavQs API](https://favqs.com/api).  
Built with **Node.js** (TypeScript) for the backend and **React** (Vite + TypeScript) for the frontend.

---

## 🧠 Features

- Fetches quotes from the FavQs API
- Backend supports:
  - Pagination
  - Continuation tokens
  - Rate limit handling
- Frontend UI to:
  - Display paginated quotes
  - Navigate between pages
  - Responsive design with styled-components
  - Loading indicators for better UX

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/naamatsu/quotes_project.git
cd quotes_project


---

### 2. Set Up the Backend
cd server

npm install

--

Create a \`.env\` file inside the \`server/\` directory:

FAVQS_API_KEY=your_api_key_here

PORT=5000

--

Run the backend server in development mode:

npm run dev

--

Run backend tests:

npm run test


---

### 3. Set Up the Frontend

cd ../client
npm install
npm run dev


Frontend will be available at:


http://localhost:5173


---

## 🛠 Scripts Overview

### Server (in \`/server\`)

npm run dev             # Start backend with nodemon

npm run build           # Compile TypeScript

npm run test            # Run backend tests



### Client (in \`/client\`)
npm run dev             # Start frontend with Vite

npm run build           # Build production-ready frontend

npm run preview         # Preview production build locally



---

## 📦 Technologies Used

### Backend

- Node.js
- TypeScript
- Express
- Axios
- dotenv
- Jest

### Frontend

- React
- Vite
- TypeScript
- Styled-Components
- Axios

---

## 🙋‍♀️ Author

**Naama Zohar**  
[GitHub: @naamatsu](https://github.com/naamatsu)
EOF
