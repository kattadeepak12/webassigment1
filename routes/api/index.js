//@copyright Deepak Katta
const route = require('express').Router()

route.use('/students', require('./students'))
route.use('/teachers', require('./teachers'))
route.use('/courses', require('./courses'))
route.use('/subjects', require('./subjects'))

exports = module.exports = {
    route
}