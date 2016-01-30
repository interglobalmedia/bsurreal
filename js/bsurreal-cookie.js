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
        alert("Welcome " + user);
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
// When user clicks on the image container, the <h3></h3> header disappears. Some people might find it annoying! Category remains
// because it is h4 and not h3.
$(document).ready(function() {
  var $cookieGreeting = $("#cookieGreeting");
  var $headingGreeting = $("h3");
    $("#slide-wrapper").on("click", function() {
      $(this).next($cookieGreeting).toggle();
  });
});