const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomEmail, getRandomThought } = require('./data');

connection.once('open', async () => {
    console.log('Connected to database');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];

    for (let i = 0; i < 10; i++) {
        const username = `${getRandomName()}`;
        const email = `${getRandomEmail(username)}`;

        users.push({
            username,
            email,
        });
    }

    await User.collection.insertMany(users);

    for(let i = 0; i < 10; i++) {
        const user = await User.findOne({});
        const thought = {
            thought: `${getRandomThought()}`,
            username: user.username,
            reactions: [],
        };

        await Thought.collection.insertOne(thought);
    }

    console.log('Seeded database');
    process.exit(0);
});