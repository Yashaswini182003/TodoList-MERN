const express = require('express')
const{ createToDo, updateToDo, deleteToDo, getAllToDo } = require('../controllers/to_do_list_Ctrls')

const to_do_listRouter = express.Router();

// get-> read
// post-> send/create
// put-> update
// delete-> delete

// 'http://localhost:3000/getall'
// getall = getAllToDo using getall path we can give in frontend so, that we it can directly prompt to getAllToDo function in backend
to_do_listRouter.get('/getall', getAllToDo)
to_do_listRouter.post('/', createToDo)
to_do_listRouter.put('/updateToDo/:id', updateToDo)
to_do_listRouter.delete('/deleteToDo/:id', deleteToDo)

module.exports = to_do_listRouter

