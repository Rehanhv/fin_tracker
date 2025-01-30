const mongoose = require('../Configuratin/config');

const userSchema = new mongoose.Schema({
    desc: String,
    amount: Number,
    location: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;