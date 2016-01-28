// A function to set a cookie

// First, we create a function that stores the name of the visitor in a cookie variable:

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

// create a function that returns the value of a specified cookie
// Take the cookiename as parameter (cname).
//Create a variable (name) with the text to search for (cname + "=").
// Loop through the ca array (i=0;i<ca.length;i++), and read out each value c=ca[i]).
// If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length,c.length).
  // If the cookie is not found, return "".
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to check if a cookie has been set
//Last, we create the function that checks if a cookie is set.

//If the cookie is set it will display a greeting.

//If the cookie is not set, it will display a prompt box, 
//asking for the name of the user, and stores the username cookie 
// for 365 days, by calling the setCookie function:

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome back " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

// Updating the h3 on the game page if the player is a returning user
$(document).ready(function() {
  // read the cookie
  var user=getCookie("username");
  var cookieVal=getCookie(user);
  // if the cookie exists, update the heading
  if (user != "" && user != null) {
    $('h3').text('Welcome Back ' + user + '.' + ' Enjoy the game!');
  }
});

// Cookie Pop Up only takes place once. The next time they come back, the script will read the cookie, 
// identify them as a repeat visitor, and NOT open the window again.
var expDays = 1; // number of days the cookie should last

var page = "still-slider.html";
var windowprops = "width=300,height=200,location=no,toolbar=no,menubar=no,scrollbars=no,resizable=yes";

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt(){
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
   }
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function checkCount() {
var count = GetCookie('count');
if (count == null) {
count=1;
SetCookie('count', count, exp);

window.open(page, "", windowprops);

}
else {
count++;
SetCookie('count', count, exp);
   }
}
//  End -->*/