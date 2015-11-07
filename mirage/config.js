export default function() {

  this.urlPrefix = 'http://localhost:3000';

  this.get('/things');
  this.get('/things/:id');
  this.get('/locations');
  this.get('/locations/:id');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
