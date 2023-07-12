const { sendEmail } = require('../controllers/sendEmail');

const sendEmailRouter = require('express').Router();

sendEmailRouter.get('/', (req, res) => {
    res.locals.data = {}
    res.render('home');
});

sendEmailRouter.post('/', sendEmail)

module.exports = sendEmailRouter;