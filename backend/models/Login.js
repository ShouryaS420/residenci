const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoginSchema = new Schema({
    mobileNumber: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model("user-login", LoginSchema);
