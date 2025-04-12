define(["intern!object", "intern/chai!assert", "applications/history-chart"], function(registerSuite, assert, initializeHistoryChart) {
  registerSuite({
    name: "history-chart",

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

    "test initializeHistoryChart": function() {
      assert.strictEqual(typeof initializeHistoryChart, "function", "initializeHistoryChart should be a function");

      const theme = {
        chart: {
          fill: "rgb(16,24,40)",
          stroke: { color: "rgb(16,24,40)", width: 0 }
        },
        plotarea: {
          fill: "rgb(16,24,40)",
          stroke: null
        }
      };

      const priceValues = [144.47, 149.43, 140.14, 140.11, 135.91, 133.23, 131.76, 136.24, 133.57, 137.71];
      const priceHistory = priceValues.map((price, index) => ({
        x: index,
        y: price
      }));

      const historyChart = initializeHistoryChart("historicalChart", theme, priceHistory);

      assert.strictEqual(historyChart.series.length, 1, "Chart should have 1 series");
    }
  });
});