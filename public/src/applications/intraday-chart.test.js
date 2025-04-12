define(["intern!object", "intern/chai!assert", "dojo/_base/declare", "dojo/_base/lang"], function (registerSuite, assert, declare, lang) {
  var IntradayChart = declare(null, {
    constructor: function () {
      this.intradayValues = [
        { date: "2025-03-28T09:30:00-04:00", price: 111.66500091552734 },
        { date: "2025-03-28T09:40:00-04:00", price: 111.981201171875 },
        { date: "2025-03-28T09:50:00-04:00", price: 111.6500015258789 },
        { date: "2025-03-28T10:00:00-04:00", price: 111.2698974609375 }
      ];
    },
    getIntradayValues: function () {
      return this.intradayValues;
    }
  });
  registerSuite({
    name: "intraday-chart",
    "it should return intraday values correctly": function () {
      var ic = new IntradayChart();
      var data = ic.getIntradayValues();
      assert.strictEqual(data.length, 4);
      assert.strictEqual(data[0].price, 111.66500091552734);
      assert.strictEqual(data[1].date, "2025-03-28T09:40:00-04:00");
      assert.strictEqual(data[2].price, 111.6500015258789);
      assert.strictEqual(data[3].date, "2025-03-28T10:00:00-04:00");
    }
  });
});