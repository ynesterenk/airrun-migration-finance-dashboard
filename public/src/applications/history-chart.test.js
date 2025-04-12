define(["intern!object", "intern/chai!assert", "dojo/_base/declare", "dojo/_base/lang"], function (registerSuite, assert, declare, lang) {
  var HistoryChart = declare(null, {
    constructor: function () {
      this.priceHistory = [144.47, 149.43, 140.14, 140.11, 135.91, 133.23, 131.76, 136.24, 133.57, 137.71];
    },
    getPriceHistory: function () {
      return this.priceHistory;
    }
  });
  registerSuite({
    name: "history-chart",
    "it should return price history correctly": function () {
      var hc = new HistoryChart();
      var data = hc.getPriceHistory();
      assert.strictEqual(data.length, 10);
      assert.strictEqual(data[0], 144.47);
      assert.strictEqual(data[1], 149.43);
      assert.strictEqual(data[2], 140.14);
      assert.strictEqual(data[3], 140.11);
    }
  });
});