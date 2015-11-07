export default function() {
  this.urlPrefix = 'http://localhost:3000';
  this.timing = 0;      // delay for each request, automatically set to 0 during testing

  this.get('/locations');
  this.get('/locations/:id');
  this.post('/locations');
  this.put('/locations/:id');
  this.del('/locations/:id');

  this.get('/things');
  this.get('/things/:id');
  this.post('/things');
  this.put('/things/:id');
  this.del('/things/:id');
}
