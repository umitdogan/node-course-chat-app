var moment = require('moment');

var date = moment();
date.add(2, 'year').subtract(8, 'months');

console.log(date.format('LT'));
console.log(date.format('hh:mm a'));

console.log(date.format('DD MMMM YYYY hh:mm:ss dddd'));

date=moment(12345600000000);
console.log(date.format('DD MMMM YYYY hh:mm:ss dddd'));

//var date = new Date();
//console.log(date);

var someTimestamp = moment().valueOf();
console.log(someTimestamp);