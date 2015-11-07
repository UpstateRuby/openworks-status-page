import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: "HVAC",
  status: 0,
  reason: faker.company.bs,
  location: null
});
