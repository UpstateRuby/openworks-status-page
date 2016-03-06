import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Thing ${i+1}`;
  },
  status(){
    return faker.random.number();
  },
  reason() {
    return faker.lorem.words(5).join(' ');
  }
});
