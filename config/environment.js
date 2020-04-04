'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'mensahero',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyA_tRzaNadhiDH02NGnB_CflzlntLQMY_I",
      authDomain: "mensahero-a7ec8.firebaseapp.com",
      databaseURL: "https://mensahero-a7ec8.firebaseio.com/",
      projectId: "mensahero-a7ec8",
      storageBucket: "mensahero-a7ec8.appspot.com",
      messagingSenderId: "242821367301",
      appId: "1:242821367301:web:2f68e7684e3144d7f53e6c",
      measurementId: "G-BWRGX26QGJ"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
