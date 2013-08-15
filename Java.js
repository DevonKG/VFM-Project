// Devon Gildark 1308

window.addEventListener("DOMcontentloaded", function(){

// DOM Shortcuts
var dId = function (x){
	var elId = document.getElementById(x);
	return elId;
};
var dTag = function (x){
	var elTag = document.getElementsByTagName(x);
	return elTag;
};	
var dCreate = function (x){
	var elCreate = document.createElement(x);
	return elCreate;
};
// End DOM Shortcuts

//Var defaults- Going of the video set up
var pageGroups= ["--create group--", "Meal", "Snack", "Loaded"];

//Links & Submit click evcents
var edit = dId("edit");
    edit.addEventListener("click", getData);

var remove = dId("delete");
    remove.addEventListener("click", clearLocal);

var save = dId("submit");
    save.addEventListener("click", storeData);

/*
 *Meal vs Snack-- The meal list will be a auto count, so first meal is 1, second mealis 2 and so on. Will do the same for Snacks. The scroll bar will have
  the choice of Meal or Snack, and at choice it will rememeber the difference and the count. Will also load a different screen.
  If/Else set up. If Meal, Else Snack
*/

// Need to make the code to read & save user names & passwords

// Meal page is hidden until selected, if snack is chosen then it goes to the snack page.

// code to save, edit and delete meals/snacks

// code that ads all the macros together giving total cal count

// code to total cal count show up next to slide bar

// once logged takes you to a page showing a lift of all the logged food....


});