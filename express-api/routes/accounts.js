const express = require('express');
const router = express.Router();
const accountsController = require('./../controllers/accounts');

/* POST data Cta Corriente */
router.post(
    '/', 
    accountsController.validate('requestAccount'), 
    accountsController.requestAccount,
)

module.exports = router;