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
  const thing = { name: 'myThing' };

  this.set('model', thing);

  this.render(hbs`{{thing-form thing=model}}`);

  assert.equal(this.$('input').val().trim(), thing.name);
});