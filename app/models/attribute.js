import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr(),
  thing: DS.belongsTo('thing')
});
