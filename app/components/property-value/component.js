import Ember from 'ember';

const PropertyValueComponent = Ember.Component.extend({
});

PropertyValueComponent.reopenClass({
  positionalParams: ['property']
});

export default PropertyValueComponent;
