import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return Ember.RSVP.hash({
      announcements: this.store.query('announcement', {orderBy: 'priority', endAt: 3})
    });
  }
});
