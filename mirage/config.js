export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://openworks-status-api.herokuapp.com';
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/locations');
  this.post('/locations');
  this.get('/locations/:id');
  this.put('/locations/:id');
  this.patch('/locations/:id');
  this.del('/locations/:id');

  this.get('/locations/:id/things');

  this.get('/things');
  this.post('/things');
  this.get('/things/:id');
  this.put('/things/:id');
  this.patch('/things/:id');
  this.del('/things/:id');

  this.get('/properties');
  this.post('/properties');
  this.get('/properties/:id');
  this.put('/properties/:id');
  this.patch('/properties/:id');
  this.del('/properties/:id');
}
