import Ember from 'ember';

export default Ember.Component.extend({
  display: true,
  actions: {
    hide() {
      this.set('display', false);
    }
  }
});
