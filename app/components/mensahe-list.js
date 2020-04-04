import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';

export default Component.extend({
  store: service(),
  mensaheList: null,
  dataSorting: ['submittedAt'],
  init() {
    this._super(...arguments);

    const list = this.get('store').findAll('mensahe');
    this.set('mensaheList', list);
    list.forEach((listItem) => {
      console.log("list " + listItem.get('body'));
    });
    console.log('inited');
  },
  sortedMensaheList: sort('mensaheList', function(a, b){
    if (a.submittedAt < b.submittedAt) {
      return 1;
    } else if (a.submittedAt > b.submittedAt) {
      return -1;
    }

    return 0;
  })
});
