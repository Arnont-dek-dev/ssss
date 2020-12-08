var express = require('express');
var router = express.Router();

const pgp = require('pg-promise')();
const connection = `postgres://postgres:abc123**@localhost:5434/postgres`;
const db = pgp(connection);



/* About Covid-19 APIs */
router.get('/', async(req, res, next) => {

    // const confirmed = await db.any(`select SUM(cc."3/23/2020"::INTEGER) as confirmed from covid_confirmed cc`);
    // const deaths = await db.any(`select SUM(cd."3/23/2020"::INTEGER) as deaths from covid_death cd`);
    // const recovered = await db.any(`select SUM(cr."3/23/2020"::INTEGER) as recovered from covid_recovered cr`);

    const country = await db.any(`select * from country c`)
    res.json(country);
    console.log(country);

    // res.render('index', { confirmed: confirmed[0], deaths: deaths[0], recovered: recovered[0], country: country });



});



// 1. Get all confirmed
router.get('/confirmed', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`select SUM(cc."3/23/2020"::INTEGER) as confirmed from covid_confirmed cc`);
    console.log(result);
    res.json(result[0]);

});
// 2. Get all deaths
router.get('/deaths', async(req, res, next) => {

    // Get total deaths from database
    const result = await db.any(`select SUM(cd."3/23/2020"::INTEGER) as total from covid_death cd`);
    console.log(result);
    res.json(result[0]);

});
// 3. Get all recovered
router.get('/recovered', async(req, res, next) => {

    // Get total recovered from database
    const result = await db.any(`select SUM(cr."3/23/2020"::INTEGER) as total from covid_recovered cr`);
    res.json(result[0]);
});

router.get('/confirmed/:id', async(req, res, next) => {

    const countryId = req.params.id;
    // Get total confirmed from database
    const result = await db.any(`select SUM(cc."3/23/2020"::INTEGER) as total from covid_confirmed cc where cc.id = $1`, countryId);
    res.json(result[0]);

});
router.get('/country/:id', async(req, res, next) => {

    const countryId = req.params.id;
    // Get total confirmed from database
    const result = await db.any(`select country from country c where c.id = $1`, countryId);
    res.json(result[0]);

});

router.get('/deaths/:id', async(req, res, next) => {

    const countryId = req.params.id;
    // Get total confirmed from database
    const result = await db.any(`select SUM(cd."3/23/2020"::INTEGER) as deaths from covid_death cd where cd.id  = $1`, countryId);
    res.json(result[0]);

});

router.get('/recovered/:id', async(req, res, next) => {

    const countryId = req.params.id;
    // Get total confirmed from database
    const result = await db.any(`select SUM(cr."3/23/2020"::INTEGER) as total from covid_recovered cr where cr.id  = $1`, countryId);
    res.json(result[0]);
});

router.get('/map', async(req, res, next) => {

    const countryId = req.params.id;
    // Get total confirmed from database

    const result = await db.any(`select covid_confirmed.lat ,covid_confirmed.long , country.country ,country.province , covid_confirmed."3/23/2020" as confirmed,covid_death."3/23/2020" as deaths,covid_recovered."3/23/2020" as recovered 
    from country  
    inner join covid_confirmed  on country.id = covid_confirmed.id 
    inner join covid_death on covid_confirmed.id = covid_death.id 
    inner join covid_recovered on covid_death.id = covid_recovered.id `);
    res.json(result);
});

router.get('/confirmedless', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`select country.province ,country ,covid_confirmed."3/23/2020" as confirmed from country 
    inner join covid_confirmed on country.id = covid_confirmed.id order by covid_confirmed."3/23/2020" :: INTEGER asc`);
    res.json(result);
});

router.get('/deathsless', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`  select country.province ,country ,covid_death."3/23/2020" as death from country 
    inner join covid_death on country.id = covid_death.id order by covid_death."3/23/2020" :: INTEGER asc`);
    res.json(result);
});

router.get('/recoveredless', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`  select country.province ,country ,covid_recovered."3/23/2020" as recovered from country 
    inner join covid_recovered on country.id = covid_recovered.id order by covid_recovered."3/23/2020" :: INTEGER asc`);
    res.json(result);
});

router.get('/confirmedhight', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`select country.province ,country ,covid_confirmed."3/23/2020" as confirmed from country 
    inner join covid_confirmed on country.id = covid_confirmed.id order by covid_confirmed."3/23/2020" :: INTEGER desc`);
    res.json(result);
});

router.get('/deathshight', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`select country.province ,country ,covid_death."3/23/2020" as death from country 
    inner join covid_death on country.id = covid_death.id order by covid_death."3/23/2020" :: INTEGER desc`);
    res.json(result);
});

router.get('/recoveredhight', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`  select country.province ,country ,covid_recovered."3/23/2020" as recovered from country 
    inner join covid_recovered on country.id = covid_recovered.id order by covid_recovered."3/23/2020" :: INTEGER desc`);
    res.json(result);
});

router.get('/confirmtop', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`select country.province ,country ,covid_confirmed."3/23/2020" as confirmed from country 
    inner join covid_confirmed on country.id = covid_confirmed.id order by covid_confirmed."3/23/2020" :: INTEGER desc limit 5`);
    res.json(result);
});

router.get('/deathtop', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`select country.province ,country ,covid_death."3/23/2020" as death from country 
    inner join covid_death on country.id = covid_death.id order by covid_death."3/23/2020" :: INTEGER desc limit 5`);
    res.json(result);
});

router.get('/recovertop', async(req, res, next) => {

    // Get total confirmed from database
    const result = await db.any(`  select country.province ,country ,covid_recovered."3/23/2020" as recovered from country 
    inner join covid_recovered on country.id = covid_recovered.id order by covid_recovered."3/23/2020" :: INTEGER desc limit 5`);
    res.json(result);
});

router.get('/test/:id', async(req, res, next) => {

    const countryId = req.params.id;
    // Get total confirmed from database
    const result = await db.any(`SELECT * from covid_confirmed inner join country on country.id = covid_confirmed.id where covid_confirmed.id = $1`, countryId);
    res.json(result[0]);
});












module.exports = router