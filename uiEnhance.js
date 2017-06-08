document.body.style.margin = "0"

document.querySelector(".header").style.margin = "0";
document.querySelector(".header").style.padding = "10px";
document.querySelector(".header").style.border = "0";
document.querySelector(".header").style.background = "#000";
document.querySelector(".header p").style.color = "#FFF";
document.querySelector(".header p").style.fontFamily = "Impact,DroidSans,sans-serif";
document.querySelector(".header p").style.fontWeight = "normal";

document.querySelector("div.breadcrumb").style.margin = "0";
document.querySelector("div.breadcrumb").style.background = "#FFD54F";
document.querySelector("div.breadcrumb").style.fontFamily = "Georgia,DroidSerif";
document.querySelector("div.breadcrumb").style.color = "#000";
var linksInBreadcrumbs = document.querySelectorAll("div.breadcrumb p a:link");
for (var i=0; linksInBreadcrumbs.length; ++i)
{
    linksInBreadcrumbs[i].style.color = "#000";
}

document.querySelector(".logout").style.background = "#E4B429"
document.querySelector(".logout a:link").style.color = "#000"