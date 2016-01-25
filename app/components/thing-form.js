import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.get('thing').save();
    },
    setLocation(location) {
      this.get('thing').set('location', location);
    }
  }
});
