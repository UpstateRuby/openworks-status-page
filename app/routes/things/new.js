import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let locations = this.store.findAll('location');
    return Ember.RSVP.hash({
      locations: locations,
      newThing: this.store.createRecord('thing', { status: 0, location: locations.get('firstObject') })
    });
  },
  deactivate: function() {
    var model = this.controllerFor('things.new').get('model');
    model.rollbackAttributes();
  }
});

