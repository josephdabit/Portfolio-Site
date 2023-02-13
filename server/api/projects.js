const router = require('express').Router()
const { Project } = require('../db')

// GET for /api/projects
router.get('/', async (req, res, next) => {
    try {
        res.send(await Project.findAll())
    } catch (err) {
        next(err)
    }
});