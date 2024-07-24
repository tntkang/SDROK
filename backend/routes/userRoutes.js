const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// 사용자 등록
router.post('/register', registerUser);

// 사용자 로그인
router.post('/login', loginUser);

module.exports = router;
