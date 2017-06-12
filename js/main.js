var link = document.createElement( "link" );
link.type = "text/css";
link.rel = "stylesheet";
link.href = browser.extension.getURL("style/main.css"); //https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension
//document.getElementsByTagName("head")[0].appendChild(link);

// Wrap body content in wrapper
var wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper"); 
wrapper.setAttribute("style", "padding:0 30px;")
var bodyElements = document.querySelectorAll("body > :not(div)");
for (var i=0; i < bodyElements.length; ++i)
{
    wrapper.appendChild(bodyElements[i]);
}
document.querySelector("div.breadcrumb").parentNode.insertBefore(wrapper,document.querySelector("div.breadcrumb").nextSibling);

var linksInBreadcrumbs = document.querySelectorAll("div.breadcrumb p > a:link");
for (var i=0; linksInBreadcrumbs.length; ++i)
{
    linksInBreadcrumbs[i].style.color = "#000";
}

