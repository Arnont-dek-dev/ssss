var express = require('express');
var router = express.Router();
const db = require('./queries');



router.get('/user', db.getUsers);
router.post('/user', db.createUser);
router.put('/user/:id', db.updateUser);
router.delete('/user/:id', db.deleteUser);

router.get('/device', db.getDevice);
router.post('/device', db.createDevice);
router.put('/device/:id', db.updateDevice);
router.delete('/device/:id', db.deleteDevice);

router.get('/location', db.getLocation);
router.post('/location', db.createLocation);
router.put('/location/:id', db.updateLocation);
router.delete('/location/:id', db.deleteLocation);

router.get('/scanner', db.getScanner);
router.post('/scanner', db.createScanner);
router.put('/scanner/:id', db.updateScanner);
router.delete('/scanner/:id', db.deleteScanner);

router.get('/events', db.getEvent);
router.post('/events', db.createEvent);
router.put('/events/:id', db.updateEvent);
router.delete('/events/:id', db.deleteEvent);
router.post('/eventsarr', db.createArrayEvent);
// const pgp = require('pg-promise')();
// const connection = `postgres://postgres:123456@localhost:5437/postgres`;
// const db = pgp(connection);

/* API users table for CRUD */

// router.get('/users', async(req, res, next) => {
//     const user = await db.any('SELECT id, name FROM "user" ');
//     res.json(user);
// });
// router.post('/users', async(req, res, next) => {
//     const user = await db.any(`INSERT INTO "user" (id, name) VALUES('${req.body.id}', '${req.body.name}')`);
//     res.json("success");
// });
// router.put('/users/:id', async(req, res, next) => {
//     const updateid = req.params.id;
//     const user = await db.any(`UPDATE "user" SET id='${req.body.id}', "name"='${req.body.name}' where id = $1`, updateid);
// });
// router.delete('/users/:id', async(req, res, next) => {
//     const deleteid = req.params.id;
//     const user = await db.any(`DELETE FROM "user" WHERE id = $1`, deleteid);
// });
module.exports = router;