import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('thing', { filter: { location_id: params.location_id } });
  }
});
