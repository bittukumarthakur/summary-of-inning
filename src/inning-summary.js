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

const calculateRun = function(summary) {
  let total = 0;

  for(const run of Object.keys(summary)) {
    if(isNotExtraRun(run)) {
      total += toNumber(run) * summary[run];
    }
  }

  return total;
};

const inningSummary = function(scores) {
  const scoreBoard = frequencyTable(scores);
  const extraRun = extraRuns(scoreBoard);

  const summary = {};
  summary.Four = scoreBoard[4];
  summary.Sixes = scoreBoard[6];
  summary.Wicket = scoreBoard.W;
  summary.WideBall = scoreBoard.WD;
  summary.NoBall = scoreBoard.NB;
  summary.ExtraRuns = extraRun;
  summary.TotalRuns = calculateRun(scoreBoard) +  extraRun;
  return summary;
};

exports.inningSummary = inningSummary;
