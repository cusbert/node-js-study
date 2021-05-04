const util = require('util');
const crypto = require('crypto');

const randomBytesPromis = util.promisify(crypto.randomBytes);

randomBytesPromis(64)
    .then((buf) => {
        console.log('buf : ', buf.toString('base64') );
    })
    .catch((err) => {
        console.log(err);
    });

