const db = require('../db')

class UserController {
    async loginUser(req, res) {
        const { username, password } = req.body
        const peoples = await db.query('SELECT * FROM person WHERE username = $1 AND userpass = $2', [username, password])
        const userCheck = peoples.rows.length > 0;

        if (userCheck) {
            res.json({ username, password, status: true })
        } else {
            res.status(401).json({ username, password, status: false })
        }
    }
}

module.exports = new UserController()