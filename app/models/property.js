import DS from 'ember-data';
import Ember from 'ember';
import measurement from 'npm:js-quantities';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr(),
  unit: DS.attr(),
  precision: DS.attr(),
  thing: DS.belongsTo('thing'),
  formattedValue: function () {
    if (!this.get('preciseValue') || !this.get('unit')) {
      return this.get('preciseValue');
    }
    return measurement(this.get('preciseValue') + ' ' + this.get('unit')).format(this.get('value').toString().length);
  }.property('preciseValue', 'unit', 'precision'),
  preciseValue: function () {
    if (this.get('precision') === undefined) {
      return this.get('value');
    }
    return (this.get('value') / Math.pow(10, this.get('precision'))).toFixed(this.get('precision'));
  }.property('value', 'precision'),
  displayUnit: function () {
    let unit = this.get('unit') || '';
    unit = unit.replace('deg', '&deg;');
    unit = unit.replace('pct', '%');
    return Ember.String.htmlSafe(unit);
  }.property('unit')
});
