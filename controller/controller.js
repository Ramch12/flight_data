const { searchFlight, fights } = require('../flightData/flights');
const schema = require('../Validate/validate');
const moment = require('moment');
const _ = require('lodash');
exports.getflightdata = (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const { error, value } = schema.validate(data);
        if (error) throw new Error(error);
        console.log(error, value);
        let date = new Date(value.Date);
        let newDate = moment(date).format('DD-MM-YYYY');
        let result = searchFlight.filter(data => data.Date === newDate && data.source === value.Source && data.Destination === value.Destination).map((data) => data.id);
        let result1 = [];
        for (i of result) {
            for (j of fights) {
                if (i === j.searchId) {
                    result1.push(_.pick(j, ['flightName', 'price']));
                }
            }
        };
        if (!result1.length) {
            throw new Error("No flights are available at given route");
        }
        res.status(200).send({data:result1}); ``
    }
    catch (err) {
        console.log("Error", err);
        res.status(404).send({error:err});
    }
}