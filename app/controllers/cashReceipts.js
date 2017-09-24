import {models as Models} from '../../config/database';

exports.createCashReceipt = (req, res) => {
  Models.CashReceipts.create(req.body).then(result => {
    res.status(200).json({success: true, data: result})
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.getCashReceipts = (req, res) => {
  let parms = req.body;
  Models.CashReceipts.findAll({
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





