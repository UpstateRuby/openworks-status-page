import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('locations', function() {
    this.route('list', { path: '/' });
    this.route('new');
    this.route('show', { path: ':location_id' });
  });

  this.route('things', function() {
    this.route('show', { path: ':thing_id' });
    this.route('new');
  });
});

export default Router;
