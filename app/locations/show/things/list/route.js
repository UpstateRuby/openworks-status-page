import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('thing', {location_id: this.modelFor('locations/show').id,include: 'properties'});
  }
});
