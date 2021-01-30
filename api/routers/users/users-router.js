const Users = require('./users-model.js');
const bcrypt = require('bcryptjs');
const { validateUserBody, validateUserId } = require('./users-middleware')
const router = require('express').Router();

module.exports = router;

router.get('/', getUsers)
router.get('/:id',validateUserId, getUserById)
// router.delete('/:id', validateUserId, deleteUser)
// router.put('/:id', validateUserId, updateUser)

async function getUsers(req, res) { //temporary get request I made for testing
    try {
      const users = await Users.get();
  
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ success: false, err, msg: 'could not find user table' });
    }
  }
  
  async function getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await Users.get(id);
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ success: false, err, msg: 'could not find user by id' })
    }
  }