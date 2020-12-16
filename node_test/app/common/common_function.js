'use strict';
// Nodejs encryption with CTR
var sql = require('../model/db.js');
var dateFormat = require('dateformat');
var common_function = function (task) {

};


common_function.get_dateTime = function () {
        let date_ob = new Date();
        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(- 2);
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(- 2);
        // current year
        let year = date_ob.getFullYear();
        // current hours
        let hours = date_ob.getHours();
        // current minutes
        let minutes = date_ob.getMinutes();
        // current seconds
        let seconds = date_ob.getSeconds();
        // prints date in YYYY-MM-DD format
        //console.log(year + "-" + month + "-" + date);
        // prints date & time in YYYY-MM-DD HH:MM:SS format
        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

common_function.get_date = function (date) {
        return dateFormat(date, "isoDate");
}
common_function.get_current_date = function () {
        var now = new Date();
        return dateFormat(now, "ddd");
}
common_function.get_age = function (date) {
        var now = new Date();
        return dateFormat(now, "yyyy") - dateFormat(date, "yyyy");
}


module.exports = common_function;