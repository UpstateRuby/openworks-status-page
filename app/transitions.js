import Ember from "ember";

export default function(){
  let duration = 1000;
  this.setDefault({duration: duration });
  if (Ember.testing) {
    this.setDefault({duration: 10 });
  }

  // Routes

  this.transition(
    this.fromRoute('locations'),
    this.toRoute('location'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('location'),
    this.toRoute('thing'),
    this.use('explode', {
      matchBy: 'data-thing-id',
      use: ['text-fly-to'],
    }, {
      use: ['toLeft']
    })
  );

  this.transition(
    this.fromRoute('thing'),
    this.toRoute('location'),
    this.use('explode', {
      matchBy: 'data-thing-id',
      use: ['text-fly-to'],
    }, {
      use: ['toRight']
    })
  );
  // Components
  // status-card
  this.transition(
    this.hasClass('adding-property'),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp')
  );

}
