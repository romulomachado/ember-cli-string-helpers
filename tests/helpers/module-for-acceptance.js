import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { resolve } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach(...arguments);
      }
    },

    afterEach() {
      let afterEach = options.afterEach && options.afterEach(...arguments);
      return resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
