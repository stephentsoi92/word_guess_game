/*Quiero hacer un juego en el cual las personas adivinen el nombre de una persona al presionar las letras de el teclado y que reste vidas por cada vez que la letra no esta mencionada en dicho nombre y en caso de que la letra este mencionada una o multiples veces hacerla aparecer 
*/
 
//1. have the name of the person one needs to guess (store)
  var names = ["ferrari", "mercedes", "redbull", "mclaren", "Renault"]

//2. Choose a ramdom name
  var randomName = names[Math.floor(Math.random()*names.length)];
  
  //console.log(randomName);


//3. make the keyboard strokes active and store the string
  document.onkeyup = function(event)
  {
    var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("guessLetter").innerHTML = letterGuess;

//5. record the keyboard strokes (once pressed it cannot be pressed again)
    var answeredLetters = "";
  // THIS IS NOT WORKING
    answeredLetters += letterGuess;
    console.log(answeredLetters)
  }
//4. make letters appear as they pressed the keyboard and store them
  for (var i=0; i < randomName.length; i++)
  {
    var dashes = document.createElement("span");
    dashes.id = "span"+i;
    dashes.className = randomName[i];
    dashes.innerHTML = "_ ";
    var dashArea = document.getElementById("wordToGuess");
    //error dashArea null
    dashArea.appendChild(dashes);
  }
  
//5. check letters
  var guess = ""

  document.getElementById("guessLetter").innerHTML = guess;
  
  

//6. 
//7. if it matches with the name make letters appear on the dashes
//8. make a counter for the lifes and take lifes away if the letters pressed are do not match with the name
  

//Array for the names that are going to be guessed
//var names = ["Charles Leclerc", "Max Verstapen", "Pierre Gasly", "Sebatian Vettel"]
  
  
//section that will record the player strokes on the keyboard 


/* this syntax makes the computer choose a ramdom name from the array name
var randomName = names[Math.floor(Math.random()*names.length)];
console.log(randomName);
*/
//iteration to look through the correct letters of the name with a for loop test if a letter of the name is pressed return true
//  for (var i=0; i < names[0].length; i++)


//make an alert to see if the letter pressed is good
// if (strokeGuess === "c"){
//      var charles = function ()
  