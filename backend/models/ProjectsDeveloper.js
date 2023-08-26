const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectsDeveloperSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model("developer-details", ProjectsDeveloperSchema);
