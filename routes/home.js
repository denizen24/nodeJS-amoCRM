const { Router } = require('express');
const amoCRM = require('../lib/amoCRM')
const CronJob = require('cron').CronJob;

const router = Router()
let success = Boolean;

amoCRM.login().then(function() {
    success = true;
    console.log('success connect')
  }, function(err) {
    success = false;  
    console.log('error');
  })

new CronJob('*/13 * * * *', function () {
    amoCRM.login().then(function() {
    console.log('reconnected to amoCrm');
  }, function(err) {
    console.log('cant reconnect to amoCrm')
  })
}, null, true, 'Europe/Moscow'); 

router.get('/', (req, res, next) => {
    res
        .render('index', {
        title: 'Главная страница',
        isHome: true,
        success
    })
})

module.exports = router