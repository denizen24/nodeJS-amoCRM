const AmoCRM = require( 'amocrm-js' ); 
require('dotenv').config();
// const { DOMAIN, LOGIN_AMOCRM, HASH_AMOCRM } = process.env;


const crm = new AmoCRM({
    domain: 'akakiy813.amocrm.ru',
    auth: {
        login: 'akakiy813@gmail.com',
        hash: 'f190df9c4ef91f082d2810fa54a1d569d16627a9', // API-ключ доступа
    }
});
 
// Вход в портал
crm.connect().then(() => {
  console.log( `Вход в портал осуществлён` );
})
.catch( e => {
  console.log( 'Ошибка входа', e );
});

module.exports = crm;
