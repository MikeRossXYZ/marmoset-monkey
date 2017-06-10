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

document.body.style.margin = "0"
document.body.style.fontFamily = "Georgia,Droid Serif";

document.querySelector(".header").style.margin = "0";
document.querySelector(".header").style.padding = "10px 30px";
document.querySelector(".header").style.border = "0";
document.querySelector(".header").style.background = "#000";
document.querySelector(".header p").style.color = "#FFF";
document.querySelector(".header p").style.fontFamily = "Impact,DroidSans,sans-serif";
document.querySelector(".header p").style.fontWeight = "normal";

document.querySelector(".breadcrumb").style.margin = "0";
document.querySelector(".breadcrumb").style.padding = "5px 30px";
document.querySelector(".breadcrumb").style.background = "#FFD54F";
document.querySelector(".breadcrumb").style.color = "#000";

document.querySelector("div.logout").style.backgroundColor = "#E4B429";
document.querySelector("div.logout").style.margins = "0";

var linksInBreadcrumbs = document.querySelectorAll("div.breadcrumb p > a:link");
for (var i=0; linksInBreadcrumbs.length; ++i)
{
    linksInBreadcrumbs[i].style.color = "#000";
}



