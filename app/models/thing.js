import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  status: DS.attr(),
  reason: DS.attr(),
  location: DS.belongsTo('location'),
  properties: DS.hasMany('property'),
});
