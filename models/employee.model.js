const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: 'This field is required.'
    },
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    position: {
        type: String
    },
});

mongoose.model('Employee', employeeSchema);