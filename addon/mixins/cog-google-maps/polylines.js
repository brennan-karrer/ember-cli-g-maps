import Ember           from 'ember';
import childCollection from 'cog-google-maps/utils/cog-google-maps/child-collection';

const { isArray } = Ember;

export default Ember.Mixin.create(
  childCollection.create({
    model: 'polylines',

    namespace: 'polyline',

    validate: function validatePolylines() {
      const polylines = this.get('polylines');

      if(!polylines) { return; } // validation not necessary

      if(!isArray(polylines)) {
        throw new Error('cog-google-maps component expects polylines to be an Ember Array');
      }

      // End validation
      if(!polylines[0] || !polylines[0].path || !polylines[0].path[0]) { return; }

      // Reminder for well formed polygon paths
      if(!isArray(polylines[0].path[0])) {
        throw new Error('cog-google-maps polyline path property expects Array of Arrays: [[lat, lng]]');
      }
    }
  })
);
