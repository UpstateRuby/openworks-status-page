import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.list.cycle(
      'Temperature',
      'Humidity',
      'Running'
    )(i);
  },
  value(i) {
    return faker.list.cycle(
      (faker.random.number(30) + 60),
      (faker.random.number(50) + 10),
      (faker.random.number(1))
    )(i);
  },
  unit(i) {
    return faker.list.cycle(
      'Farenheight',
      'Percentage'
    )(i);
  },
  precision() {
    return 1
  }
});
