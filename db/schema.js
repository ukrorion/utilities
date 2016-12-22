var mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  apartment_number: String,
  house_number: String,
  street: String,
  city: String,
  postal_code: {
    type: String,
    match: /^\d{5}$/,
    maxlength: 5
  },
  country: String
});

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40
  },
  owner_name: {
    type: String,
    required: false,
    maxlength: 240
  },
  created_at: Date,
  updated_at: Date,
  address: addressSchema
});

module.exports = {
  providerSchema: providerSchema,
  addressSchema: addressSchema
};