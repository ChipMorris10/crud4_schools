var express = require('express');
var router = express.Router();
var School = require('../models/schools');

// ** GET ALL schools ** //
router.get('/schools', function (req, res, next) {
    School.find(function(err, schoolData) {
        if (err) {
            res.json({'message': err});
        } else  {
          res.json(schoolData);
      }
    });
});

// ** GET SINGLE school ** //
router.get('/schools', function (req, res, next) {
    School.findById(req.params.id, function(err, schoolData) {
        if (err) {
            res.json({'message': err});
        } else {
            res.json(schoolData);
        }
    });
});

// ** POST ALL schools ** //
router.post('/schools', function (req, res, next) {
    newSchool = new School ({
        name:req.body.name,
        coed:req.body.coed,
        numStudents:req.body.numStudents
    });
    newSchool.save(function (err, schoolData) {
        if (err) {
            res.json({'message': err});
        } else {
            res.json(schoolData);
        }
    });
});

// ** PUT (Update) ONE school ** //
router.put('/schools', function (req, res, next) {
    var update = {
        name:req.body.name,
        coed:req.body.coed,
        numStudents:req.body.numStudents
    };
    School.findByIdAndUpdate(req.params.id, update, function(err, schoolData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(schoolData);
        }
     });
});

// ** DELETE SINGLE school ** //
router.delete('/schools', function (req, res, next) {
    School.findByIdAndRemove(req.params.id, function(err, school) {
        if (err) {
            res.json({'message': err});
        } else {
            res.json(schoolData);
        }
    });
});

module.exports = router;