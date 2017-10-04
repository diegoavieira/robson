import {models as Models} from '../../config/database';

exports.createCash = (req, res) => {
  Models.Cashs.create(req.body).then(result => {
    res.status(200).json({
      success: true,
      data: result,
      message: `${req.body.cashType} registrada com sucesso.`
    });
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
          cashType: 'Entrada',
          date: {$gte: parms.dateInit, $lte: parms.dateEnd}
        }
      }).then(sumReceiptResult => {
        let sumReceipt = 0;
        if (sumReceiptResult) {
          sumReceipt = sumReceiptResult
        } 
        Models.Cashs.sum('value', {
          where: {
            cashType: 'Saída',
            date: {$gte: parms.dateInit, $lte: parms.dateEnd}
          }
        }).then(sumOutflowResult => {
          let sumOutflow = 0;
          if (sumOutflowResult) {
            sumOutflow = sumOutflowResult
          } 
          res.status(201).json({
            success: true,
            data: result,
            totalReceipt: sumReceipt,
            totalOutflow: sumOutflow,
            totalLiquid: sumReceipt - sumOutflow
          });
        });
      });
    } else {
      res.status(206).json({
        success: false,
        message: 'Nenhum resultado encontrado.',
        totalReceipt: 0,
        totalOutflow: 0,
        totalLiquid: 0
      });
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.getCashTotal = (req, res) => {
  Models.Cashs.sum('value', {
    where: {
      cashType: 'Entrada'
    }
  }).then(sumReceiptResult => {
    let sumReceipt = 0;
    if (sumReceiptResult) {
      sumReceipt = sumReceiptResult
    } 
    Models.Cashs.sum('value', {
      where: {
        cashType: 'Saída'
      }
    }).then(sumOutflowResult => {
      let sumOutflow = 0;
      if (sumOutflowResult) {
        sumOutflow = sumOutflowResult
      } 
      res.status(201).json({
        success: true,
        total: sumReceipt - sumOutflow
      });
    }).catch(error => {
      res.status(206).json({success: false, message: error.message});
    })
  });
}