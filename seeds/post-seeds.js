const { Post } = require('../models');

const postData = [{
        title: 'Software',
        content: 'Software is a set of instructions, data or programs used to operate computers and execute specific tasks. It is the opposite of hardware, which describes the physical aspects of a computer. Software is a generic term used to refer to applications, scripts and programs that run on a device',
        user_id: 1

    },
    {
        title: 'Hardware',
        content: 'Computer hardware includes the physical parts of a computer, such as the case, central processing unit, random access memory, monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard',
        user_id: 2
    },
    {
        title: 'Computers',
        content: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;