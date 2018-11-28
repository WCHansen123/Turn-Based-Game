
document.getElementById("BP2").disabled = true;

var END = document.getElementById("END");
END.onclick = Endgame;


var Button1 = document.getElementById("BP1");
Button1.onclick = TurnP1;

var Attackp1 = document.getElementById("AttackP1");
Attackp1.onclick = AttackP1;

var Healp1 = document.getElementById("HealP1");
Healp1.onclick = HealP1;

var Specialp1 = document.getElementById("SpecialP1");
Specialp1.onclick = SpecialP1;




function Bot(){
	var bot =  Math.random();
	if (HealthP2 > 10) {
		if (bot <= 0.3) {
			HealP2();
		}	

		else if (bot <= 1) {
			AttackP2();
		}
	}
	else{
		if (bot <= 0.56) {
			HealP2();
		}	

		else if (bot <= 1) {
			AttackP2();
		}
	}
		ShowHealthP1();
		ShowHealthP2();
}

////////////////////////////////////////////////////////////////////////////////////

var Button2 = document.getElementById("BP2");
Button2.onclick = TurnP2;

var Attackp2 = document.getElementById("AttackP2");
Attackp2.onclick = AttackP2;

var Healp2 = document.getElementById("HealP2");
Healp2.onclick = HealP2;

var Specialp2 = document.getElementById("SpecialP2");
Specialp2.onclick = SpecialP2;


var HealthP1 = 25;
var HealthP2 = 25;
 
//////////////////////////////////////////////////////////////////////

function TurnP1() {

	document.getElementById("Open-SkillsP1").style.display = "block";

}

function AttackP1() {

	document.getElementById("Open-SkillsP1").style.display = "none";

	var DMG = Math.floor((Math.random()*2) + 4);
	HealthP2 = HealthP2 - DMG;


	var p = document.createElement("p");
	p.innerHTML = "Player 1 did " + DMG + " damage to player 2";
	document.getElementById("consolelogP1").append(p);


	var p = document.createElement("p");
	p.innerHTML = "_________________________";
	document.getElementById("consolelogP1").append(p);


	CheckIfDead();
}

function HealP1() {

	var Heal = Math.floor((Math.random() * 2) + 3);
	HealthP1 = HealthP1 + Heal;


	if (HealthP1 >= 26) {
		HealthP1 = 25;
		console.log("Player 1 now has full health");
	}

	else{

	document.getElementById("Open-SkillsP1").style.display = "none";

	HealthP1 = HealthP1 + Heal;


	var p = document.createElement("p");
	p.innerHTML = "Player 1 healed " + Heal + " health";
	document.getElementById("consolelogP1").append(p);


	var p = document.createElement("p");
	p.innerHTML = "Player 1 now has " + HealthP1 + " Health";
	document.getElementById("consolelogP1").append(p);


	var p = document.createElement("p");
	p.innerHTML = "_________________________";
	document.getElementById("consolelogP1").append(p);


	CheckIfDead();
	}
}

function SpecialP1() {

	document.getElementById("Open-SkillsP1").style.display = "none";

	var DMG = Math.floor((Math.random() * 4) + 6);
	HealthP2 = HealthP2 - DMG;


	var Heal = Math.floor((Math.random() * 3) + 1);
	HealthP1 = HealthP1 + Heal;


	var p = document.createElement("p");
	p.innerHTML = "Player 1 did " + DMG + " damage to player 2";
	document.getElementById("consolelogP1").append(p);


	var p = document.createElement("p");
	p.innerHTML = "and healed " + Heal + " Health" ;
	document.getElementById("consolelogP1").append(p);


	var p = document.createElement("p");
	p.innerHTML = "_________________________";
	document.getElementById("consolelogP1").append(p);


	document.getElementById("SpecialP1").disabled = true;


	CheckIfDead();
}

///////////////////////////////////////////////////////////////////////////////////////////////


function TurnP2() {

	document.getElementById("Open-SkillsP2").style.display = "block";
}


function AttackP2() {

	document.getElementById("Open-SkillsP2").style.display = "none";


	var DMG = Math.floor((Math.random()*2) + 4);
	HealthP1 = HealthP1 - DMG;

	var p = document.createElement("p");
	p.innerHTML = "Player 2 did " + DMG + " damage to player 1";
	document.getElementById("consolelogP2").append(p);


	var p = document.createElement("p");
	p.innerHTML = "_________________________";
	document.getElementById("consolelogP2").append(p);


	// CheckIfDead();
}

function HealP2() {

	var Heal = Math.floor((Math.random() * 2) + 3);
	HealthP2 = HealthP2 + Heal;


	if (HealthP2 >= 26) {
		HealthP2 = 25;
	}

	else{

	document.getElementById("Open-SkillsP2").style.display = "none";

	
	var p = document.createElement("p");
	p.innerHTML = "Player 2 healed " + Heal + " health";
	document.getElementById("consolelogP2").append(p);


	var p = document.createElement("p");
	p.innerHTML = "_________________________";
	document.getElementById("consolelogP1").append(p);


	// CheckIfDead();
	}
}

function SpecialP2() {
	document.getElementById("Open-SkillsP2").style.display = "none";
	var DMG = Math.floor((Math.random() * 4) + 2);
	HealthP1 = HealthP1 - DMG;

	var Heal = Math.floor((Math.random() * 3) + 1);
	HealthP2 = HealthP2 + Heal;

	var p = document.createElement("p");
	p.innerHTML = "Player 2 did " + DMG + " damage to player 1 and healed";
	document.getElementById("consolelogP2").append(p);


	var p = document.createElement("p");
	p.innerHTML = "_________________________";
	document.getElementById("consolelogP1").append(p);

	document.getElementById("SpecialP2").disabled = true;
	// CheckIfDead();
}

//////////////////////////////////////////////////////////////////////
function CheckIfDead() {

	if (HealthP1 <= 0) {
		console.log("Player 2 wins the battle!!");
		document.getElementById("BP2").disabled = true;

	}
	else if(HealthP2 <= 0) {
		console.log("Player 1 wins the battle!!");
		document.getElementById("BP2").disabled = true;	
	}

	else{
		Bot();
	}
	ShowHealthP1();
	ShowHealthP2();
}

function ShowHealthP1() {

if (HealthP1 <= 0) {
	document.getElementById("P1").src = "../resources/img/dead.png";
}

else if (HealthP1 <= 10) {
	document.getElementById("P1").src = "../resources/img/hurt.png";
}


document.getElementById("ShowHealthP1").innerHTML = HealthP1 + " health remaining";

}


function ShowHealthP2(){

	if (HealthP2 <= 0) {
	document.getElementById("P2").src = "../resources/img/dead2.png";
}

	else if (HealthP2 <= 10) {
	document.getElementById("P2").src = "../resources/img/hurt2.png";
}
	document.getElementById("ShowHealthP2").innerHTML = HealthP2 + " health remaining";
}

function Endgame(){
	setTimeout("location.reload(true);");
}
