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
    assert.equal(currentURL(), '/locations/1/things', 'Was not redirected to only location.');
    assert.equal(find('.location-name').text(), 'Location 1');
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

test('clicking Create a New Things button navigates to locations/:id/things/new', function(assert) {
  server.create('location');

  visit('/locations/1/things');

  andThen(function() {
    assert.equal(find('.location-name').text(), 'Location 1');
    assert.ok(find('.btn.btn-primary').text().indexOf('Create a New Thing') !== -1);

    click('.btn.btn-primary');

    andThen(function() {
      assert.equal(currentURL(), '/locations/1/things/new', 'Should have redirected');
    });
  });
});

test('creating a new thing within a location with only one location', function(assert) {
  server.create('location').createThing();
  const newThingName = 'New Thing';

  visit('/locations/1/things/new');
  fillIn('input[name=name]', newThingName);
  click('.btn:contains(Save)');

  andThen(function() {
    assert.equal(currentURL(), '/locations/1/things', 'Should be redirected to locations/show/things');
    assert.ok(find('.thing-name').text().indexOf(newThingName) !== -1);
    assert.equal(find('.thing-name').length, 2);
  });
});

test('creating a new thing within a location with multiple locations', function(assert) {
  server.create('location').createThing();
  server.create('location').createThing();
  const newThingName = 'New Thing';
  const locationId = 2;

  visit('/locations/' + locationId + '/things/new');
  fillIn('input[name=name]', newThingName);
  click('.btn:contains(Save)');

  andThen(function() {
    assert.equal(currentURL(), '/locations/' + locationId + '/things', 'Should be redirected to locations/show/things');
    assert.ok(find('.thing-name').text().indexOf(newThingName) !== -1);
    assert.equal(find('.thing-name').length, 2);
  });
});

test('clicking Cancel navigates to locations/:id/things and does not create a new thing', function(assert) {
  const location1 = server.create('location');
  const thingCount = 4;
  server.createList('thing', thingCount, {locationId: location1.id});

  visit('/locations/1/things/new');
  click('.btn:contains(Cancel)');

  andThen(function() {
    assert.equal(currentURL(), '/locations/1/things', 'Should not redirect');
    assert.equal(find('.location-name').text(), 'Location 1');
    assert.ok(find('.thing-name').length === thingCount);
    assert.ok(find('.btn.btn-primary').text().indexOf('Create a New Thing') !== -1);
  });
});

