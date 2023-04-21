const test = require("../lib/testing.js");
const cricket = require("../src/inning-summary.js");
const displayTitle = test.displayTitle;
const displaySummary = test.displaySummary;
const inningSummary = cricket.inningSummary; 
const assert = test.assert;
const assertObject = test.assertObject;

const inningSummaryTest = function() {
  displayTitle("inningSummary()");
  data = [
    [ 1, 0, 2, 6, 4, 0 ],
    [ 'W', 2, 0, 3, 1, 'WD' ],
    [ 'NB', 1, 2, 3, 4, 6 ]
  ];

  const expected = {
    Four: 2,
    Sixes: 2,
    Wicket: 1,
    WideBall: 1,
    NoBall: 1,
    ExtraRuns: 2,
    TotalRuns: 37
  };
  const actual = inningSummary(data);

  assertObject(expected, actual, "score should be same as expected.")
};

inningSummaryTest();
displaySummary();
