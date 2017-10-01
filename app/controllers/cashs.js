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
      Models.Cashs.sum('value', {
        where: {
          cashType: 'receipt',
          date: {$gte: parms.dateInit, $lte: parms.dateEnd}
        }
      }).then(sum => {
        res.status(201).json({
          success: true,
          data: result,
          total: sum
        });
      });
    } else {
      res.status(206).json({
        success: false,
        message: 'Nenhum resultado encontrado.',
        total: 0
      });
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
      Models.Cashs.sum('value', {
        where: {
          cashType: 'outflow',
          date: {$gte: parms.dateInit, $lte: parms.dateEnd}
        }
      }).then(sum => {
        res.status(201).json({
          success: true,
          data: result,
          total: sum
        });
      });
    } else {
      res.status(206).json({
        success: false,
        message: 'Nenhum resultado encontrado.',
        total: 0
      });
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
      Models.Cashs.sum('value', {
        where: {
          cashType: 'receipt',
          date: {$gte: parms.dateInit, $lte: parms.dateEnd}
        }
      }).then(sumReceipt => {
        Models.Cashs.sum('value', {
          where: {
            cashType: 'outflow',
            date: {$gte: parms.dateInit, $lte: parms.dateEnd}
          }
        }).then(sumOutflow => {
          res.status(201).json({
            success: true,
            data: result,
            totalLiquid: sumReceipt -  sumOutflow
          });
        });
      });
    } else {
      res.status(206).json({
        success: false,
        message: 'Nenhum resultado encontrado.',
        totalLiquid: 0
      });
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.getCashTotal = (req, res) => {
  Models.Cashs.findAll().then(result => {
    if (result.length) {
      Models.Cashs.sum('value', {
        where: {
          cashType: 'receipt',
        }
      }).then(sumReceipt => {
        Models.Cashs.sum('value', {
          where: {
            cashType: 'outflow',
          }
        }).then(sumOutflow => {
          res.status(201).json({
            success: true,
            data: result,
            total: sumReceipt - sumOutflow
          });
        });
      });
    } else {
      res.status(206).json({
        success: false,
        message: 'Nenhum resultado encontrado.',
        total: 0
      });
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};




