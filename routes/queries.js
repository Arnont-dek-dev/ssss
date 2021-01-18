const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'mable',
    host: 'mean.psu.ac.th',
    database: 'mable',
    password: '1zxc123**',
    port: '5432',
});

///////////////////////////// CRUD API FROM USER TABLE ////////////////////////////////////////

/******************************** GET ALL USER ***********************************/
const getUsers = async(req, res) => {
    try {
        const result = await pool.query(`SELECT id, name FROM "user" `);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }

    res.json(output)
}

/********************************* CREATE USER *************************************/
const createUser = async(req, res) => {
    try {
        const result = await pool.query(`INSERT INTO "user" (id, name) VALUES('${req.body.id}', '${req.body.name}')`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/******************************* UPDATE USER BY ID *******************************/
const updateUser = async(req, res) => {
    try {
        const result = await pool.query(`UPDATE "user" SET id='${req.body.id}', "name"='${req.body.name}' where id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/**************************** DELETE USER BY ID *******************************/
const deleteUser = async(req, res) => {
    try {
        const result = await pool.query(`DELETE FROM "user" WHERE id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "success",
            result: error
        };
    }
    res.json(output);
}


///////////////////////////// CRUD API FROM DEVICE TABLE ////////////////////////////////////////

/******************************** GET ALL DEVICE ***********************************/
const getDevice = async(req, res) => {
    try {
        const result = await pool.query(`SELECT id, category, "owner" FROM device `);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }

    res.json(output)
}

/********************************* CREATE DEVICE *************************************/
const createDevice = async(req, res) => {
    try {
        const result = await pool.query(`INSERT INTO device (id, category, "owner") VALUES('${req.body.id}', '${req.body.category}', '${req.body.owner}')`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/******************************* UPDATE DEVICE BY ID *******************************/
const updateDevice = async(req, res) => {
    try {
        const result = await pool.query(`UPDATE device SET id='${req.body.id}', category='${req.body.category}', "owner"='${req.body.id}' where id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/**************************** DELETE DEVICE BY ID *******************************/
const deleteDevice = async(req, res) => {
    try {
        const result = await pool.query(`DELETE FROM device WHERE id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "success",
            result: error
        };
    }
    res.json(output);
}


///////////////////////////// CRUD API FROM LOCATION TABLE ////////////////////////////////////////

/******************************** GET ALL LOCATION ***********************************/
const getLocation = async(req, res) => {
    try {
        const result = await pool.query(`SELECT id, "name", latitude, longitude, description FROM "location"`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }

    res.json(output)
}

/********************************* CREATE LOCATION *************************************/
const createLocation = async(req, res) => {
    try {
        const result = await pool.query(`INSERT INTO "location" (id, "name", latitude, longitude, description) VALUES(${req.body.id}, '${req.body.name}', ${req.body.latitude}, ${req.body.longitude}, '${req.body.description}')`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/******************************* UPDATE LOCATION BY ID *******************************/
const updateLocation = async(req, res) => {
    try {
        const result = await pool.query(`UPDATE "location" SET id=${req.body.id}, "name"='${req.body.name}', latitude=${req.body.latitude}, longitude=${req.body.longitude}, description='${req.body.description}' where id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/**************************** DELETE LOCATION BY ID *******************************/
const deleteLocation = async(req, res) => {
    try {
        const result = await pool.query(`DELETE FROM location WHERE id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "success",
            result: error
        };
    }
    res.json(output);
}


///////////////////////////// CRUD API FROM SCANNER TABLE ////////////////////////////////////////

/******************************** GET ALL SCANNER ***********************************/
const getScanner = async(req, res) => {
    try {
        const result = await pool.query(`SELECT id, model, "location" FROM scanner`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }

    res.json(output)
}

/********************************* CREATE SCANNER *************************************/
const createScanner = async(req, res) => {
    try {
        const result = await pool.query(`INSERT INTO scanner (id, model, "location") VALUES('${req.body.id}', '${req.body.model}', '${req.body.location}')`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/******************************* UPDATE SCANNER BY ID *******************************/
const updateScanner = async(req, res) => {
    try {
        const result = await pool.query(`UPDATE scanner SET id='${req.body.id}', model='${req.body.model}', "location"='${req.body.location}' where id= '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/**************************** DELETE SCANNER BY ID *******************************/
const deleteScanner = async(req, res) => {
    try {
        const result = await pool.query(`DELETE FROM scanner WHERE id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "success",
            result: error
        };
    }
    res.json(output);
}


///////////////////////////// CRUD API FROM EVENT TABLE ////////////////////////////////////////

/******************************** GET ALL EVENT ***********************************/
const getEvent = async(req, res) => {
    try {
        const result = await pool.query(`SELECT scannerid, deviceid, "timestamp", distance FROM "event"`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }

    res.json(output)
}

/********************************* CREATE EVENT *************************************/
const createEvent = async(req, res) => {
    try {
        const result = await pool.query(`INSERT INTO "event" (scannerid, deviceid, "timestamp", distance) VALUES('${req.body.scannerid}', '${req.body.deviceid}', '${req.body.timestamp}', ${req.body.distance})`);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/******************************* UPDATE EVENT BY ID *******************************/
const updateEvent = async(req, res) => {
    try {
        const result = await pool.query(`UPDATE "event" SET scannerid='${req.body.scannerid}', deviceid='${req.body.deviceid}', "timestamp"='${req.body.timestamp}', distance=${req.body.distance} where id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

/**************************** DELETE EVENT BY ID *******************************/
const deleteEvent = async(req, res) => {
    try {
        const result = await pool.query(`DELETE FROM event WHERE id = '${req.params.id}'`);
        output = {
            status: "success",
            result: result
        };
    } catch (error) {
        output = {
            status: "success",
            result: error
        };
    }
    res.json(output);
}

/**************************** CREATE ARRAY EVENT BY ID *******************************/
const createArrayEvent = async(req, res) => {
    try {

        const result = await pool.query(`INSERT INTO "event" (scannerid, deviceid, "timestamp", distance) VALUES('$1', '$2', '$3', $4)`, data.scannerid, data.deviceid, data.timestamp, data.distance);

        var data = [req.body.scannerid,
            req.body.deviceid,
            req.body.timestamp,
            req.body.distance
        ]
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        };
    }
    res.json(output);
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getDevice,
    createDevice,
    updateDevice,
    deleteDevice,
    getLocation,
    createLocation,
    updateLocation,
    deleteLocation,
    getScanner,
    createScanner,
    updateScanner,
    deleteScanner,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    createArrayEvent
}