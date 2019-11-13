const { Router } = require('express');
const amoCRM = require('../lib/amoCRM')

const router = Router()

router.get('/', async (req, res, next) => {
    amoCRM.getTask();
    res
        .render('all_task', {
        title: 'Все задачи в amoCRM',
        isAllTask: true,
    })
})

module.exports = router