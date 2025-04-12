define(["intern!object", "intern/chai!assert", "dojo/_base/declare", "dojo/_base/lang"], function (registerSuite, assert, declare, lang) {
  var News = declare(null, {
    constructor: function () {
      this.news = [
        "Europe’s Stock Surge Outpaces Wall Street in Historic Run",
        "Aid rushes into Myanmar after earthquake kills over 1,600, ravages cities",
        "Trump tells NBC he 'couldn't care less' if car makers hike prices due to tariffs"
      ];
    },
    getNews: function () {
      return this.news;
    }
  });
  registerSuite({
    name: "news",
    "it should return news correctly": function () {
      var news = new News();
      var data = news.getNews();
      assert.strictEqual(data.length, 3);
      assert.strictEqual(data[0], "Europe’s Stock Surge Outpaces Wall Street in Historic Run");
      assert.strictEqual(data[1], "Aid rushes into Myanmar after earthquake kills over 1,600, ravages cities");
      assert.strictEqual(data[2], "Trump tells NBC he 'couldn't care less' if car makers hike prices due to tariffs");
    }
  });
});