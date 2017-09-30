import {models as Models} from '../../config/database';

exports.createCash = (req, res) => {
  Models.Cashs.create(req.body).then(result => {
    res.status(200).json({success: true, data: result})
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.getCashReceipts = (req, res) => {
  let parms = req.body;
  Models.Cashs.findAll({
    where: {
      cashType: 'receipt',
      date: {$gte: parms.dateInit, $lte: parms.dateEnd}
    }
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

exports.getCashOutflows = (req, res) => {
  let parms = req.body;
  Models.Cashs.findAll({
    where: {
      cashType: 'outflow',
      date: {$gte: parms.dateInit, $lte: parms.dateEnd}
    }
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

exports.getCashExtract = (req, res) => {
  let parms = req.body;
  Models.Cashs.findAll({
    where: {
      date: {$gte: parms.dateInit, $lte: parms.dateEnd}
    }
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




