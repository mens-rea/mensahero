import Component from '@ember/component';
import { inject as service } from '@ember/service';
import moment from 'moment';
import { computed } from '@ember/object';

export default Component.extend({
  mensahe: '',
  store: service(),
  actions: {
    submitMensahe() {
      if(this.get('mensahe')!='') {
        let newCall = this.get('store').createRecord('mensahe',
        {
          body: this.get('mensahe'),
          upvotes: 0,
          submittedAt: moment()
        });
        newCall.save().then(() => {
          console.log('Successfully scheduled a new call.');
        }).catch((error) => {
          console.log('error ' + error);
        });
        alert("Your idea has been posted!");
        this.set('mensahe', '');
      }
    }
  }
});
