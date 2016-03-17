import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('empty-state', 'Integration | Component | empty state', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{empty-state}}`);

  assert.ok(this.$().text().trim().indexOf('Expecting to see something here?') === 0);

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#empty-state}}
      template block text
    {{/empty-state}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text'));
});
