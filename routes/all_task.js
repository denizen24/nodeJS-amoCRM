const { Router } = require('express');
const gets = require('../lib/getAmoCrm')

const router = Router()


router.get('/', (req, res, next) => {
    let mass_tasks = gets()
    res
        .render('all_task', {
        title: 'Все задачи в amoCRM',
        isAllTask: true,
        mass_tasks
    })
})

module.exports = router