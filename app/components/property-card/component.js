import Ember from 'ember';

const PropertyCardComponent = Ember.Component.extend({
});

PropertyCardComponent.reopenClass({
  positionalParams: ['property']
});

export default PropertyCardComponent;

