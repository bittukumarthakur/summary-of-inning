const test = require("../lib/testing.js");
const cricket = require("../src/inning-summary.js");
const displayTitle = test.displayTitle;
const displaySummary = test.displaySummary;
const inningSummary = cricket.inningSummary; 
const assert = test.assert;

const inningSummaryTest = function() {
  displayTitle("inningSummary()");
  data = [
    [ 1, 0, 2, 6, 4, 0 ],
    [ 'W', 2, 0, 3, 1, 'WD' ],
    [ 'NB', 1, 2, 3, 4, 6 ]
  ];

  const summary = inningSummary(data);
  const four = summary.Four === 2;
  const sixes = summary.Sixes === 2;
  const wicket = summary.Wicket === 1;
  const wideBall = summary.WideBall === 1;
  const noBall = summary.NoBall === 1;
  const extraRuns = summary.ExtraRuns === 2;
  const totalRuns = summary.TotalRuns === 37;
  const result = four && sixes && wicket && wideBall && noBall && extraRuns && noBall && extraRuns && totalRuns;
  assert(result, true, "score should be matched.")

};

inningSummaryTest();
displaySummary();
