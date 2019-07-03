/*
Quiero hacer un juego en el cual el usuario adivine el nombre de algo al presionar las letras de el teclado y que reste vidas por cada vez que la letra no esta mencionada en dicho nombre y en caso de que la letra este mencionada una o multiples veces hacerla aparecer 
*/
 
//1. have the name of the things the user needs to guess
function randomName()
{  
var names = ["ferrari", "mercedes", "redbull", "mclaren", "Renault"];

  //2. Choose a ramdom name make the keyboard strokes active and store the string
  var name = names.length;
  var randomName = Math.floor(Math.random() * name)
    return names[ randomName ];
}
var random = randomName()
var randomLength = random.length
console.log(random)
// show dashes in id wordToGuess
var uniqueKey = new Set([])
for (var i=0; i < randomLength; i++)
{
var dashes = document.createElement("span");
dashes.id = "span"+i;
dashes.className = random[i];
dashes.innerHTML = "_ ";
var dashSpace = document.getElementById("wordToGuess");
dashSpace.appendChild(dashes)
uniqueKey.add(randomLength[i])
}


var playerwins = "";
playerwinsCounter = 0;
var numGuessesRem = "";
numGuessesRem = 12;

var match = document.getElementById("numWins")
match.innerHTML = playerwinsCounter;

var noMatch = document.getElementById("livesRem")
noMatch.innerHTML = numGuessesRem;

var lettersGuessed = [];
var correctLetters = new Set([]);
document.onkeyup = function (event)
{
  
//5. record the keyboard strokes (once pressed it cannot be pressed again)
  var keyStroke = event.key.toLowerCase();
  lettersGuessed += keyStroke;
  document.getElementById("guessLetter").innerHTML = keyStroke;

//4. make letters appear as they pressed the keyboard and store them
  document.getElementById("guessLetter").innerHTML = lettersGuessed;
  var selected = document.getElementById(keyStroke); 

  if (selected.length > 0)
  {
    for (var j=0; j < selected.length; j++)
    {
      selected.length[j].innerHTML = keyStroke
    }
    correctLetters.add(keyStroke);
    if(correctLetters.size === uniqueKey.size)
    {
      alert("Good Job! Press ok to continue playing");
      location.reload(true);
      playerwinsCounter++;
    }
    else
    {

    }
  }
}

//5. check letters
//6. 
//7. if it matches with the name make letters appear on the dashes
//8. make a counter for the lifes and take lifes away if the letters pressed 