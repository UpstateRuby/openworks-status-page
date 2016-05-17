import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveThing() {
      if (typeof this.get("beforeCreate") === "function") {
        let success = this.get("beforeCreate")();
        if (!success) {
          return false;
        }
      }
      this.get('thing').save().then(() => {
        this.get("onCreate")();
      }, () => {
        alert("Save Failed");
      });
    },
    cancel() {
      this.get("onCancel")();
    }
  }
});
