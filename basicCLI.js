
var inquirer = require("inquirer");

var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var basicQuestions = require("./basicquestions.js").basicQuestionnaire;
var clozeQuestions = require("./clozequestions.js").clozeQuestionnaire;
var bQuestionArray = [];
var basicCardObject = {};
var index = 0;

for(var i=0; i<basicQuestions.length; i++){

	basicCardObject = new BasicCard(basicQuestions[i].front, basicQuestions[i].back);
	bQuestionArray.push(basicCardObject);
}

var playBasicGame = function(index) {
	console.log("---------------------------------------------------------");
	inquirer.prompt([
	{
		type: "question",
		name: "basic",
		message: bQuestionArray[index].front + "\n"

	}

	]).then(function(answer){
		if(answer.basic.toLowerCase() === bQuestionArray[index].back.toLowerCase()){
				console.log("Correct!");
		}
		
		else {
			console.log("Incorrect!, Answer --- " + bQuestionArray[index].back);
		}	

		index++;
		playBasicGame(index);	
			
	});
}

playBasicGame(index);
	


