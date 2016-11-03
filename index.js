/* jshint node: true, esnext: false */
/* jscs: disable */
'use strict';

module.exports = {
  name: 'ember-cli-string-helpers',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
  }
};
/* jscs: enable */
