
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

// row 0 is the header, so start loop from 1
for (var i=1; i < projectTableRows.length; i++)
{
    var cols = projectTableRows[i].children;

    // Column 3 is release tests in some questions
    // Need to modify this to search for the string in header column to handle cases
    //    when public tests are present
    
    for (c=0; c<rowsToCalculatePercent.length; c++)
    {
        var col_idx = rowsToCalculatePercent[c];
    
        var txtScore = cols[col_idx].innerHTML;
        if (txtScore.split("/").length != 2)
        {
            cols[col_idx].className += "gray-bg";
            continue;
        }
        var marksAwarded = parseFloat(txtScore.split("/")[0].trim());
        var marksTotal = parseFloat(txtScore.split("/")[1].trim());
        
        // Instead of hard coding the background with JS, a CSS class should be used 
    
        if (marksAwarded / marksTotal == 1)
        {
            cols[col_idx].className += "green-bg";
        }
        else if (marksAwarded / marksTotal >= 0.80)
        {
            cols[col_idx].className += "yellow-bg";
        }
        else if (marksAwarded / marksTotal >= 0.50)
        {
            cols[col_idx].className += "orange-bg";
        }
        else
        {
            cols[col_idx].className += "red-bg";
        }
    }
        


}
