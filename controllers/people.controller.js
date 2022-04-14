const db = require('../db')

class PeopleController {
    async createPeople(req, res) {
        const {
            peoplename,
            peoplephone,
            emodji,
            price,
            active,
            comment
        } = req.body
        const newPerson = await db.query('INSERT INTO people (peoplename, peoplephone, emodji, price, active, comment) values ($1, $2, $3, $4, $5, $6) RETURNING *', [
            peoplename,
            peoplephone,
            emodji,
            price,
            active,
            comment
        ])

        res.json(newPerson.rows[0])
    }

    async getPeople(req, res) {
        const peoples = await db.query('SELECT * FROM people')

        res.json(peoples.rows)
    }

    async getOnePeople(req, res) {
        const id = req.params.id
        const people = await db.query('SELECT * FROM people WHERE id = $1', [id])

        res.json(people.rows[0])
    }

    async updatePeople(req, res) {
        const {
            peoplename,
            peoplephone,
            emodji,
            price,
            active,
            comment,
            id,
        } = req.body
        const people = await db.query('UPDATE people SET peoplename = $1, peoplephone = $2, emodji = $3, price = $4, active = $5, comment = $6 WHERE id = $7 RETURNING *', [
            peoplename,
            peoplephone,
            emodji,
            price,
            active,
            comment,
            id,
        ])

        res.json(people.rows[0])
    }

    async deletePeople(req, res) {
        const id = req.params.id
        const people = await db.query('DELETE FROM people WHERE id = $1', [id])

        res.json(people.rows[0])
    }
}

module.exports = new PeopleController()