var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Phone = require('../model/phone');
const upload = require('../config/multer');
const passport = require('../config/passport');

/* GET Phones listing. */
router.get('/', (req, res, next) => {
  Phone.find({})
    .exec((err, Phones) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Phones);
    });
});

// router.post('/', (req, res) => {
// 	console.log(req.body);
//   const phone = new Phone({
//   	brand: req.body.brand,
//     name: req.body.name,
//     specs: req.body.specs,
//     image: req.body.image || ''
//   });

//   phone.save((err) => {
//     if (err) {
//       return res.send(err);
//     }

//     return res.json({ message: 'New Phone created!' });
//   });
// });

/* GET a single Phone. */
router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }
  
  Phone.findById(req.params.id, (err, Phones) => {
      if (err) {
        return res.send(err);
      }

      return res.json(Phones);
    });
});

/* EDIT a Phone. */
router.put('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }
  
  Phone.findByIdAndUpdate(req.params.id, {
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image
  }, (err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'Phone updated successfully'
    });
  });
})

/* DELETE a Phone. */
router.delete('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }
  
  Phone.remove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'Phone has been removed!'
    });
  })
});

router.post('/', upload.single('file'), function(req, res) {
  const phone = new Phone({
    name: req.body.name,
    brand: req.body.brand,
    image: `/uploads/${req.file.filename}`,
    specs: JSON.parse(req.body.specs) || []
  });

  phone.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'New Phone created!',
      phone: phone
    });
  });
});

module.exports = router;