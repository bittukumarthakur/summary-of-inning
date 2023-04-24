const isNotPresent = function(table, character) {
  return !(character in table);
};

const updateFrequencyTable = function(table, character) {
  if(isNotPresent(table, character)) {
    table[character] = 0; 
  } 

  table[character] += 1;
  return table;
};

const frequencyTable = function(sentence) {
  const characters = sentence.join().split(",");
  return characters.reduce(updateFrequencyTable, {})
};

const extraRuns = function(summary) {
  return summary.WD + summary.NB;
};

const isNotExtraRun = function(run) {
  const extraRun = ["WD", "NB", "W"];
  return !extraRun.includes(run);
};

const toNumber = function(stringNumber) {
  return +stringNumber;
}

const calculateRuns = function(summary) {
  let total = 0;

  for(const run of Object.keys(summary)) {
    if(isNotExtraRun(run)) {
      total += toNumber(run) * summary[run];
    }
  }

  return total;
};

const summaryFormat = function(run) {
  const format = {
    1: {name: "one", run: 1, ball: 1},
    2: {name: "two", run: 2, ball: 1},
    4: {name: "four", run: 4, ball: 1},
    6: {name: "sixes", run: 6, ball: 1},
    W: {name: "wicket", run: 0, ball: 1},
    WD: {name: "wideball", run: 1, ball:0},
    NB: {name: "noball", run: 1, ball: 0},
  };
  const newFormat = {};
  newFormat[format[run].name] = {run: format[run].run, ball: format[run].ball};
  return newFormat;
};

const inningSummary = function(scores) {
  const scoreBoard = frequencyTable(scores);
  const extraRun = extraRuns(scoreBoard);
  const summary = {
    four: scoreBoard[4],
    sixes: scoreBoard[6],
    wicket: scoreBoard.W,
    wideball: scoreBoard.WD,
    noball: scoreBoard.NB,
    extraRuns: extraRun,
    totalRuns: calculateRuns(scoreBoard) +  extraRun
  };

  return summary;
};

exports.inningSummary = inningSummary;
