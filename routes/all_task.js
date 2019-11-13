const { Router } = require('express');
const amoCRM = require('../lib/amoCRM')

const router = Router()

// let mass_tasks = [];

router.get('/', async (req, res, next) => {
    let mass_tasks = await amoCRM.getTask();
    console.log(mass_tasks);
    res
        .render('all_task', {
        title: 'Все задачи в amoCRM',
        isAllTask: true,
        mass_tasks
    })
})

module.exports = router