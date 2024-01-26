const router = require('express').Router();
const { EditDataUserValidation } = require('../utils/validator');
const { getMyUser, editDataUser } = require('../controllers/users');

router.get('/me', getMyUser);
router.patch('/me', EditDataUserValidation, editDataUser);

module.exports = router;
