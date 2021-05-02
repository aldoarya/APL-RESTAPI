const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:PdsrLfq5FR39qGej@cluster0.6aem8.mongodb.net/Employee?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection : ' + err)
    }
});

require('./employee.model');