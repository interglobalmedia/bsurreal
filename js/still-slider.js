$(document).ready(function (){


  // Use jQuery to create interactive buttons. 
  // Using <input> tag to create clickable images that act as "buttons".
  $("#imageDescriptionPrev").click(function() {
    prev();
  });
  $("#imageDescriptionNext").click(function() {
    next();
  });
  // Create variables to store document.getElementBYId() for images and image descriptions
   // so that I can later apply the .src name/property to the image values and the desc name/property
   // to the description values in the images array of objects.
  var image = document.getElementById("slideshowImage");
  var imgDesc = document.getElementById("quiz_description");
  // Image/Description array of objects stored in a variable
  var images =  [
                {src:"<div id='slideshowImage'><img src='img/0Red-Shoes-1198.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that the movie is responsible for this actress meeting and marrying her husband Ludovic Kennedy? He said that when he saw her in the movie, he immediately knew that she was going to be the girl he was going to marry. He actively pursued her, and married her two years later, in February 1950, at the Chapel Royal in London's Hampton Court Palace!</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/TRS2.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>This is Moira Shearer and Robert Helpmann in The Red Shoes! Did you know that Moira Shearer got badly sunburned and developed blisters on her back on her first day of shooting this movie? Later on she also wrenched her neck when told to leap from a window, and received a scratch that turned into an abscess. Shearer often found herself being suspended in a harness for up to eight hours while being buffetted by wind machines. What rough going!</div>"},
                {src:"<div id='slideshowImage'><img src='img/rs-ballet.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>This is from the title ballet sequence of The Red Shoes! Did you know that this sequence took 6 weeks to shoot and used over 120 paintings from famous German set designer Hein Heckroth?</div>"},
                {src:"<div id='slideshowImage'><img src='img/redshoes1-big-1080.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>This is a famous ballet scene from The Red Shoes with Moira Shearer and Robert Helpmann! Did you know that in Hans Christian Anderson's original fairy tale, the ballerina had her feet hacked off by a woodsman to stop her from dancing?</div>"},
                {src:"<div id='slideshowImage'><img src='img/bladerunner5.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>This is a famous scene from Blade Runner when Deckard (Harrison Ford) found Zhora, one of the replicants, at her place of work and is about to kill her. She knows that she is doomed and wouldn't have much time to live anyway, but she runs for her life nonetheless!</div>"},
                {src:"<div id='slideshowImage'><img src='img/bladerunner4.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>This is from Blade Runner with Daryl Hannah! Did you know that she wasn't the first choice for the role of Pris? Debbie Harrie of Blondie fame was the first choice. Supposedly Daryl Hannah still has the blond wig she wore for the role.</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/bladerunner-joanna.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>This is Joanna Cassidy, who plays the replicant Zhora in Blade Runner. Did you know that the snake in this picture was actually her pet, a Burmese python named Darling?</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/harri_blade.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>I don't think this man needs an introduction, do you? Did you know that Harrison Ford stated that Blade Runner was one of the most frustrating films he ever made? He said that part of it was because the shoot(s) were so difficult, and the other because of changes made in post production.</div>"},
                {src:"<div id='slideshowImage'><img src='img/bladerunner_6.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Jane Feinberg, the casting director for Blade Runner, didn't want Sean Young to play the role of Rachel? She thought her too inexperienced. Ridley Scott, on the other hand, insisted she play the part. He liked her because she reminded him of Vivien Leigh.</div>"},
                {src:"<div id='slideshowImage'><img src='img/blade-runner_00308709.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Rutger Hauer was chosen for the role of Roy Batty simply because of his Teutonic, non-identifiable looks? But wasn't he SO great?</div>"},
                {src:"<div id='slideshowImage'><img src='img/blade-runner-harrison-ford.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Blade Runner suffered at the box office because it opened the same time as E.T.? However, upon its re-release in 1992, it very quickly achieved cult status.</div>"},
                {src:"<div id='slideshowImage'><img src='img/blade2.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Phillip K. Dick's first choice for Rachel was Victoria Principal??? Where did that come from?</div>"},
                {src:"<div id='slideshowImage'><img src='img/sleepy-hollow-5.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Tim Burton's inspiration for Sleepy Hollow was the Gothic horror films of Mario Bava and Hammer Productions? Burton brought in Hammer veteran Michael Gough of Tv Show Batman out of retirement to play a small role, and Christopher Lee, veteran of both Hammer and Bava films, for a cameo.</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/sleepyhollow-3.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that there were 18 decapitations in the movie?</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/sleepyhollow-2.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Johnny Depp initially found the idea of having Christina Ricci as a love interest in the movie somewhat odd, because he knew her since she was nine years old?</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/sleepyhollow4.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Christopher Walken told Tim Burton that he couldn't ride a horse only AFTER he was cast in the role?</div>"},
                {src:"<div id='slideshowImage'><img src='img/sleepy_hollow6.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Johnny Depp did all of his own stunts for the final scene where he is dragged by the horse - he had bullet-proof clothing underneath his wardrobe.</div>"},
                {src:"<div id='slideshowImage'><img src='img/sleepyhollow-1.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Johnny Depp adopted Golden Eye, the horse that played Gunpowder, Ichabod Crane's horse in the film Sleepy Hollow, when he heard it was going to be put down?</div>"},
                {src:"<div id='slideshowImage'><img src='img/psycho-822410.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Anthony Perkins, the actor in this image who played the male ANTAGONIST in Psycho, would still have wanted to play Norman Bates, even if it would peg him in similar roles for life!</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/psycho-this-film-is-a-classic.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that there are two split second frames of knife touching body during the murder scene in the shower?</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/psycho-house.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Psycho only cost $800,000 to make and has earned more than US$40 million. Hitchcock used the crew from his TV series Alfred Hitchcock Presents(1955) to save time and money. In 1962 he exchanged the rights to the film and his TV series for a huge block of MCA's stock, becoming its third-largest stockholder.</div>"}, 
                {src:"<div id='slideshowImage'><img src='img/06_psycho_.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Anthony Perkins was paid $40,000 for the role of Norman Bates, which is exactly the amount of money Marion Crane embezzles?</div>"},
                {src:"<div id='slideshowImage'><img src='img/psycho.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that The novel Psycho, written by Robert Bloch, was actually part of a series of pulp novels marketed in conjunction with the popular spooky radio show Inner Sanctum?</div>"},
                {src:"<div id='slideshowImage'><img src='img/Psycho-1960-Movie.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that a shot of Marion removing her black bra before her shower was removed by the U.S. censors while the scene remained intact in the U.K?</div>"},
                {src:"<div id='slideshowImage'><img src='img/night-of-the-hunter-jail.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that this movie was the movie director's only directorial effort? What an amazing work of art!</div>"},
                {src:"<div id='slideshowImage'><img src='img/maxresdefault.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>When the director was looking for a vocalist to sing composer Walter Schumann's lullaby in the movie, he recommended an acquaintance of his, Kitty White. He also suggested the director go hear her sing in a nightclub, and he did. She was subsequently hired.</div>"},
                {src:"<div id='slideshowImage'><img src='img/robert-mitchum-night-of-the-hunter.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that the cinematographer for this movie thought that the only two directors he had worked with who really understood the concept of lighting were Orson Welles and Charles Laughton?</div>"},
                {src:"<div id='slideshowImage'><img src='img/the-night-of-the-hunter.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Charles Laughton liked working with the boy who played John, but not so much with the girl who played Pearl. Sometimes he would keep the camera going after a shoot was over, and he would capture her on camera 'reacting' to him. Some of these 'out-takes' were used as reaction shots to the Preacher.</div>"},
                {src:"<div id='slideshowImage'><img src='img/the-night-of-the-hunter-shadows.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Robert Mitchum considered Charles Laughton his favorite director to work with and 'The Night of The Hunter' his favorite movie he acted in?</div>"},
                {src:"<div id='slideshowImage'><img src='img/noth-fence.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Betty Grable was Laughton's first choice to play Willa, the role that eventually went to Shelley Winters. But Shelley Winters was brilliant in the role of Willa, wasn't she?</div>"},
                {src:"<div id='slideshowImage'><img src='img/Night-of-the-Hunter.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Laurence Olivier had been very eager to play the role of The Preacher, and campaigned heavily to get the part, even though it had already been cast. Both the director and United Artists agreed that Olivier's name would not have brought in as much in ticket sales.</div>"},
                {src:"<div id='slideshowImage'><img src='img/nightofthehunter04.jpg' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>In his biography, Robert Mitchum claimed that the director of 'The Night of The Hunter' found the screenwriter's so bad that he paid him off and sent him away, and then virtually rewrote the entire script himself, uncredited. That however, is not entirely true. Parts of the original script made it into the final cut of the movie. It is also not true that the screenwriter was fired. The director had him cut down the length of the script, because he found it too long.</div>"},
                {src:"<div id='slideshowImage'><img src='img/night-of-the-hunter-direction2.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that when Robert Mitchum first heard that Shelley Winters had been cast in the role of Willa, he said 'She looks and sounds as much like a wasted West Virginia girl as I do. The only bit she'll do convincingly is to float in the water with her throat cut.'</div>"},
                {src:"<div id='slideshowImage'><img src='img/screenshot-lrg-25.png' width='600' height='400' /></div>",
                 desc:"<div id='quiz_description'>Did you know that Dutch-born American serial killer Harry Powers (born Herman Drenth) was the inspiration for the role of the Preacher?</div>"}
                ];
  // declare a global scope variable images_i
  // They are the slider index counters.
  // create a counter/index for the images array for prev() and next() functions
  var images_i = 0;

  // function prev() is applied to the clicking of the prev button and going backwards through the array of images
  // in the slider
  // ergo (-)
  // function prev() is built in javascript function.
  function prev() {
    // Fade out effect on the image
    $("#slideshowImage").fadeOut(300,function() {    
      // decrements the image index and makes for the reversal of images in the slider.
      // Without this code, the slider would not move backwards when the user clicks
      // the prev button.
      images_i--;
      // Condition for the decrementation of the images. Images "advance" backwards. If the prev_val index is < or equal to -1,
      if(images_i < 0) {
      // continue decrementing the images index by 1. 
      // Using images.length because starting from the end of the array, backwards towards 0.
        images_i = images.length - 1;
      }

      image.innerHTML = images[images_i].src;
      imgDesc.innerHTML = images[images_i].desc;
    });
    $("#slideshowImage").fadeIn(1000);
  }
  // This function has to do with the clicking of the right arrow and going forward through
  // the array of images in the slider. function next() is a built in javascript function.
  function next() {
    $("#slideshowImage").fadeOut(300,function() {
      // increments the image index and makes for the advancement of images in the slider.
      // Without this code, the slider would not advance when the user clicks
      // the next button.
      images_i++;
      // Condition for the incrementation of the images. Images "advance" forward. 
      //If next_val index > the length of the images array,
      if(images_i >= images.length) {
        // the index of next_val is 0, which means the first image in the array.
        images_i = 0;
      }

      image.innerHTML = images[images_i].src;
      imgDesc.innerHTML = images[images_i].desc;
    });
    $("#slideshowImage").fadeIn(1000);
  }
});
// Code for Image Descriptions
  // I can't create a prev() and next() function for the descriptions. I have to do something different.
  // I would like to create inputs for the descriptions just as I had done for the images. A way for the
  // user to interact, and for the descriptions to be a "surprise", not something that is simply "there".
  // OR at least that is clickable along with the arrow images. I don't think so tho. More fun to show and
  // hide. That way I only need one button as well. 2 would be one too many.
  // One "click me" button.
    // Update Dec 31, 2015: Didn't go with just one click me button. Ended up with on prev and one next button
    // configured slightly differently than original slider without text. They're a button type instead
    // of an image type. Also got rid of prev page and next page buttons at bottom. Will make the prev and
    // next buttons at top of page the navigation buttons instead. Had too many buttons going on!
    // Also found a way to make interaction with slider interesting, fun, and mysterious, as well
    // as optimized for responsiveness. Will see what others think on January 2, 2016 when I ask their
    // opinions.
      // Update later on on December 31 2015: So far, I think I like what I have done repsonsively with
      // the slider. Now just have to find out why it occasionally acts up when advancing or retreating.