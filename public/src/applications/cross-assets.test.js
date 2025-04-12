define([
  'intern!object',
  'intern/chai!assert',
  'dojo/dom-construct',
  'applications/cross-assets'
], function (registerSuite, assert, domConstruct, initializeCrossAssets) {
  var container;

  registerSuite({
    name: 'cross-assets',

    setup: function () {
      container = domConstruct.create('div', { id: 'testContainer' }, document.body);
    },

    teardown: function () {
      domConstruct.destroy(container);
      container = null;
    },

    'test initialization': function () {
      assert.strictEqual(typeof initializeCrossAssets, 'function', 'initializeCrossAssets should be a function');
      initializeCrossAssets();
      assert.strictEqual(document.getElementById('grid').tagName, 'DIV', 'Grid should be initialized');
    }
  });
});