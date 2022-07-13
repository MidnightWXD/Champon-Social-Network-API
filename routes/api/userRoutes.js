const router = require('express').Router();
const { 
    getUsers, 
    createUser, 
    getSingleUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend,
  } = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addUserFriend).delete(deleteUserFriend);

module.exports = router;
