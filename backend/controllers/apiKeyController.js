const jwt = require('jsonwebtoken');
const ApiKey = require('../models/ApiKey');

exports.createApiKey = async (req, res) => {
    try {
        const apiKey = new ApiKey({ key: jwt.sign({}, process.env.SECRET_KEY) });
        await apiKey.save();
        res.status(201).json({ key: apiKey.key });
    } catch (error) {
        console.error('API key creation error:', error);
        res.status(500).json({ error: 'Failed to create API key' });
    }
};

exports.validateApiKey = async (req, res) => {
    const { key } = req.body;
    try {
        const apiKey = await ApiKey.findOne({ key });
        if (!apiKey) {
            return res.status(401).json({ valid: false });
        }
        jwt.verify(key, process.env.SECRET_KEY);
        res.status(200).json({ valid: true });
    } catch (error) {
        console.error('API key validation error:', error);
        res.status(401).json({ valid: false });
    }
};

exports.deleteApiKey = async (req, res) => {
    const { key } = req.body;
    try {
        const result = await ApiKey.deleteOne({ key });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'API key not found' });
        }
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('API key deletion error:', error);
        res.status(500).json({ error: 'Failed to delete API key' });
    }
};
