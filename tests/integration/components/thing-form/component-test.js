import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thing-form', 'Integration | Component | thing form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{thing-form}}`);

  assert.equal(this.$('label').text().trim(), 'Name:');
  assert.equal(this.$('.btn.btn-success').text().trim(), 'Save');
  assert.equal(this.$('.btn.btn-danger').text().trim(), 'Cancel');
});

test('it sets input correctly', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  const thing = { name: 'myThing' };
  this.set('model', thing);

  this.render(hbs`{{thing-form}}`);

  assert.equal(this.$('input').text().trim(), thing.name);
});
