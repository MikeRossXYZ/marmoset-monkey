
MARMOFIRE.UI.projectPageManipulation = function() 
{
    var projectTableHeader = document.querySelectorAll(".wrapper table tbody tr th");

    var rowsToCalculatePercent = [];

    for (i=0; i < projectTableHeader.length; i++)
    {
        if (projectTableHeader[i].innerHTML.indexOf("release tests") >= 0 || projectTableHeader[i].innerHTML.indexOf("public tests") >= 0)
        {
            rowsToCalculatePercent.push(i);
        }
    }

    let projectTableRows = document.querySelectorAll(".wrapper table tbody tr");

    MARMOFIRE.UI.colourScores(projectTableRows, rowsToCalculatePercent);
}

MARMOFIRE.UI.projectPageManipulation();