# 🚗 JDM API Backend

This project is the backend of the **JDM API**, built using **Node.js** and **Express**, providing data about JDM cars. It's designed to work seamlessly with the frontend to deliver data through a RESTful API.

## 🌐 Live Demo (Backend)

This backend is deployed on [Render](https://render.com).  
[API Web Documentation](https://jdm-api.netlify.app/)

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Document Mapper) for MongoDB.
- **Cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **dotenv**: For managing environment variables.
- **Nodemon**: For automatically restarting the server during development.

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/jdm-api-back.git
cd jdm-api-back
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment setup

Create a .env file at the root of the project and set your environment variables, for example:

```bash
MONGO_URI=mongodb://localhost:27017/jdm-db
PORT=5000
JWT_SECRET=your_jwt_secret
```

If you’re using a different database (e.g., MySQL), adjust the configuration accordingly.

### 4. Running the server

To run the server in development mode, use the following command:

```bash
npm run dev
```

The server will run on http://localhost:5000/ by default.

## 🧪 API Endpoints

You can find detailed documentation of the API endpoints and their usage on the [API Web Documentation](https://jdm-api.netlify.app/).

## 💡 Future Improvements

- Add new and enhanced filtering functionalities for cars.
- Implement new cars and integrate additional car details.
- Implement motorcycles as part of the JDM API.
- Create a service to manage vehicle images stored in the database.
- Improve the backend for better performance and scalability.
- Resolve the issue in the frontend where the documentation section crashes when reloading.
- Continuously update the API documentation as new features and improvements are added to the backend.

## 🔗 Related Repositories

For the frontend of the JDM API, visit the [JDM API Frontend Repository](https://github.com/Aikarubi/jdm-api-front).

