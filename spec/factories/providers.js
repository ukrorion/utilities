const factory = require('factory-girl').factory;
const Provider = require('../../models/provider');

let provider_attrs = {
  name: 'TestName',
  owner_name: "Test Owner",
  created_at: Date.now(),
  updated_at: Date.now(),
  address: {
    apartment_number: '10',
    house_number: '208a',
    street: 'Vovchunecka',
    city: 'Ivano-Frankivsk',
    postal_code: '76006',
    country: 'Ukraine'
  }
};

factory.define('provider', Provider, provider_attrs);