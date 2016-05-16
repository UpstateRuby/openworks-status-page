import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    saveThing() {
      if (typeof this.get("beforeCreate") === "function") {
        let success = this.get("beforeCreate")();
        if (!success) {
          return false;
        }
      }
      this.get('thing').save().then((thing) => {
        this.get('flashMessages').success(thing.get('name') + ' created successfully!');
        this.get("onCreate")();
      }, () => {
        this.get('flashMessages').danger('Something went wrong.');
      });
    },
    cancel() {
      this.get("onCancel")();
    }
  }
});
