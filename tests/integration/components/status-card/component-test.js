import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('status-card', 'Integration | Component | status card', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{status-card}}`);

  assert.ok(this.$().text().trim().indexOf('No properties are associated with') === -1);
  assert.ok(this.$().text().trim().indexOf('Add a Property') === -1);

  // Template block usage:
  this.render(hbs`
    {{#status-card}}
      template block text
    {{/status-card}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') === -1);
});
