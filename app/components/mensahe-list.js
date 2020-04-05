import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Component.extend({
  store: service(),
  mensaheList: null,
  newestMensahe: true,
  newestClass: computed('newestMensahe', function(){
    if (this.get('newestMensahe')){
      return 'active';
    }
    else {
      return '';
    }
  }),
  popularClass: computed('newestMensahe', function(){
    if (this.get('newestMensahe')){
      return '';
    }
    else {
      return 'active';
    }
  }),
  dataSorting: ['submittedAt'],
  init() {
    this._super(...arguments);

    const list = this.get('store').findAll('mensahe');
    this.set('mensaheList', list);
  },
  popularMensaheList: sort('mensaheList', function(a, b){
    if (a.upvotes < b.upvotes) {
      return 1;
    } else if (a.upvotes > b.upvotes) {
      return -1;
    }

    return 0;
  }),
  newestMensaheList: sort('mensaheList', function(a, b){
    if (a.submittedAt < b.submittedAt) {
      return 1;
    } else if (a.submittedAt > b.submittedAt) {
      return -1;
    }

    return 0;
  }),
  actions: {
    listNewest() {
      this.set('newestMensahe', true);
    },
    listPopular() {
      this.set('newestMensahe', false);
    },
    upvote(record) {
      this.get('store').findRecord('mensahe', record.get('id')).then(function(mensahe) {
        mensahe.set('upvotes', mensahe.get('upvotes') + 1);
        mensahe.save();
      });
    }
  }
});
