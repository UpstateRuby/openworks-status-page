import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveThing() {
      this.get('thing').save().then((thing) => {
        thing.get('location').get('things').pushObject(thing).save();
        this.get("onCreate")();
      }, () => {
        alert("Save Failed");
      });
    }
  }
});
