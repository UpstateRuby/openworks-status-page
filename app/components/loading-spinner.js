import Ember from 'ember';
import { animate } from "liquid-fire";

export default Ember.Component.extend({
  animation: function() {
    animate(
      this.$(),
      {rotateZ: 360},
      {duration: 1000, easing: "linear", loop:true}
    );
  }.on('didInsertElement')
});
