const { Router } = require('express');
const crm = require('../lib/amoCRM')

const router = Router()


router.get('/', (req, res) => {
    res.render('task', {
        title: 'Добавление Задачи в amoCRM',
        isTask: true,
    })
})

router.post('/', async (req, res) => {
    const type_t = req.body.type_task
    const text = req.body.textarea1

    crm.request
    .post( '/api/v2/tasks', {
        add: [{
            element_id: "0",
            element_type: "0",
            complete_till_at: "1574110740",
            task_type: type_t,
            text: text,
            created_at: "1573407982",
            updated_at: "1573407982",
            responsible_user_id: "3925288",
            created_by: "3925288"
        }]
    })
    .then( data => {
        console.log( 'Полученные данные', data );
        res.redirect('/')
    })
    .catch( e => {
        console.log( 'Произошла ошибка создания контакта', e );
    })

})

module.exports = router