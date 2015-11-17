import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr(),
  unit: DS.attr(),
  precision: DS.attr(),
  thing: DS.belongsTo('thing')
});
