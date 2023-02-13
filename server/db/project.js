const Sequelize = require('sequelize');
const db = require('./database');

const Project = db.define('project', {
    title: {
        type: Sequelize.STRING,
    },
    imageUrl: {
        type: Sequelize.TEXT
    },
    siteUrl: {
        type: Sequelize.TEXT
    }
})

module.exports = Project