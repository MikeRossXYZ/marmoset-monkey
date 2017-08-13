
function load_score (elm, url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            elm.innerHTML = xhr.responseXML.getElementsByTagName("table")[0].getElementsByTagName("tr")[1].getElementsByTagName("td")[3].innerHTML;
        }
    }
    
    // TODO: figure out why I need to use a full URL and can't just pass in the provided path from root
    xhr.open("GET", "https://marmoset.student.cs.uwaterloo.ca/view/project.jsp?projectPK="+url, true);
    xhr.responseType = "document";
    xhr.send();
}

function modifyAssignmentsPage()
{
    var assignmentRows = document.querySelectorAll(".wrapper table tbody tr");
    for (i=1; i<assignmentRows.length; i++) // start after header 
    {
        var cols = assignmentRows[i].children;
        load_score(cols[1], cols[1].getElementsByTagName("a")[0].getAttribute("href").substring("/view/project.jsp?projectPK=".length));
    }
}

modifyAssignmentsPage();
