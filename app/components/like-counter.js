import Ember from 'ember';

export default Ember.Component.extend({
  score: 0,

  good(score) {
    this.set(`score`, this.score + 1);
  },

  bad(score) {
    this.set(`score`, this.score - 1);
  },
});
