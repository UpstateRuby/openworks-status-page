import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('locations', function() {
    this.route('new');
  });
  this.route('location', { path: '/location/:location_id' });
  this.route('thing', { path: '/thing/:thing_id' });
});

export default Router;
