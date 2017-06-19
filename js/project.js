
let projectTableRows = document.querySelectorAll(".wrapper table tbody tr");

// row 0 is the header, so start loop from 1
for (var i=1; i < projectTableRows.length; i++)
{
    var cols = projectTableRows[i].children;
    
    // Column 3 is release tests in some questions
    // Need to modify this to search for the string in header column to handle cases
    //    when public tests are present
     
    var txtScore = cols[3].innerHTML;
    if (txtScore.split("/").length != 2)
    {
        cols[3].style.background = "grey";
        continue;
    }
    var marksAwarded = parseFloat(txtScore.split("/")[0].trim());
    var marksTotal = parseFloat(txtScore.split("/")[1].trim());
    
    // Instead of hard coding the background with JS, a CSS class should be used 

    if (marksAwarded / marksTotal == 1)
    {
        cols[3].style.background = "green";
    }
    else if (marksAwarded / marksTotal >= 0.80)
    {
        cols[3].style.background = "yellow";
    }
    else if (marksAwarded / marksTotal >= 0.50)
    {
        cols[3].style.background = "orange";
    }
    else
    {
        cols[3].style.background = "red";
    }
}
