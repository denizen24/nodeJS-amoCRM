const { Router } = require('express');
const amoCRM = require('../lib/amoCRM')

const router = Router()



router.get('/', async (req, res, next) => {
    let mass_tasks = amoCRM.getTask();
        // .then(function() {
        //     console.log('success get all tasks');
        // }, function(err) {
        //     console.log('error get all tasks');
        // }).then(result => console.log(result))
    console.log(mass_tasks);
    res
        .render('all_task', {
        title: 'Все задачи в amoCRM',
        isAllTask: true,
        mass_tasks
    })
})

module.exports = router