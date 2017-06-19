
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


