// Showing and hiding #quiz_description which appears below image
$(document).ready(function() {
  var $quiz_description = $("#quiz_description");
  var $hint = $("#hint");
  // hide the #quiz_description that appears below the image
  $($quiz_description).hide();
  // toggle the component with id of #quiz_description by clicking on element with id of #hint
  $($hint).on("mouseenter", function() {
    $(this).next($quiz_description).slideDown(600);
  });
  $($hint).on("mouseleave", function() {
    $(this).next($quiz_description).slideUp(600);
  });
});
// Create a quiz in which player chooses a radio button and then hits submit to get back a correct or wrong response
// player's right and wrong answers are recorded an then given a totalCorrect at the end of each game
// perhaps even add points for correct answers?

// quiz_status: tells the player which question he/she is on out of how many totoal questions there are
// quiz: where the test questions will actually be rendered
var position = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, correct = 0, percentCorrect, category, categories, trivia; //keeps track of where the player is in the game. Which question is he/she on.
var questions = [
  ["Name of this movie?", "Jewel of The Nile", "The Pink Panther", "The Red Shoes", "Fantasia", "C", "Fantasy", "Did you know that the movie is responsible for this actress meeting and marrying her husband Ludovic Kennedy? He said that when he saw her in the movie, he immediately knew that she was going to be the girl he was going to marry. He actively pursued her, and married her two years later, in February 1950, at the Chapel Royal in London's Hampton Court Palace!"],
  ["Name of the actress?", "Moira Shearer", "Maureen O'Hara", "Rosalind Russell", "Katherine Hepburn", "A", "Fantasy", "This is Moira Shearer and Robert Helpmann in The Red Shoes! Did you know that Moira Shearer got badly sunburned and developed blisters on her back on her first day of shooting this movie? Later on she also wrenched her neck when told to leap from a window, and received a scratch that turned into an abscess. Shearer often found herself being suspended in a harness for up to eight hours while being buffetted by wind machines. What rough going!"],
  ["The director?", "Elia Kazan", "Ernst Lubitsch", "Preston Sturges", "Michael Powell and Emeric Pressburger", "D", "Fantasy", "This is from the title ballet sequence of The Red Shoes! Did you know that this sequence took 6 weeks to shoot and used over 120 paintings from famous German set designer Hein Heckroth?"],
  ["Year it was made?", "1940", "1948", "1952", "1939", "B", "Fantasy", "This is a famous ballet scene from The Red Shoes with Moira Shearer and Robert Helpmann! Did you know that in Hans Christian Anderson's original fairy tale, the ballerina had her feet hacked off by a woodsman to stop her from dancing?"],
  ["What is the name of this movie?", "Raiders of The Lost Ark", "101 Dalmatians", "Persona", "Blade Runner", "D", "Future Noir", "This is a famous scene from Blade Runner when Deckard (Harrison Ford) found Zhora, one of the replicants, at her place of work and is about to kill her. She knows that she is doomed and wouldn't have much time to live anyway, but she runs for her life nonetheless!"],
  ["What is the name of the actress?", "Jennifer Aniston", "Marilyn Monroe", "Daryl Hannah", "Margot Robbie", "C", "Future Noir", "This is from Blade Runner with Daryl Hannah! Did you know that she wasn't the first choice for the role of Pris? Debbie Harrie of Blondie fame was the first choice. Supposedly Daryl Hannah still has the blond wig she wore for the role."],
  ["Who directed this film?", "Ridley Scott", "Woodie Allen", "Robert Altman", "Francis Ford Coppola", "A", "Future Noir", "This is Joanna Cassidy, who plays the replicant Zhora in Blade Runner. Did you know that the snake in this picture was actually her pet, a Burmese python named Darling?"],
  ["What year was it made?", "1992", "1982", "1976", "1989", "B", "Future Noir", "I don't think this man needs an introduction, do you? Did you know that Harrison Ford stated that Blade Runner was one of the most frustrating films he ever made? He said that part of it was because the shoot(s) were so difficult, and the other because of changes made in post production."],
  ["Who wrote the original novel?", "Douglas Adams", "Philip K. Dick", "Orson Scott Card", "Robert Heinlen", "B", "Future Noir", "Did you know that Jane Feinberg, the casting director for Blade Runner, didn't want Sean Young to play the role of Rachel? She thought her too inexperienced. Ridley Scott, on the other hand, insisted she play the part. He liked her because she reminded him of Vivien Leigh."],
  ["Who was the screenwriter?", "Quentin Tarantino", "Aline Brosh McKenna", "David Webb Peoples", "James Cameron", "C", "Future Noir", "Did you know that Rutger Hauer was chosen for the role of Roy Batty simply because of his Teutonic, non-identifiable looks? But wasn't he SO great?"],
  ["Did you know that this movie contains unused footage from another acclaimed movie of a similar genre? Which movie is it?", "Stanley Kubrick's 'The Shining'", "Terry Gilliam's 'Brazil'", "Jean Luc Godard's 'Alphaville'", "Stanley Kubrick's '2001 Space Odyssey'", "A", "Future Noir", "Did you know that Blade Runner suffered at the box office because it opened the same time as E.T.? However, upon its re-release in 1992, it very quickly achieved cult status."],
  ["Some computer monitors in vehicles and sounds throughout the movie came from another movie of a similar genre. Which movie is it?", "Andrei Tarkovsky's 'Stalker'", "Lizzy Borden's 'Born in Flames'","John Sayles' 'Brother From Another Planet'", "Ridley Scott's 'Alien'", "D", "Future Noir", "Did you know that Phillip K. Dick's first choice for Rachel was Victoria Principal??? Where did that come from?"],
  ["Do you know the name of this movie?", "Snow White", "Princess Bride", "The Legend of Sleepy Hollow", "Sleepy Hollow", "D", "Fantasy", "Future Noir", "Did you know that Tim Burton's inspiration for Sleepy Hollow was the Gothic horror films of Mario Bava and Hammer Productions? Burton brought in Hammer veteran Michael Gough of Tv Show Batman out of retirement to play a small role, and Christopher Lee, veteran of both Hammer and Bava films, for a cameo."],
  ["Writer of the original story?", "Washington Irving", "Leo Tolstoy", "Albert Camus", "Herman Melville", "A", "Fantasy", "Did you know that there were 18 decapitations in the movie?"],
  ["Name of the female protagonist?", "Priscilla", "Mary", "Katrina", "Barbara", "C", "Fantasy", "Did you know that Johnny Depp initially found the idea of having Christina Ricci as a love interest in the movie somewhat odd, because he knew her since she was nine years old?"],
  ["Who played the headless horseman?", "Christopher Walken", "Robert DeNiro", "Harvey Keitel", "Christian Bale", "A", "Fantasy", "Did you know that Christopher Walken told Tim Burton that he couldn't ride a horse only AFTER he was cast in the role?"],
  ["What was the name of the main character?", "Billy Budd", "Brom Bones", "Abraham Van Brunt", "Ichabod Crane", "D", "Fantasy", "Johnny Depp did all of his own stunts for the final scene where he is dragged by the horse - he had bullet-proof clothing underneath his wardrobe."],
  ["What was his actual occupation?", "Shoe Maker", "Schoolmaster", "Blacksmith", "Detective", "B", "Fantasy", "Did you know that Johnny Depp adopted Golden Eye, the horse that played Gunpowder, Ichabod Crane's horse in the film Sleepy Hollow, when he heard it was going to be put down?"],
  ["Name of this movie?", "Gigi", "Gaslight", "The Manchurian Candidate", "Psycho", "D", "Mystery", "Did you know that Anthony Perkins, the actor in this image who played the male ANTAGONIST in Psycho, would still have wanted to play Norman Bates, even if it would peg him in similar roles for life!"],
  ["Who wrote the musical score?", "Bernard Hermann", "Marilyn Monroe", "Daryl Hannah", "Margot Robbie", "A", "Mystery", "Did you know that there are two split second frames of knife touching body during the murder scene in the shower?"],
  ["The director?","Robert Redford", "Alfred Hitchcock", "Orson Welles", "Billy Wilder", "B", "Mystery", "Did you know that Psycho only cost $800,000 to make and has earned more than US$40 million. Hitchcock used the crew from his TV series Alfred Hitchcock Presents(1955) to save time and money. In 1962 he exchanged the rights to the film and his TV series for a huge block of MCA's stock, becoming its third-largest stockholder."],
  ["Who wrote the original novel?", "Margaret Mitchell", "Robert Bloch", "Harper Lee", "E. B. White", "B", "Mystery", "Did you know that Anthony Perkins was paid $40,000 for the role of Norman Bates, which is exactly the amount of money Marion Crane embezzles?"],
  ["Who played the first murder victim in the movie?", "Janet Leigh", "Kim Novak", "Vivien Leigh", "Betty Grable", "A", "Mystery", "Did you know that The novel Psycho, written by Robert Bloch, was actually part of a series of pulp novels marketed in conjunction with the popular spooky radio show Inner Sanctum?"],
  ["How long did it take to film this movie?", "6 months", "1 week", "30 days", "3 months", "C", "Mystery", "Did you know that a shot of Marion removing her black bra before her shower was removed by the U.S. censors while the scene remained intact in the U.K?"],
  ["Name of this movie?", "The Killing", "Cape Fear", "The Big Heat", "The Night of the Hunter", "D", "Mystery", "Did you know that this movie was the movie director's only directorial effort? What an amazing work of art!"],
  ["Who wrote the original novel?", "Truman Capote", "Davis Grubb", "Raymond Chandler", "Josephine Tey", "B", "Mystery", "When the director was looking for a vocalist to sing composer Walter Schumann's lullaby in the movie, he recommended an acquaintance of his, Kitty White. He also suggested the director go hear her sing in a nightclub, and he did. She was subsequently hired."],
  ["Who was the cinematographer?", "Stanley Cortez", "Kazuo Miyagawa", "Sergei Urusevsky", "James Wong Howe", "A", "Mystery", "Did you know that the cinematographer for this movie thought that the only two directors he had worked with who really understood the concept of lighting were Orson Welles and Charles Laughton?"],
  ["The director?", "William Wyler", "George Stevens", "David Lean", "Charles Laughton", "D", "Mystery", "Charles Laughton liked working with the boy who played John, but not so much with the girl who played Pearl. Sometimes he would keep the camera going after a shoot was over, and he would capture her on camera 'reacting' to him. Some of these 'out-takes' were used as reaction shots to the Preacher."],
  ["Who played the lead male role?", "Sterling Hayden", "Robert Mitchum", "Gary Cooper", "Joseph Cotten", "B", "Mystery", "Did you know that Robert Mitchum considered Charles Laughton his favorite director to work with and 'The Night of The Hunter' his favorite movie he acted in?"],
  ["Who played the female lead?", "Eva Marie Saint", "Shelley Winters", "Thelma Ritter", "Diana Dors", "B", "Mystery", "Betty Grable was Laughton's first choice to play Willa, the role that eventually went to Shelley Winters. But Shelley Winters was brilliant in the role of Willa, wasn't she?"],
  ["Name two other actors who had been considered for the male lead before final casting took place.", "John Carradine and Laurence Olivier", "Paul Newman and Robert Redford", "Sal Mineo and James Dean", "Robert Wagner and Tony Curtis", "A", "Mystery", "Laurence Olivier had been very eager to play the role of The Preacher, and campaigned heavily to get the part, even though it had already been cast. Both the director and United Artists agreed that Olivier's name would not have brought in as much in ticket sales."],
  ["Who was the screenwriter?", "James Agee", "Mel Brooks", "John Huston", "Orson Welles", "A", "Mystery", "Fantasy", "Future Noir", "G", "In his biography, Robert Mitchum claimed that the director of 'The Night of The Hunter' found the screenwriter's so bad that he paid him off and sent him away, and then virtually rewrote the entire script himself, uncredited. That however, is not entirely true. Parts of the original script made it into the final cut of the movie. It is also not true that the screenwriter was fired. The director had him cut down the length of the script, because he found it too long."],
  ["Which actor and actress were initially considered for the two adult leads?", "Cary Grant and Audrey Hepburn", "James Stewart and Grace Kelly", "Gary Cooper and Betty Grable", "Paul Newman and Joanne Woodward", "C", "Mystery", "Did you know that when Robert Mitchum first heard that Shelley Winters had been cast in the role of Willa, he said 'She looks and sounds as much like a wasted West Virginia girl as I do. The only bit she'll do convincingly is to float in the water with her throat cut.'"],
  ["What was the name of the male 'antagonist' in the movie?", "Harry Powell", "Mark Lewis", "Charlie Oakley", "Jack Wilson", "A", "Mystery", "Did you know that Dutch-born American serial killer Harry Powers (born Herman Drenth) was the inspiration for the role of the Preacher?"]
];

var questionsObjects = [];
for(var i = 0; i < questions.length; i++)
{
  var currentQuestion = questions[i];
  questionsObjects.push({
    question: currentQuestion[0],
    options: [
      currentQuestion[1],
      currentQuestion[2],
      currentQuestion[3],
      currentQuestion[4]
    ],
    correctAnswer: currentQuestion[5],
    category: currentQuestion[6],
    trivia: currentQuestion[7]
  });
}
console.log(questionsObjects);


// Return the subset of questionsObjects
// with the given category
function filterByCategory(category)
{
  return _.filter(questionsObjects, function(o) {
    return o.category === category;
  });
}

// returns the document.getElementById() reference to scripts whenever needed. Returns the object reference for the id string.
function _(x) {
  return document.getElementById(x);
}
// where the first quesiton from the multi-dimensional array of questions, choices, and correct answers comes from. It will actually make the question and choices visible to the player. It will also show the submit button. When the player clicks on the submit button, he/she will be directed to the next question.
function renderQuestion() {
  quiz = _("quiz");
  if(position >= questions.length) {
    percentCorrect = Math.round((correct / questions.length) * 100);
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct and your score is " + percentCorrect + "%.</h2>";
    _("quiz_status").innerHTML = "Quiz Completed.";
    
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
 trivia = questions[position][7];
 _("quiz_description").innerHTML = "<div>"+trivia+"</div>";
  category = questions[position][6];
  _("quiz_status").innerHTML = "<h4>Category: " + category + "</h4>" + "Question " + (position + 1) + " of " + questions.length;
  question = questions[position][0];
  chA = questions[position][1];
  chB = questions[position][2];
  chC = questions[position][3];
  chD = questions[position][4];
  /*quiz.innerHTML = "<div id='quiz_description'>"+trivia+"</div>";*/
  quiz.innerHTML = "<h4 id='quiz_category'>"+category+"</h4>";
  quiz.innerHTML = '<form>';
  quiz.innerHTML += '<fieldset>';
  quiz.innerHTML = '<legend>'+question+'</legend><br>';
  //rendering the question to the user.
  // rendering the radio button answer choices. That way don't have to actually have this on the html page. 
  // Using += after the first .innerHTML because appending to it. If I didn't use +=, then  only the last line would append.
  // .innerHTML property returns the HTML content (innerHTML) of an element. It is used with teh document.getElementById(), TagName(), etc.
  quiz.innerHTML += "<input type='radio' id='choices' name='choices' value='A'><label for='choices'>"+chA+"</label><br>";
  quiz.innerHTML += "<input type='radio' id='choices' name='choices' value='B'><label for='choices'>"+chB+"</label><br>";
  quiz.innerHTML += "<input type='radio' id='choices' name='choices' value='C'><label for='choices'>"+chC+"</label><br>";
  quiz.innerHTML += "<input type='radio' id='choices' name='choices' value='D'><label for='choices'>"+chD+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  quiz.innerHTML += '</fieldset';
  quiz.innerHTML += '</form>';
}

  // Need code that will look through name group of choices variablethat was initialized earlier to see which one the player selected.
  // document.getElementsByName() results in an array.
  // 
function checkDescription() {
  allTrivia = document.getElementById("quiz_description");
    if(question === questions[position][0] && trivia === questions[position][7]) {
      allTrivia = trivia.toString();
    }
  }
function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if(choices[i].checked) {// for loop runs over the choices array, and this way one can see what the player's cfile:///Users/mariacam/Development/bsurreal-angular/img/0Red-Shoes-1198.jpghoice is.
      choice = choices[i].value; // The choice will be put into this choice variable here. That way it can be evaluated outside of the for loop.
    }                            
  }
  function checkCategory() {
    categories = document.getElementById("quiz_category");
    if(question === questions[position][0] && category === questions[position][6]) {
      categories = category.toString();
  }
  // Evaluate whether the choice the player selected is the correct one or not.
  if(choice === questions[position][5]) {
      correct++;
  }
}
    checkDescription();
    checkCategory();
    position++;// this changes the position of the question the player is on.
    renderQuestion();
    next();
}
window.addEventListener("load", renderQuestion, false);

