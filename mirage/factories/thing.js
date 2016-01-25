import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.list.cycle(
      'HVAC',
      'Keezer',
      'Lighting',
      'Security'
    )(i);
  },
  status(){
    return faker.random.number();
  },
  reason() {
    return faker.lorem.words(5).join(' ');
  }
});
