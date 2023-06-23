const bookingModel = require('../../models/booking');

class Booking {
    add = async (req, res) => {
        const { candidate_id, table_number, peple, date, phone } = req.body;
        console.log("booking add")
        new bookingModel({
            candidate_id: candidate_id,
            table_number: table_number,
            peple: peple,
            phone: phone,
            date: {
                day: date.day,
                month: date.month,
                year: date.year,
                hours: date.hours,
                minutes: date.minutes
            }
        }).save();

        res.status(201).json({massage: "saved"});
    }
    getAll = async (req, res) => {
        const {candidate_id} = req.params;
        const bookings = await bookingModel.find({candidate_id: candidate_id});
        res.status(200).json(bookings);
    }
}

module.exports = new Booking;