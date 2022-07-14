const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find({})
            .then(thoughts => res.json(thoughts))
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error' });
            });
    },

    createThought(req, res) {
        const { username, thought } = req.body;

        Thought.create({ username, thought })
            .then(thought => 
                User.findOneAndUpdate({ username }, { $push: { thoughts: thought._id } }, { new: true })
                .then(user => res.json({ thought: thought.thought, username: user.username, userId: user._id }))
            )
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error' });
            });
  
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async thought => {
            !thought 
            ? res.status(404).json({ message: 'Thought not found' }) 
            : res.json(thought);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate({_id: req.params.thoughtId }, req.body, { new: true })
        .then(thought => res.json(thought))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) => res.json({ thought, message: 'Thought deleted' }))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    addThoughtReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } }, { new: true })
        .then(thought => res.json(thought))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    },

    deleteThoughtReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
        .then(res.json({ message: 'Reaction deleted' }))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });
    }
}
