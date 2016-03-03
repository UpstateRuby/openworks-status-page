import { test } from 'qunit';
import moduleForAcceptance from 'openworks-status-page/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | locations');

test('visiting /locations', function(assert) {
  visit('/locations');

  andThen(function() {
    assert.equal(currentURL(), '/locations');
    assert.equal(find('strong').text().trim(), 'No Locations Yet');
    assert.equal(find('.btn-success').text(), 'Add Location');
  });
});

test('navigate from /locations to /locations/new with 0 locations', function(assert) {
  visit('/locations');
  click('.btn-success');

  andThen(function() {
    assert.equal(currentURL(), '/locations/new');
  });
});

test('visiting /locations with exactly 1 location', function(assert) {
  server.create('location');

  visit('/locations');

  andThen(function() {
    assert.equal(currentURL(), '/location/1', 'Was not redirected to only location.');
    assert.equal(find('h2').text(), 'Location 1');
  });
});

test('visiting /locations with 2 location', function(assert) {
  server.createList('location', 2);

  visit('/locations');

  andThen(function() {
    assert.equal(currentURL(), '/locations', 'Should not be redirected');
    assert.equal(find('A:contains("Location")').length, 2);
  });
});
