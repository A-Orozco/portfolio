const mong = require('mongoose');

var contactSchema = new mong.Schema( {
    fname: {
        type: String
    },

    lname: {
        type: String
    },
    
    email: {
        type: String
    },

    reason: {
        type: String
    },

    comment: {
        type: String
    }
    


});

module.exports = mong.model('Contact', contactSchema);
