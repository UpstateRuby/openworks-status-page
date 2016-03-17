import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('location');
  },
  deactivate: function() {
    var model = this.controllerFor('locations.new').get('model');
    model.rollbackAttributes();
  }
});
