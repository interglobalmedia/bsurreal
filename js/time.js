// Start code for greeting based on time
function timeGreeting() {
  'strict';
  datetoday = new Date();
  timenow = datetoday.getTime();
  datetoday.setTime(timenow);
  thehour = datetoday.getHours();
  if (thehour > 18) {
    display = "Evening";
  } else if (thehour > 12) {
    display = "Afternoon";
  } else {
    display = "Morning";
  }
  var $greeting = document.getElementById("greeting");
  greeting = document.getElementById("greeting").innerHTML;
  $greeting = $("#personalizedTimeGreeting h2").html("Good " + display + "!");
}
timeGreeting();

//  End -->
// Give the option of hiding time based greeting
$(document).ready(function () {
  var $personalizedTimeGreeting = $("#personalizedTimeGreeting");
  var $personalizedTimeHeading = $("#personalizedTimeGreeting h2");
  $("#personalizedTimeGreeting").show();
  $("#greeting").on("click", function () {
    $(this).next("#personalizedTimeGreeting").toggle();
  });
});

// Creating a stopwatch
startday = new Date();
clockStart = startday.getTime();
function initStopwatch() {
  'strict';
    var myTime = new Date();
    return((myTime.getTime() - clockStart)/1000);
}
function getSecs() {
    'strict';
    var tSecs = Math.round(initStopwatch());
    var iSecs = tSecs % 60;
    var iMins = Math.round((tSecs-30)/60);
    var sSecs = "" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins = "" + ((iMins > 9) ? iMins : "0" + iMins);
    document.getElementById("timespent").value = sMins+":"+sSecs;
    window.setTimeout('getSecs()',1000);
}
initStopwatch();
getSecs();

// Code for contenteditable/localStorage

var theContent = $('#edit');
 
$('#save').on('click', function(){
    var editedContent   = theContent.html();
    localStorage.newContent = editedContent;
});

if(localStorage.getItem('newContent')) {
    theContent.html(localStorage.getItem('newContent'));
}
