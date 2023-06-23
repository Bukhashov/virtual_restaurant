const { Router } = require('express');
const BookingRouter = Router();
const BoogingController = require('../../../controller/booking');

BookingRouter.get('/:candidate_id', BoogingController.getAll);
BookingRouter.post('/add', BoogingController.add);

module.exports = BookingRouter;