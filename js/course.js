
MARMOFIRE.MARKS.loadScores = function(name, elm, url) {
  elm.innerHTML = 'loading...';

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parse the header of the table for public test score or release test score column.
      // There are some table with just a public test score and others with both.
      // Release test score is always to the right of the public test score column,
      // so don't short circuit and iterate the columns from left to right.
      const headerRowChildNodes = xhr.responseXML.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].children
      let scoreColIdx = -1;
      for (i = 0; i < headerRowChildNodes.length; i++) {
        if (headerRowChildNodes[i].innerHTML.indexOf('release tests') >= 0 || headerRowChildNodes[i].innerHTML.indexOf('public') >= 0) {
          scoreColIdx = i;
        }
      }

      // If no score column was found, then short circuit
      if (scoreColIdx == -1 || xhr.responseXML.getElementsByTagName('tbody')[0].children.length < 2) {
        elm.innerHTML = '?';
        return
      }
      
      const mostRecentScoreNode = xhr.responseXML.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[scoreColIdx];
      // If the most recent score node is a complex tree and not just text, then short circuit
      if (mostRecentScoreNode.childNodes.length > 1) {
        elm.innerHTML = '?';
        return
      }

      const mostRecentScoreContent = mostRecentScoreNode.innerHTML;
      const contentComponentsStripped = mostRecentScoreContent.replace(/\s+/g, '').split('/');
      if (contentComponentsStripped.length !== 2) {
        elm.innerHTML = '?';
        return
      }
      const newContentForCell = contentComponentsStripped[0] + ' / ' + contentComponentsStripped[1];
      // Remove existing content in the cell and replace with the new generated content
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      markElement = document.createTextNode(newContentForCell);
      elm.appendChild(markElement);
      MARMOFIRE.UI.colourScoreCell(elm);
    }
  };

  xhr.open('GET', 'https://' + window.location.hostname + url, true);
  xhr.responseType = 'document';
  xhr.send();
};

MARMOFIRE.UI.modifyAssignmentsPage = function() {
  const assignmentRows = document.querySelectorAll('.wrapper table tbody tr');
  assignmentRows[0].children[1].innerHTML = 'most recent<br/>grade';

  for (i=1; i<assignmentRows.length; i++) {// start after header
    const cols = assignmentRows[i].children;
    // Change link of project name
    const link = cols[1].getElementsByTagName('a')[0].getAttribute('href');
    cols[0].getElementsByTagName('a')[0].setAttribute('href', link);
    MARMOFIRE.MARKS.loadScores(cols[0].children[0].innerHTML, cols[1], link);
  }
};

MARMOFIRE.UI.modifyAssignmentsPage();
