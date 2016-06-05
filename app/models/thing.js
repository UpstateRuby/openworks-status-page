import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: {
    description: "A thing name",
    validators: [
      validator('presence', {
        presence: true,
        ignoreBlank: true,
        message: "{description} is required"
      }),
      validator('format', {
        allowBlank: true,
        regex: /^[A-Z]/,
        message: "{description} must begin with a capital letter"
      }),
      validator('length', {
        min: 3,
        message: "{description} must be at least {min} characters"
      }),
      validator('length', {
        max: 16,
        message: "{description} can't be more than {max} characters"
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  name: DS.attr(),
  status: DS.attr(),
  reason: DS.attr(),
  location: DS.belongsTo('location'),
  properties: DS.hasMany('property'),
  propertiesLastUpdated: function () {
    // TODO Implement finding the last time a
    // property was updated.
    return new Date(Date.now() - (Math.random() * (1000000 - 30000) + 30000));
  }.property('properties.@each.createdAt')
});
