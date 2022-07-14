
const { User, Thought } = require('../models');


module.exports = {

    getUsers(req, res) {
        User.find({})
            .then(users => res.json(users))
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error' });
            });
    },

    createUser(req, res) {
        const { username, email } = req.body;

        User.create({ username, email })
            .then(user => res.json(user))
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error' });
            });
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async user => {
            !user 
            ? res.status(404).json({ message: 'User not found' }) 
            : res.json({
                thoughts: await Thought.find({ username: user.username }).select('-__v'),
                friends: user.friends,
                user
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.userId }, req.body, { new: true })
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => res.json({ user, message: 'User deleted' }))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    addUserFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $push: { friends: req.params.friendId } }, { new: true })
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    deleteUserFriend(req, res) {
        //remove friend from user's friends array
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
        .then(res.json({ message: 'Friend deleted' }))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    }
}