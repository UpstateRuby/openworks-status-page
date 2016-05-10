import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('empty-state-thing', 'Integration | Component | empty state thing', {
  integration: true
});

test('it should render correct text when title not set', function(assert) {
  this.render(hbs`{{empty-state-thing}}`);

  assert.equal(this.$('.empty-thing-title').text().trim(), 'Expecting to see something here?');

});

test('it should render correct text when title is not set', function(assert) {
  this.render(hbs`{{empty-state-thing title}}`);

  assert.equal(this.$('.empty-thing-title').text().trim(), 'Expecting to see something here?');
});

test('it should render correct text when title is set', function(assert) {
  let title = "My Empty State Thing Title";
  this.set('title', title);
  this.render(hbs`{{empty-state-thing title=title}}`);

  assert.equal(this.$('.empty-thing-title').text().trim(), title);
});
