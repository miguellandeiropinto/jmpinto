var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/v1/menssegerbot', function(req, res, next) {

    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === 'abdce') {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }

});

module.exports = router;
