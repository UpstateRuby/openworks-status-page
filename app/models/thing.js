import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  status: DS.attr(),
  reason: DS.attr(),
  location: DS.belongsTo('location'),
  properties: DS.hasMany('property'),
  propertiesLastUpdated: function () {
    // TODO Implement finding the last time a
    // property was updated.
    return new Date(Date.now() - 30000);
  }.property('properties.@each.createdAt')
});
