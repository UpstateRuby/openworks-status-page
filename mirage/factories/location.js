import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.list.cycle('101 N Main', '2 N Main')(i);
  }
});
