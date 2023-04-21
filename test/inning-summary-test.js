const test = require("../lib/testing.js");
const cricket = require("../src/inning-summary.js");
const displayTitle = test.displayTitle;
const displaySummary = test.displaySummary;
const inningSummary = cricket.inningSummary; 

const inningSummaryTest = function() {
  console.log(inningSummary());


};

inningSummaryTest();
