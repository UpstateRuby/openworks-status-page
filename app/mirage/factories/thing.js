import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.commerce.product,
  status: faker.random.number,
  reason: faker.lorem.sentence
});
