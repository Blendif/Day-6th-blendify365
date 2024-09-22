const express = require('express');
const router = express.Router();
const { getAllAffiliates } = require('../controllers/affiliateController');

router.get('/', getAllAffiliates);

module.exports = router;
