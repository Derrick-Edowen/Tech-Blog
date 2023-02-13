const { Comment } = require('../models');

const commentData = [{
        comment_text: "Software is a set of instructions",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Computer hardware includes the physical parts of a computer",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "A computer is a machine that can be programmed",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;