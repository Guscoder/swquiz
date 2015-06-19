var questions = [
  ['Where was the rebel base in Episode 5?', 'hoth'],
  ['Who killed Obi-Wan Kenobi?', 'darth vader'],
  ['What was Han frozen in?', 'carbonite'],
];

var correctQuestions = [];


var incorrectQuestions = [];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var htmltwo;
var htmlthree;

function print(message) {
  document.write(message);
}
  
function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += "</ol>";
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question);
    if (response.toLowerCase() === answer) {
      correctAnswers +=1;
      correctQuestions.push(question);
    } else {
      incorrectQuestions.push(question);
    }
}


html = "You got " + correctAnswers + " question(s) right.";
html += "<h2>You got these questions right:</h2>";
html += buildList(correctQuestions);
html += "<h2>You got these questions wrong:</h2>"
html += buildList(incorrectQuestions);
print(html);



