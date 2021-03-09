// Create namespace
if (typeof MARMOFIRE == "undefined")
{
    var MARMOFIRE = { "course": "" };
    if (document.getElementsByClassName("breadcrumb")[0].getElementsByTagName('a').length > 0)
    {
        MARMOFIRE.course = document.getElementsByClassName("breadcrumb")[0].children[1].getElementsByTagName("a")[0].innerText;
    }
}

// Create namespace
MARMOFIRE["UI"] = MARMOFIRE["UI"] || {};
MARMOFIRE["MARKS"] = MARMOFIRE["MARKS"] || {};
MARMOFIRE["UTIL"] = MARMOFIRE["UTIL"] || {};

MARMOFIRE.UI.addWrapper = function()
{
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    var bodyElements = document.querySelectorAll("body > :not(div)");
    for (var i=0; i < bodyElements.length; ++i)
    {
        wrapper.appendChild(bodyElements[i]);
    }
    document.querySelector("div.breadcrumb").parentNode.insertBefore(wrapper,document.querySelector("div.breadcrumb").nextSibling);
}

MARMOFIRE.UI.addWrapper();

MARMOFIRE.UI.colourScores = function(rows, colsToColour)
{
    // row 0 is the header, so start loop from 1
    for (var i=1; i < rows.length; i++)
    {
        var cols = rows[i].children;

        for (c=0; c<colsToColour.length; c++)
        {
            var col_idx = colsToColour[c];

            MARMOFIRE.UI.colourScoreCell(cols[col_idx]);
        }
    }
}

MARMOFIRE.UI.colourScoreCell = function(cell)
{
    var txtScore = cell.innerHTML;
    if (txtScore.split("/").length != 2)
    {
        cell.className += "gray-bg";
        return;
    }
    var marksAwarded = parseFloat(txtScore.split("/")[0].trim());
    var marksTotal = parseFloat(txtScore.split("/")[1].trim());

    // Instead of hard coding the background with JS, a CSS class should be used

    if (marksTotal == 0 || marksAwarded / marksTotal == 1)
    {
        cell.className += "green-bg";
    }
    else if (marksAwarded / marksTotal >= 0.80)
    {
        cell.className += "yellow-bg";
    }
    else if (marksAwarded / marksTotal >= 0.50)
    {
        cell.className += "orange-bg";
    }
    else
    {
        cell.className += "red-bg";
    }
}

MARMOFIRE.UTIL.escapeHtml = function (str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
