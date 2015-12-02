import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('locations');
  this.route('location', { path: '/location/:location_id' });
});

export default Router;
