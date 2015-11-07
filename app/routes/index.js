import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('thing');
  },
  afterModel: function(things, transition) {
    //console.log(things.objectAt(0).get('location'))
  }
});
