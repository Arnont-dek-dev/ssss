var express = require('express');
var router = express.Router();

const pgp = require('pg-promise')();
const connection = `postgres://postgres:123456@localhost:5437/postgres`;
const db = pgp(connection);

/* API users table for CRUD */

router.get('/users', async(req, res, next) => {
    const user = await db.any('SELECT id, name FROM "user" ');
    res.json(user);
});
router.post('/users', async(req, res, next) => {
    const user = await db.any(`INSERT INTO "user" (id, name) VALUES('${req.body.id}', '${req.body.name}')`);
});
router.put('/users/:id', async(req, res, next) => {
    const updateid = req.params.id;
    const user = await db.any(`UPDATE "user" SET id='${req.body.id}', "name"='${req.body.name}' where id = $1`, updateid);
});
router.delete('/user/:id', async(req, res, next) => {
    const user = await db.any(``);
});


module.exports = router;