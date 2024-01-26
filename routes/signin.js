const router = require('express').Router();
const { loginValidation } = require('../utils/validator');
const { login } = require('../controllers/users');

router.post('/', loginValidation, login);

module.exports = router;
