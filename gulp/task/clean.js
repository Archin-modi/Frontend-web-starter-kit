var gulp = require("gulp");
var del = require('del');

const clean = del.sync('dist')

module.exports = clean;