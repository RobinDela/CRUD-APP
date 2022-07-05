const mongoose = require('mongoose');

const CrewsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    gender: {
        type: String,
    },
    speciality: {
        type: String,
    },
    experience: {
        type: String,
    },
    weapon: {
        type: String,
    },
});

module.exports = mongoose.model('Crews', CrewsSchema);