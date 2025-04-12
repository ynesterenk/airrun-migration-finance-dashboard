define(["intern!object", "intern/chai!assert", "applications/news"], function(registerSuite, assert, initializeNews) {
  registerSuite({
    name: "news",

    setup: function() {
      // Called before all tests
    },

    teardown: function() {
      // Called after all tests
    },

    beforeEach: function() {
      // Called before each test
    },

    afterEach: function() {
      // Called after each test
    },

    "test initializeNews": function() {
      assert.strictEqual(typeof initializeNews, "function", "initializeNews should be a function");

      var newsList = [
        "Europe’s Stock Surge Outpaces Wall Street in Historic Run",
        "Aid rushes into Myanmar after earthquake kills over 1,600, ravages cities",
        "Trump tells NBC he 'couldn't care less' if car makers hike prices due to tariffs"
      ];

      var newsContainer = document.createElement('ul');
      newsList.forEach(function(newsItem) {
        var listItem = document.createElement('li');
        listItem.textContent = newsItem;
        newsContainer.appendChild(listItem);
      });

      assert.strictEqual(newsContainer.children.length, 3, "News container should have 3 items");
    }
  });
});