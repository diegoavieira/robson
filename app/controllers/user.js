import jwt from 'jsonwebtoken';
import {secret as jwtSecret} from '../../config/config';
import {models as Models} from '../../config/database';

exports.signup = (req, res) => {
  const params = req.body;
  Models.user.findOne({
    where: {login: params.login}
  }).then(user => {
    if (user) {
      res.json({success: false, message: 'Email already registered.'})
    } else {
      Models.user.create(params).then(result => {
        res.json({success: true, message: 'User created successfully.'})
      }).catch(error => {
        res.status(412).json({success: false, message: error.message});
      });
    }
  }).catch(error => {
    res.status(412).json({success: false, message: error.message});
  });
};

exports.login = (req, res) => {
  const params = req.body;
  Models.user.findOne({
    where: {login: params.login}
  }).then(user => {
    if (!user) {
      res.json({success: false, message: 'User not found.'})
    } else if (user) {
      if (Models.user.isPassword(user.password, params.password)) {
        const payload = {
          login: user.login,
          password: user.password
        };
        const token = jwt.sign(payload, jwtSecret, {
          expiresIn: 1440
        });
        res.json({success: true, message: 'User authenticated successfully!', token: token});
      } else {
        res.json({success: false, message: 'Wrong password.'})
      }
    }
  }).catch(error => {
    res.status(412).json({success: false, message: error.message});
  });
};

exports.getUsers = (req, res) => {
  Models.user.findAll({
    attributes: {exclude: ['password']},
    order: [['user_id', 'ASC']]
  }).then(result => {
    res.json({success: true, data: result});
  }).catch(error => {
    res.status(412).json({success: false, message: error.message});
  });
};





