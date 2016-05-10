import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],
  attributeBindings: ['tabindex'],
  tabindex: 0,
  units: ['Fahrenheit', 'Percentage'],
  actions: {
    editName() {
      this.set('isEditingName', true);
      this.set('priorName', this.get('thing').get('name'));
    },
    doneEditingName() {
      this.toggleProperty('isEditingName');
      this.get('thing').save();
    },
    cancelEditName() {
      this.toggleProperty('isEditingName');
      this.get('thing').set('name', this.get('priorName'));
    },
    addProperty() {
      this.set('isAddingProperty', true);
      let newProp = this.get('thing').get('properties').createRecord({
        thing: this.get('thing')
      });
      this.set('newProperty', newProp);
    },
    saveNewProperty() {
      this.set('isAddingProperty', false);
      this.get('newProperty').save();
    },
    cancelAddingProperty() {
      this.set('isAddingProperty', false);
      this.get('newProperty').deleteRecord();
    },
    selectUnit(unit) {
      this.get('newProperty').set('unit', unit);
    }
  }
});
