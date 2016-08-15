import Ember from 'ember';

export default Ember.Component.extend({
  newAnnouncement: false,
  actions: {
    announcementShowForm(){
      this.set('newAnnouncement', true);
      console.log(this.newAnnouncement);
    },
    save1() {
      var params = {
        body: this.get('body') ? this.get('body') : '',
        priority: this.get('priority') ? parseInt(this.get('priority')) : 10,
      };
      this.sendAction('save2', params);
      this.set('newAnnouncement', false);
    }
  }
});
