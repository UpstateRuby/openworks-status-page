import { test } from 'qunit';
import moduleForAcceptance from 'openworks-status-page/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | things');

test('viewing things at a location', function(assert) {
  const thingsCount = 4;
  let firstLocation = server.create('location');
  server.createList('thing', thingsCount, {locationId: firstLocation.id});

  visit('/location/1');

  andThen(function() {
    assert.equal(currentURL(), '/location/1');
    assert.equal(find('.card').length, 4);
  });
});

test('viewing a thing', function(assert) {
  let thing = server.create('location').createThing({name: 'Thing 1'});
  server.createList('property', 3, {thingId: thing.id});

  visit('/thing/1');

  andThen(function() {
    assert.equal(currentURL(), '/thing/1');
    assert.equal(find('[data-thing-id=1]').length, 1);
    assert.equal(find('[data-thing-id=1]').text(), 'Thing 1');
    assert.equal(find('h4.text-muted').text(), 'Location 1');
    assert.equal(find('h5.text-muted').length, 3);
  });
});

test('navigating from a thing to it\'s lcoation', function(assert) {
  let thing = server.create('location').createThing({name: 'Thing 1'});
  server.createList('property', 3, {thingId: thing.id});

  visit('/thing/1');
  click('h4:contains(Location 1)');

  andThen(function() {
    assert.equal(currentURL(), '/location/1');
    assert.equal(find('.card').length, 1);
  });
});
