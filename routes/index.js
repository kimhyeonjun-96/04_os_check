const express = require('express');
const router = express.Router();

const main = require('./main/main');
const rhel = require('./rhel/rhel');

router.use('/', main);
router.use('/rhel', rhel);
// router.use('/cent', cent);
// router.use('/cent', ubuntu);

module.exports = router;

