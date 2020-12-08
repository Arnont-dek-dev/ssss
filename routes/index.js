var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    const result = await db.getConfirmed;
    console.log(result.rows);
    res.render('index', { title: 'Express' });
});

module.exports = router;