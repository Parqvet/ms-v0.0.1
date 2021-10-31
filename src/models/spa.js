const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const treatmentSpa = new Schema({
    title: { type: String },
    description: { type: String },
    category: { type: String },
    imageURL: { type: String },
    public_id: { type: String },
    filename: { type: String }
})

module.exports = model('Spa', treatmentSpa);