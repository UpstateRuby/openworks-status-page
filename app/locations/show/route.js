import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.peekRecord('location', params.location_id) ||
      this.store.findRecord('location', params.location_id);
  }
});
