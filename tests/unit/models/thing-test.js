import { moduleForModel, test } from 'ember-qunit';

moduleForModel('thing', 'Unit | Model | thing', {
  // Specify the other units that are required for this test.
  needs: ['model:location', 'model:property']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
