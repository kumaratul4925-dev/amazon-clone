# Amazon Clone — Full-Stack E-Commerce Web Application

A portfolio-ready e-commerce project built with **React.js, Node.js, Express.js and MySQL**.

## Features
- Responsive e-commerce UI
- Product listing and product details
- Search and category filtering
- User registration and login APIs
- Shopping cart UI
- Checkout and order creation API
- MySQL relational database
- REST API architecture
- JWT authentication middleware
- Clean frontend/backend separation

## Project Structure

```text
amazon-clone/
├── frontend/
├── backend/
├── database/
├── README.md
└── .gitignore
```

## Run the backend

```bash
cd backend
npm install
copy .env.example .env
npm start
```

On macOS/Linux use `cp .env.example .env`.

Update `.env` with your MySQL credentials.

## Set up MySQL

Create the database and tables:

```bash
mysql -u root -p < database/amazon_clone.sql
```

Or import `database/amazon_clone.sql` through MySQL Workbench.

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

##  description

**Full-Stack E-Commerce Web Application** — Developed a responsive e-commerce platform using React.js, Node.js, Express.js, and MySQL. Implemented product browsing, search, authentication, shopping cart, checkout, order management, REST APIs, and relational database integration.


