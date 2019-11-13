// const AmoCRM = require( 'amocrm-js' ); 
// require('dotenv').config();
// // const { DOMAIN, LOGIN_AMOCRM, HASH_AMOCRM } = process.env;


// const crm = new AmoCRM({
//     domain: 'akakiy813.amocrm.ru',
//     auth: {
//         login: 'akakiy813@gmail.com',
//         hash: 'f190df9c4ef91f082d2810fa54a1d569d16627a9', // API-ключ доступа
//     }
// });
 
// // Вход в портал
// crm.connect().then(() => {
//   console.log( `Вход в портал осуществлён` );
// })
// .catch( e => {
//   console.log( 'Ошибка входа', e );
// });

// module.exports = crm;
let https = require('https');

exports.login = function() {
  return new Promise(function(resolve, reject) {
    let body = {
      USER_LOGIN: 'akakiy813@gmail.com',
      USER_HASH: 'f190df9c4ef91f082d2810fa54a1d569d16627a9',
    };
    
    body = JSON.stringify(body);

    let options = {
      host: "akakiy813.amocrm.ru",
      path: "/private/api/auth.php?type=json",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    let request = https.request(options, function(response) {
      response.on('data', function (chunk) {
        
        let responseObj = JSON.parse(chunk);
        if (response.statusCode == 200) {
          cookieForAmoCrm = response.headers['set-cookie'];
          return resolve(responseObj);
        } else {
          return reject(responseObj);
        }
      });
    })

    request.write(body);
    request.end();
  })
}

exports.createTask = function (text, type_t) {
  return new Promise(function(resolve, reject) {
    let body = {
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
    };
    body = JSON.stringify(body);
    let options = {
      host: 'akakiy813.amocrm.ru',
      path: '/api/v2/tasks',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieForAmoCrm
      }
    };

    let request = https.request(options, function(response) {
      response.on('data', function (chunk) {

        let responseObj = JSON.parse(chunk);

        if (response.statusCode == 200) {
          return resolve(responseObj);
        } else {
          return reject(responseObj);
        }
      });
    })
    request.write(body);
    request.end();
  })
}

exports.getTask = function () { 
  return new Promise(function(resolve, reject) {
    let body = {};
    body = JSON.stringify(body);
    let options = {
      host: 'akakiy813.amocrm.ru',
      path: '/api/v2/tasks',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieForAmoCrm
      }
    };

    let request = https.request(options, function(response) {
      response.on('data', function (chunk) {

        let responseObj = JSON.parse(chunk);

        if (response.statusCode == 200) {
          console.log(responseObj._embedded.items);
          return resolve(responseObj);
        } else {
          return reject(responseObj);
        }
      });
    })
    request.write(body);
    request.end();
  })
}