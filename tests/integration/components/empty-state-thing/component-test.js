import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('empty-state-thing', 'Integration | Component | empty state thing', {
  integration: true
});

test('it should render correct text when positional param title not set', function(assert) {
  this.render(hbs`{{empty-state-thing}}`);

  assert.equal(this.$('.empty-thing-title').text().trim(), 'Expecting to see something here?');

});

test('it should render correct text when positional param title is set', function(assert) {
  this.render(hbs`{{empty-state-thing "My Empty State Thing Title"}}`);

  assert.equal(this.$('.empty-thing-title').text().trim(), "My Empty State Thing Title");
});
