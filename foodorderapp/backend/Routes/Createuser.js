const express = require('express');
const router = express.Router();
const user = require('../model/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = 'sothiswillbe32characterslonguint'

router.post(
  '/createuser',
  [
    body('email', 'Use Valid format').isEmail(),
    body('password', 'Use Valid format').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secpass = await bcrypt.hash(req.body.password,salt)
    try {
      await user.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true});
    } catch (error) {
      console.log('error');
      res.json({ success: false});
    }
  }
);
router.post(
  '/login',
  [
    body('email', 'Use Valid format').isEmail(),
    body('password', 'Use Valid format').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userdata = await user.findOne({email: req.body.email});
      if (!userdata) {
        return res.status(400).json({ errors: 'Try Logging with Correct creds' });
      }
      const pwdcom = await bcrypt.compare(req.body.password,userdata.password)
      if (!pwdcom) {
        return res
          .status(400)
          .json({ errors: 'Try Logging with Correct creds' });
      }
      const data = {
        user:{
          id: userdata.id
        }
      }
      const authtoken = jwt.sign(data,jwtsecret)
      return res.json({ success: true,authtoken:authtoken});
    } catch (error) {
      console.log('error');
      res.json({ success: false });
    }
  }
);

module.exports = router;
