import {models as Models} from '../../config/database';

exports.createCashOutflow = (req, res) => {
  Models.CashOutflows.create(req.body).then(result => {
    res.status(200).json({success: true, data: result})
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.getCashOutflows = (req, res) => {
  let parms = req.body;
  Models.CashOutflows.findAll({
    where: {
      date: {$gte: parms.dateInit, $lte: parms.dateEnd}
    },
    order: [['date', 'DESC']]
  }).then(result => {
    if (result.length) {
      res.status(201).json({success: true, data: result});
    } else {
      res.status(206).json({success: false, message: 'Nenhum resultado encontrado.'});
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};





