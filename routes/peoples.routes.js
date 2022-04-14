const { Router } = require('express')
const router = Router()
const peopleController = require('../controllers/people.controller')

router.get('/people/getPeople', peopleController.getPeople)
router.post('/people/createPeople', peopleController.createPeople)
router.put('/people/updatePeople', peopleController.updatePeople)
router.get('/people/getOnePeople/:id', peopleController.getOnePeople)
router.delete('/people/deletePeople/:id', peopleController.deletePeople)


module.exports = router