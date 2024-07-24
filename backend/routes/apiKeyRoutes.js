const express = require('express');
const router = express.Router();
const { createApiKey, validateApiKey, deleteApiKey } = require('../controllers/apiKeyController');

// API 키 생성
router.post('/', createApiKey);

// API 키 검증
router.post('/validate', validateApiKey);

// API 키 삭제
router.delete('/', deleteApiKey);

module.exports = router;
