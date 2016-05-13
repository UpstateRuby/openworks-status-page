import { test } from 'qunit';
import moduleForAcceptance from 'openworks-status-page/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | things');

test('viewing things at a location', function(assert) {
  const thingsCount = 4;
  let firstLocation = server.create('location');
  server.createList('thing', thingsCount, {locationId: firstLocation.id});

  visit('/locations/1/things');

  andThen(function() {
    assert.equal(currentURL(), '/locations/1/things');
    assert.equal(find('.card .card-header[data-thing-id]').length, 4);
  });
});

test('viewing a thing', function(assert) {
  let thing = server.create('location').createThing({name: 'Thing 1'});
  server.createList('property', 3, {thingId: thing.id});

  visit('/things/1');

  andThen(function() {
    assert.equal(currentURL(), '/things/1');
    assert.equal(find('[data-thing-id=1]').length, 1);
    assert.equal(find('[data-thing-id=1]').text(), 'Thing 1');
    assert.equal(find('h4.text-muted').text(), 'Location 1');
    assert.equal(find('h5.text-muted').length, 3);
  });
});

test('navigating from a thing to it\'s location', function(assert) {
  let thing = server.create('location').createThing({name: 'Thing 1'});
  server.createList('property', 3, {thingId: thing.id});

  visit('/things/1');
  click('h4:contains(Location 1)');

  andThen(function() {
    assert.equal(currentURL(), '/locations/1/things');
    assert.equal(find('.card .card-header[data-thing-id]').length, 1);
  });
});

test('creating a new thing from a location', function(assert) {
  server.create('location').createThing({name: 'Thing 1'});

  visit('/locations/1/things');
  click('.btn:contains(Create a New Thing)');

  andThen(function() {
    assert.equal(currentURL(), '/locations/1/things/new');
  });
});
