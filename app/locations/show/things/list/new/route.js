import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('thing');
  },
  actions: {
    beforeCreate(thing) {
      thing.set('location', this.modelFor('locations.show'));
      return true;
    },
    thingCreated(thing) {
      this.transitionTo('locations.show.things.list', thing.get('location'));
    },
    cancel() {
      this.transitionTo('locations.show.things.list', this.modelFor('locations.show'));
    }
  }
});
