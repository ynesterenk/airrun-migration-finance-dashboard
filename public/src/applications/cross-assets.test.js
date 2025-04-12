define(["intern!object", "intern/chai!assert", "dojo/_base/declare", "dojo/_base/lang"], function (registerSuite, assert, declare, lang) {
  var CrossAssets = declare(null, {
    constructor: function () {
      this.data = [
        { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
        { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
        { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
        { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
        { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
        { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
      ];
    },
    getData: function () {
      return this.data;
    }
  });
  registerSuite({
    name: "cross-assets",
    "it should return data correctly": function () {
      var ca = new CrossAssets();
      var data = ca.getData();
      assert.strictEqual(data.length, 6);
      assert.strictEqual(data[0].ric, ".NDX");
      assert.strictEqual(data[1].name, "FTSE 100 INDEX");
      assert.strictEqual(data[2].last, 16993.44);
      assert.strictEqual(data[3].change, "+1.08%");
    }
  });
});