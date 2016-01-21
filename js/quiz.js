// Create a quiz in which player chooses a radio button and then hits submit to get back a correct or wrong response
// player's right and wrong answers are recorded an then given a totalCorrect at the end of each game
// perhaps even add points for correct answers?

// quiz_status: tells the player which question he/she is on out of how many totoal questions there are
// quiz: where the test questions will actually be rendered

var position = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, correct = 0, percentCorrect; //keeps track of where the player is in the game. Which question is he/she on.
var questions = [
  ["Name of this movie?", "Jewel of The Nile", "The Pink Panther", "The Red Shoes", "Fantasia", "C"],
  ["Name of the actress?", "Moira Shearer", "Maureen O'Hara", "Rosalind Russell", "Katherine Hepburn", "A"],
  ["The director?", "Elia Kazan,", "Ernst Lubitsch", "Preston Sturges", "Michael Powell and Emeric Pressburger", "D"],
  ["Year it was made?", "1940", "1948", "1952", "1939", "B"],
  ["What is the name of this movie?", "Raiders of The Lost Ark", "101 Dalmatians", "Persona", "Blade Runner", "D"],
  ["What is the name of the actress?", "Jennifer Aniston", "Marilyn Monroe", "Daryl Hannah", "Margot Robbie", "C"],
  ["Who directed this film?", "Ridley Scott", "Woodie Allen", "Robert Altman", "Francis Ford Coppola", "A"],
  ["What year was it made?", "1992", "1982", "1976", "1989", "B"],
  ["Who wrote the original novel?", "Douglas Adams", "Philip K. Dick", "Orson Scott Card", "Robert Heinlen", "B"],
  ["Who was the screenwriter?", "Quentin Tarantino", "Aline Brosh McKenna", "David Webb Peoples", "James Cameron", "C"],
  ["Did you know that this movie contains unused footage from another acclaimed movie of a similar genre? Which movie is it?", "Stanley Kubrick's 'The Shining'", "Terry Gilliam's 'Brazil'", "Jean Luc Godard's 'Alphaville'", "Stanley Kubrick's '2001 Space Odyssey'", "A"],
  ["Some computer monitors in vehicles and sounds throughout the movie came from another movie of a similar genre. Which movie is it?", "Andrei Tarkovsky's 'Stalker'", "Lizzy Borden's 'Born in Flames'","John Sayles' 'Brother From Another Planet'", "Ridley Scott's 'Alien'", "D"],
  ["Do you know the name of this movie?", "Snow White", "Princess Bride", "The Legend of Sleepy Hollow", "Sleepy Hollow", "D"],
  ["Writer of the original story?", "Washington Irving", "Leo Tolstoy", "Albert Camus", "Herman Melville", "A"],
  ["Name of the female protagonist?", "Priscilla", "Mary", "Katrina", "Barbara", "C"],
  ["Who played the headless horseman?", "Christopher Walken", "Robert DeNiro", "Harvey Keitel", "Christian Bale", "A"],
  ["What was the name of the main character?", "Billy Budd", "Brom Bones", "Abraham Van Brunt", "Ichabod Crane", "D"],
  ["What was his actual occupation?", "Shoe Maker", "Schoolmaster", "Blacksmith", "Detective", "B"],
  ["Name of this movie?", "Gigi", "Gaslight", "The Manchurian Candidate", "Psycho", "D"],
  ["Who wrote the musical score?", "Bernard Hermann", "Marilyn Monroe", "Daryl Hannah", "Margot Robbie", "A"],
  ["The director?","Robert Redford", "Alfred Hitchcock", "Orson Welles", "Billy Wilder", "B"],
  ["Who wrote the original novel?", "Margaret Mitchell", "Robert Bloch", "Harper Lee", "E. B. White", "B"],
  ["Who played the first murder victim in the movie?", "Janet Leigh", "Kim Novak", "Vivien Leigh", "Betty Grable", "A"],
  ["How long did it take to film this movie?", "6 months", "1 week", "30 days", "3 months", "C"],
  ["Name of this movie?", "The Night of the Hunter"],
  ["Who wrote the original novel?", "Davis Grubb"],
  ["Who was the cinematographer?", "Stanley Cortez"],
  ["The director?","Charles Laughton"],
  ["Who played the lead male role?", "Robert Mitchum"],
  ["Who played the female lead?", "Shelley Winters"],
  ["Name two other actors who had been considered for the male lead before final casting took place.", "John Carradine and Laurence Olivier"],
  ["Who was the screenwriter?", "James Agee"],
  ["Which actor and actress were initially considered for the two adult leads?", "Gary Cooper and Betty Grable"],
  ["What was the name of the male 'antagonist' in the movie?", "Harry Powell"]
];
// returns the document.getElementById() reference to scripts whenever needed. Returns the object reference for the id string.
function _(x) {
  return document.getElementById(x);
}
// where the first quesiton from the multi-dimensional array of questions, choices, and correct answers comes from. It will actually make the question and choices visible to the player. It will also show the submit button. When the player clicks on the submit button, he/she will be directed to the next question.
function renderQuestion() {
  quiz = _("quiz");
  if(position >= questions.length) {
    percentCorrect = Math.round((correct / questions.length) * 100);
    /*percentCorrect.innerHTML = "<h2>You got " + percentCorrect + "of " + questions.length + "questions correct.</h2>";*/
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct and your score is " + percentCorrect + "%.</h2>";
    _("quiz_status").innerHTML = "Quiz Completed.";
    // delay replacement of current page with new one so that player has enough time to read his/her score.
    /*setTimeout(function() {
      document.location.replace("slider-2.html");
    }, 1500);*/
    
    position = 0;
    correct = 0;
    // so that body execution of the function does not stop.
    return false;
  }
  
  // questions.length refers to the total number of questions that are listed above. I will be placing all 
  // 16 questions I have created for all the movie slider.html pages here. That way I can keep a tally of 
  // the players' totals in toto as opposed to simply by page. position+1 refers to question 0 + 1 which 
  // means the first question. So when the page first loads, question 1 of 4 will appear. 
  // So this lets the player know which question they are on and what the total number of questions is.
  _("quiz_status").innerHTML = "Question " + (position + 1) + " of " + questions.length;
  question = questions[position][0];
  chA = questions[position][1];
  chB = questions[position][2];
  chC = questions[position][3];
  chD = questions[position][4];
  quiz.innerHTML = '<form>';
  quiz.innerHTML += '<fieldset>';
  quiz.innerHTML = '<legend>'+question+'</legend><br>';
  //rendering the question to the user.
  // rendering the radio button answer choices. That way don't have to actually have this on the html page. 
  // Using += after the first .innerHTML because appending to it. If I didn't use +=, then  only the last line would append.
  // .innerHTML property returns the HTML content (innerHTML) of an element. It is used with teh document.getElementById(), TagName(), etc.
  quiz.innerHTML += "<input type='radio' name='choices' value='A'><label for='choices'>"+chA+"</label><br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'><label for='choices'>"+chB+"</label><br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'><label for='choices'>"+chC+"</label><br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='D'><label for='choices'>"+chD+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  quiz.innerHTML += '</fieldset';
  quiz.innerHTML += '</form>';
  }
  // Need code that will look through name group of choices variablethat was initialized earlier to see which one the player selected.
  // document.getElementsByName() results in an array.
  // 
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if(choices[i].checked) {// for loop runs over the choices array, and this way one can see what the player's choice is.
          choice = choices[i].value; // The choice will be put into this choice variable here. That way it can be evaluated outside of the for loop.
        }                            
    }
    // Evaluate whether the choice the player selected is the correct one or not.
    if(choice === questions[position][5]) {
        correct++;
    }

    position++;// this changes the position of the question the player is on.
    renderQuestion();
}

window.addEventListener("load", renderQuestion, false);