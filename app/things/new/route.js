import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      thing: this.store.createRecord('thing'),
      locations: this.store.findAll('location')
    });
  },
  afterModel(model) {
    model.thing.location = model.locations.get('firstObject');
  },
  actions: {
    thingCreated(thing) {
      this.transitionTo('locations.show', thing.location);
    }
  }
});
