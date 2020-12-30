const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: '5437',
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

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}