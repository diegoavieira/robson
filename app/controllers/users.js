import jwt from 'jsonwebtoken';
import {secret as jwtSecret} from '../../config/config';
import {models as Models} from '../../config/database';

exports.signup = (req, res) => {
  const parms = req.body;
  Models.Users.findOne({
    where: {login: parms.login}
  }).then(user => {
    if (user) {
      res.status(206).json({success: false, message: 'Usuário já existe.'})
    } else {
      Models.Users.create(parms).then(result => {
        res.status(200).json({success: true, message: 'Usuário criado com sucesso.'})
      }).catch(error => {
        res.status(206).json({success: false, message: error.message});
      });
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.login = (req, res) => {
  const parms = req.body;
  Models.Users.findOne({
    where: {login: parms.login}
  }).then(user => {
    if (!user) {
      res.status(206).json({success: false, message: 'Login ou senha inválidos.'})
    } else if (user) {
      if (Models.Users.isPassword(user.password, parms.password)) {
        const payload = {
          login: user.login,
          password: user.password
        };
        const token = jwt.sign(payload, jwtSecret);
        res.status(200).json({
          success: true,
          token: token,
          data: {
            user_id: user.user_id,
            name: user.name,
            login: user.login
          },
          message: 'Usuário logado.'
        });
      } else {
        res.status(206).json({success: false, message: 'Login ou senha inválidos.'})
      }
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.logout = (req, res) => {
  res.status(201).json({success: true, message: 'Usuário deslogado.'});
};

exports.getUsers = (req, res) => {
  Models.Users.findAll({
    attributes: {exclude: ['password']},
    order: [['user_id', 'ASC']]
  }).then(result => {
    res.status(201).json({success: true, data: result});
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};





