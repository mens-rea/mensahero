import Ember from 'ember';

 export default Ember.ArrayController.extend({
  sortedModel : function(){
    return this.get('model').sortBy('submittedAt').reverse();
  }
});