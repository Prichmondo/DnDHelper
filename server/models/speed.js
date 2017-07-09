var mongoose = require('mongoose');

var commons = require('./commons');

var speed = {
    type: {
        type: String,
        enum: commons.speeds,
        require: true
    },
    speed: {
        type: Number,
        require: true
    }
};

module.exports = speed;