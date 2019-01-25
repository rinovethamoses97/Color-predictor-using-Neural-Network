var r,g,b;
var brain;
var current;
function setup(){
	createCanvas(700,400);	
	brain= new NeuralNetwork(3,3,2);
	pickcolor();
	for(var i=0;i<100000;i++){
		console.log("training");
		var inputs=pickcolor();
		var correct;
		if(inputs[0]+inputs[1]+inputs[2]>300){
			correct=[1,0];
		}
		else{
			correct=[0,1];
		}
		brain.train([inputs[0]/255,inputs[1]/255,inputs[2]/255],correct);
	}
	console.log("Trainning is over");
}
function pickcolor(){
	r=random(255);
	g=random(255);
	b=random(255);
	return [r,g,b];
}
function mousePressed(){
	var inputs=pickcolor();
	var predictedcolor=brain.predict([inputs[0]/255,inputs[1]/255,inputs[2]/255]);
	if(predictedcolor[0]>predictedcolor[1]){
		console.log("For input "+(inputs[0]+inputs[1]+inputs[2])+"the prediction is black");
		current="black";
	}
	else{
		console.log("For input "+(inputs[0]+inputs[1]+inputs[2])+"the prediction is white");
		current="white";
	}
}
function draw(){
	background(r,g,b);
	if(current=="black"){
		textSize(64);
		fill(0);
		text("Black",width/2,height/2);
	}
	else if(current=="white"){
		textSize(64);
		fill(255);
		text("White",width/2,height/2);
	}
}