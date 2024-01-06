const mongoose = require('mongoose');

const Sales = new mongoose.Schema({
  name: { type: String, required: false},
  city: { type: String, required: true },
  mobile: { type: String, required: true },
  adress: { type: String, required: true },
  email: { type: String, required: true },
  value: { type: String, required: true },
  // Add more fields as per your product requirements
});

module.exports = mongoose.model('sales', Sales);