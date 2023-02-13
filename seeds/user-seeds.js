const { User } = require('../models');

const userData = [{
        username: 'Max',
        password: 'password'

    },
    {
        username: 'William',
        password: 'password'
    },
    {
        username: 'John',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;