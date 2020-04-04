import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  body: attr(),
  upvotes: attr(),
  submittedAt: attr('number')
});
