import {models as Models} from '../../config/database';

exports.createTicket = (req, res) => {
  Models.Tickets.create(req.body).then(result => {
    res.status(200).json({success: true, data: result})
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};

exports.getTickets = (req, res) => {
  let parms = req.body;
  Models.Tickets.findAll({
    where: {
      date: {$gte: parms.dateInit, $lte: parms.dateEnd}
    },
    order: [['date', 'ASC']]
  }).then(result => {
    if (result.length) {
      res.status(201).json({success: true, data: result});
    } else {
      res.status(206).json({success: false, message: 'Nenhum resultado para este período.'});
    }
  }).catch(error => {
    res.status(206).json({success: false, message: error.message});
  });
};





