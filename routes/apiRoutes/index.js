const express = require('express');
const router = express.Router();
router.use(require('./partyRoutes'));


router.use(require('./candidateRoutes'));



module.exports = router;