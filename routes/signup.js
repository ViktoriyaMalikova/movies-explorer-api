const router = require('express').Router();
const { addUserValidation } = require('../utils/validator');
const { addUser } = require('../controllers/users');

router.post('/', addUserValidation, addUser);

module.exports = router;
