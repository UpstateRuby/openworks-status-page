import Ember from "ember";

export default function(){
  this.setDefault({duration: 400 });
  if (Ember.testing) {
    this.setDefault({duration: 10 });
  }

  // Routes

  this.transition(
    this.fromRoute('locations'),
    this.toRoute('location'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('location'),
    this.toRoute('locations'),
    this.use('toRight')
  );
  // Components
  // status-card
  this.transition(
    this.hasClass('adding-property'),
    this.toValue(true),
    this.use('fade'),
    this.reverse('toUp')
  );

}
