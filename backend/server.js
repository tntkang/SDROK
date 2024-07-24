require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const apiKeyRoutes = require('./routes/apiKeyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log('MONGO_URI:', MONGO_URI);
console.log('SECRET_KEY:', process.env.SECRET_KEY);

if (!MONGO_URI) {
    console.error('MONGO_URI is not defined in the .env file.');
    process.exit(1);
}

app.use(express.json());

// MongoDB 연결
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// 라우트 설정
app.use('/api/users', userRoutes);
app.use('/api/keys', apiKeyRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
