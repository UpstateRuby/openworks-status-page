import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },
  afterModel(model) {
    if (model.get('length') === 1) {
      this.transitionTo('location', model.get('firstObject'));
    }
  }
});
