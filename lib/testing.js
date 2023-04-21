let totalTest = 0; 
let passedTest = 0; 

const addSummary = function(result) {
  totalTest += 1;
  passedTest += result ? 1 : 0;
};

const displaySummary = function() {
  display("\n Summary: " + passedTest + " / " + totalTest + " Test passed.");
};

const display = function(text) {
  console.log(text);
};

const isEqual = function(expected, actual) {
  return expected === actual;
};

const mismatchMessage = function(expected, actual, result, message) {
  let errorMessage = message;
  errorMessage += "\n\t Expected: " + expected; 
  errorMessage += "\n\t Actual  : " + actual; 

  return result ? message : errorMessage;
};

const assertTest = function(expected, actual, message, equalityCheck) {
  const result = equalityCheck(expected, actual);
  const modifiedmessage = mismatchMessage(expected, actual, result, message);
  const symbol = result ? "\t✅ " : "\t❌ ";

  addSummary(result);
  return symbol + modifiedmessage;
};

const assert = function(expected, actual, message) {
  display(assertTest(expected, actual, message, isEqual));
};

const isArrayEqual = function(list1, list2) {
  if(list1.length !== list2.length) {
    return false;
  }

  for(let index = 0; index < list1.length; index++) {
    if(list1[index] !== list2[index]) {
      return false;
    }
  }

  return true;
}; 

const isNestedArrayEqual = function(list1, list2) {
  if(list1.length !== list2.length) {
    return false;
  }

  for(let index = 0; index < list1.length; index++) {
    const isSame = isArrayEqual(list1[index], list2[index]);

    if(!isSame) {
      return false;
    }
  }

  return true;
}

const assertArray = function(expected, actual, message) {
  display(assertTest(expected, actual, message, isArrayEqual));
};

const assertNestedArray = function(expected, actual, message) {
  display(assertTest(expected, actual, message, isNestedArrayEqual));
};

const displayTitle = function(title) {
  const start = "\033[";
  const end = "\033[0m";
  const style = "4;";
  const colourCode = "33m";
  const newLine = "\n";

  display(newLine + start + style + colourCode + title + end);
};

exports.assert = assert;
exports.displayTitle = displayTitle;
exports.displaySummary = displaySummary;
exports.assertArray = assertArray;
exports.isNestedArrayEqual = isNestedArrayEqual;
exports.assertNestedArray = assertNestedArray;
