import { moduleForModel, test } from 'ember-qunit';

moduleForModel('property', 'Unit | Model | attribute', {
  // Specify the other units that are required for this test.
  needs: ['model:thing']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
