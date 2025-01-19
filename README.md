# MERN Product Store

## Overview

This project demonstrates building and deploying a full-stack MERN (MongoDB, Express.js, React, Node.js) application. The application serves as a product store, allowing users to create, update, and delete products. The project emphasizes clean, modular code and follows best practices in both backend and frontend development.

## Features

- **Product Management**: Add, update, and delete products with fields like name, price, and image.
- **API Integration**: Robust RESTful API for managing products with error handling.
- **Dark/Light Theme Toggle**: Enhance user experience with a color mode switch.
- **State Management**: Global state management using React Hooks.
- **Toast Notifications**: Real-time feedback for user actions (e.g., product creation).
- **Responsive UI**: Built using Chakra UI for modern and adaptive design.
- **Middleware**: Ensure data validation and consistency with middleware functions.
- **Deployment Ready**: Fully configured for production deployment.

## Technologies Used

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing product information.
- **Mongoose**: ODM for MongoDB schema and database interaction.

### Frontend

- **React.js**: Component-based library for building the UI.
- **Chakra UI**: Modern and customizable React UI framework.
- **React Router**: Client-side routing for navigation.
- **React Hooks**: Manage state and lifecycle methods.

## Live Demo

Check out the deployed application:  
[Live Demo](#)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud-based)

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/BansalAbhinav/Product-Store
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables by creating a .env file in the root directory:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Start the Development Server

Run the following command to start the server in development mode:

```bash
npm run dev
```

## Build for Production

To build and start the application for production, use the following commands:

```bash
npm run build
npm run start
```

## Project Highlights

### Database Integration

- Connect to MongoDB using Mongoose with a well-defined product schema.

### API Endpoints

- **GET /products**: Retrieve all products.
- **POST /products**: Add a new product.
- **PUT /products/:id**: Update product details.
- **DELETE /products/:id**: Remove a product.

### Frontend Components

- Product listing and management pages.
- Modal for product updates.
- Theme toggle using `useColorMode`.

### Deployment

1. Push the code to a GitHub repository.
2. Use platforms like Vercel for frontend and Heroku for backend deployment.
3. Configure environment variables in the deployment settings.
4. Ensure static assets are served correctly for production.

### Folder Structure

#### Backend

- **server.js**: Main server file.
- **routes**: API routes for products.
- **models**: Mongoose schema for product data.

#### Frontend

- **src**: React application files.
- **components**: Reusable React components (e.g., ProductCard, Modal).
- **context**: Global state management.
- **theme**: Custom Chakra UI theme.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out with any questions or suggestions:

- **Name**: Abhinav Bansal
- **Email**: [abhinavbansal2503@gmail.com](mailto:abhinavbansal2503@gmail.com)
- **Portfolio**: [Abhinav's Portfolio](https://abhinav-bansal-portfolio.vercel.app/)
