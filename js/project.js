
MARMOFIRE.UI.projectPageManipulation = function() {
  const projectTableHeader = document.querySelectorAll('.wrapper table tbody tr th');

  const rowsToCalculatePercent = [];

  for (i=0; i < projectTableHeader.length; i++) {
    if (projectTableHeader[i].innerHTML.indexOf('release tests') >= 0 || projectTableHeader[i].innerHTML.indexOf('public tests') >= 0) {
      rowsToCalculatePercent.push(i);
    }
  }

  const projectTableRows = document.querySelectorAll('.wrapper table tbody tr');

  MARMOFIRE.UI.colourScores(projectTableRows, rowsToCalculatePercent);
};

MARMOFIRE.UI.projectPageManipulation();
