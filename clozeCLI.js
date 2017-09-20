var inquirer = require("inquirer");

var ClozeCard = require("./cloze.js");
var clozeQuestions = require("./clozequestions.js").clozeQuestionnaire;
var cQuestionArray = [];
var clozeCardObject = {};
var index = 0;

for(var i=0; i<clozeQuestions.length; i++){

	clozeCardObject = new ClozeCard(clozeQuestions[i].fullText, clozeQuestions[i].cloze);
	cQuestionArray.push(clozeCardObject);

}


//console.log(bQuestionArray);
var playClozeGame = function(index) {
	console.log("--------------------------------------------------------")
	inquirer.prompt([
	{
		type: "input",
		name: "cloze",
		message: cQuestionArray[index].partial + "\n"

	}

	]).then(function(answer){

		if(answer.cloze.toLowerCase() === cQuestionArray[index].cloze.toLowerCase()){
				console.log("Correct!");
		}
		
		else {
			console.log("Incorrect!, Answer --- " + cQuestionArray[index].cloze);

		}	

		index++;
		playClozeGame(index);	
	});
}

playClozeGame(index);

