import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],
  actions: {
    editReason() {
      this.toggleProperty('isEditingReason');
    },
    doneEditingReason() {
      this.toggleProperty('isEditingReason');
      console.log(this.get('thing'));
    },
    cancelEditReason() {
      this.toggleProperty('isEditingReason');
    }
  }
});
