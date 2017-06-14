var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model("User", userSchema);