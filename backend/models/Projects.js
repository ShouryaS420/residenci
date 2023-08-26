const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    locality: {
        type: String,
        required: true,
    },
    builderName: {
        type: String,
        required: true,
    },
    ProjectName: {
        type: String,
        required: true,
    },
    reraID: {
        type: String,
        required: true,
    },
    landParcel: {
        type: String,
        required: true,
    },
    tower: {
        type: String,
        required: true,
    },
    totalUnits: {
        type: String,
        required: true,
    },
    possessionDate: {
        type: String,
        required: true,
    },
    launchDate: {
        type: String,
        required: true,
    },
    headImg: {
        type: String,
        required: true,
    },
    TrendCardImg: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        // required: true,
        default: 'number',
    },
    save: {
        type: String,
        // required: true,
        default: 'no',
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model("projects-details", ProjectSchema);
