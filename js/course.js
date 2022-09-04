
MARMOFIRE.MARKS.loadScores = function(name, elm, url) {
  elm.innerHTML = 'loading...';

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let idx = -1;
      for (i = 0; i < xhr.responseXML.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].children.length; i++) {
        if (xhr.responseXML.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].children[i].innerHTML.indexOf('release tests') >= 0 || xhr.responseXML.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].children[i].innerHTML.indexOf('public') >= 0) {
          idx = i;
        }
      }
      if (idx == -1 || xhr.responseXML.getElementsByTagName('tbody')[0].children.length < 2) {
        elm.innerHTML = '?';
      } else {
        let txt = MARMOFIRE.UTIL.escapeHtml(xhr.responseXML.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[idx].innerHTML);
        txt = txt.replace(/\s+/g, '').split('/');
        txt = txt[0] + ' / ' + txt[1];
        console.log(txt);
        // Remove children
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        // Update element
        markElement = document.createTextNode(txt);
        console.log(markElement);
        elm.appendChild(markElement);
      }
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
