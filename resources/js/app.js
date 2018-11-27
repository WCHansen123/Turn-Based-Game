var Button1 = document.getElementById("BP1");
Button1.onclick = TurnP1;

var Attackp1 = document.getElementById("AttackP1");
Attackp1.onclick = AttackP1;

var Healp1 = document.getElementById("HealP1");
Healp1.onclick = HealP1;

var Specialp1 = document.getElementById("SpecialP1");
Specialp1.onclick = SpecialP1;


////////////////////////////////////////////////////////////////////////////////////

var Button2 = document.getElementById("BP2");
Button2.onclick = TurnP2;

var Attackp2 = document.getElementById("AttackP2");
Attackp2.onclick = AttackP2;

var Healp2 = document.getElementById("HealP2");
Healp2.onclick = HealP2;

var Specialp2 = document.getElementById("SpecialP2");
Specialp2.onclick = SpecialP2;


var HealthP1 = 50;
var HealthP2 = 50;
 
//////////////////////////////////////////////////////////////////////

function TurnP1() {
	document.getElementById("Open-SkillsP1").style.display = "block";

}

function AttackP1() {
	document.getElementById("Open-SkillsP1").style.display = "none";
	var DMG = Math.floor(Math.random() *6 + 4);
	HealthP2 = HealthP2 - DMG;
	alert("Player 1 did " + DMG + " damage to player 2");
	alert("Player 2 now has " + HealthP2 + " Health");

	CheckIfDead();
}

function HealP1() {
	document.getElementById("Open-SkillsP1").style.display = "none";
	var Heal = Math.floor((Math.random() * 7) + 3);
	HealthP1 = HealthP1 + Heal;
	alert("Player 1 healed " + Heal + " health");
	alert("Player 1 now has " + HealthP1 + " Health");
	CheckIfDead();
}

function SpecialP1() {
	document.getElementById("Open-SkillsP1").style.display = "none";
	var DMG = Math.floor((Math.random() * 9) + 7);
	HealthP2 = HealthP2 - DMG;

	var Heal = Math.floor((Math.random() * 3) + 1);
	HealthP1 = HealthP1 + Heal;

	alert("Player 1 did " + DMG + " damage to player 2 and healed " + Heal + " Health")
	document.getElementById("SpecialP1").disabled = true;
	CheckIfDead();
}

///////////////////////////////////////////////////////////////////////////////////////////////


function TurnP2() {
	document.getElementById("Open-SkillsP2").style.display = "block";
}


function AttackP2() {
	document.getElementById("Open-SkillsP2").style.display = "none";
	var DMG = Math.floor((Math.random() * 0.6) + 1);
	HealthP1 = HealthP1 - DMG;
	alert("Player 2 did " + DMG + " damage to player 1");
	alert("Player 1 now has " + HealthP1 + " Health");

	CheckIfDead();
}

function HealP2() {
	document.getElementById("Open-SkillsP2").style.display = "none";
	var Heal = Math.floor((Math.random() * 7) + 3);
	HealthP2 = HealthP2 + Heal;
	alert("Player 2 healed " + Heal + " health");
	alert("Player 2 now has " + HealthP2 + " Health");
	CheckIfDead();
}

function SpecialP2() {
	document.getElementById("Open-SkillsP2").style.display = "none";
	var DMG = Math.floor((Math.random() * 9) + 7);
	HealthP1 = HealthP1 - DMG;

	var Heal = Math.floor((Math.random() * 3) + 1);
	HealthP2 = HealthP2 + Heal;

	alert("Player 2 did " + DMG + " damage to player 1 and healed " + Heal + " Health")
	document.getElementById("SpecialP2").disabled = true;
	CheckIfDead();
}

//////////////////////////////////////////////////////////////////////
function CheckIfDead() {
	if (HealthP1 <= 0) {
		alert("Player 2 wins the battle!!");
		setTimeout("location.reload(true);");
	}
	else if(HealthP2 <= 0) {
		alert("Player 1 wins the battle!!");
		setTimeout("location.reload(true);");
	}
}