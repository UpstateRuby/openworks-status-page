import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('location-form', 'Integration | Component | location form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{location-form}}`);

  assert.ok(this.$().text().trim().indexOf('Name') === 0);

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#location-form}}
      template block text
    {{/location-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text'));
});
