import Ember from 'ember';

const EmptyStateComponent = Ember.Component.extend({
});

EmptyStateComponent.reopenClass({
  positionalParams: ['title']
});

export default EmptyStateComponent;
