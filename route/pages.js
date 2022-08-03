const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');

router.get('/', (req, res) => {
    res.render('index')

});

router.get('/work_experience', (req, res) => {
    res.render('work_experience')
});

router.get('/pursuits', (reg, res) => {
    res.render('pursuits')
});

router.get('/passions', (reg, res) => {
    res.render('passions')
});

router.get('/media', (reg, res) => {
    res.render('media')
});

router.get('/map', (req, res) => {
    res.render('map')
});

router.get('/contact', (req, res) => {
    res.render('contact')
});

router.post('/submitContact',(req, res) => {
    const contact = new Contact({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact)
        .then(result =>{
            res.render('contact')
        })
        .catch(err => console.log(err))
});
module.exports = router;
