function writeTweet()
{
  var randIndex, sentence;
  var intro = ["Have you ever noticed", "What's the deal with" , "Did you realize that", "Aren't"];
  var body = ["cafeteria food", "the weather", "laptop", "android phone", "your house","your dog"];
  var end = ["is trying to ruining your life", "is your enemy"];

  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence += " " + body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence += " " + end[randIndex];

  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
