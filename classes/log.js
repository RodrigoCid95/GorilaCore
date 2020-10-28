"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var fs = require("fs");
var getDateTime = function () {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    var milSec = date.getMilliseconds();
    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec + ":" + milSec;
};
exports.Log = function (text, useLogger) {
    var logContent = "[" + getDateTime() + "] " + text;
    useLogger || global.useLogger ? fs.createWriteStream('gorila.log', { flags: 'a' }).write(logContent + "\n") : console.log(logContent);
};
//# sourceMappingURL=log.js.map