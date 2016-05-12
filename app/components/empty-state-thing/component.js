import Ember from 'ember';

const EmptyStateThingComponent = Ember.Component.extend({
});

EmptyStateThingComponent.reopenClass({
  positionalParams: ['title']
});

export default EmptyStateThingComponent;
