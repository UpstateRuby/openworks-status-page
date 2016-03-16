import Ember from 'ember';

const EmptyStateComponent = Ember.Component.extend({
  classNames: ['empty-state']
});

EmptyStateComponent.reopenClass({
  positionalParams: ['title']
});

export default EmptyStateComponent;
