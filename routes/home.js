const { Router } = require('express');
const gets = require('../lib/getAmoCrm')

const router = Router()

router.get('/', (req, res, next) => {
    gets()
    res
        .render('index', {
        title: 'Главная страница',
        isHome: true,
    })
})

module.exports = router