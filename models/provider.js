var mongoose = require('mongoose');

var Provider = mongoose.model('Provider', require('../db/schema').providerSchema);

module.exports = Provider;