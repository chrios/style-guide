if (typeof(Storage) !== "undefined") {

	/*ADD Ids TO ARRAY*/

	var idArray = [	document.getElementById("listen__colors").id, 
					document.getElementById("listen__headings").id, 
					document.getElementById("listen__paragraph").id, 
					document.getElementById("listen__list").id, 
					document.getElementById("listen__form").id, 
					document.getElementById("listen__table").id ];

	/*ADD ELEMENTS TO ARRAY */

	var buttonArray = [ document.getElementById("listen__colors"), 
						document.getElementById("listen__headings"), 
						document.getElementById("listen__paragraph"), 
						document.getElementById("listen__list"), 
						document.getElementById("listen__form"), 
						document.getElementById("listen__table") ];

	/* MAKE VARIABLE FOR BASKET__SEND and basket__send--container */

	var basketContainer = document.getElementById("basket__container--update");

	var basketSend = document.getElementById("basket__send");

	/*from http://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */
	/*allows arrays to be manipulated in localstorage as JSON using setObj(key, obj) and getObj(key) */

	Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
	}

	Storage.prototype.getObj = function(key) {
	    return JSON.parse(this.getItem(key))
	}

	/* EVENT HANDLERS */

	/*  */
	/* if item is already associated with a json key when button is click the key is set to null */
	/* otherwise the elementId is stored in json array within local storage (todo: change to session storage) */

	buttonArray[0].addEventListener("click",  	function(){	
													/*console.log(idArray[0]);*/
													if (sessionStorage.getObj(0) === idArray[0]) {  //if ID is already in sessionStorage
														sessionStorage.removeItem(0);				//remove ID from storage
														buttonArray[0].innerHTML = ("Add");			//Change button text to Add
													} else {
														sessionStorage.setObj(0, idArray[0]);		//otherwise add ID to storage
														buttonArray[0].innerHTML = ("Remove");		//Change button text to Remove
													}
												});

	buttonArray[1].addEventListener("click", 	function(){	
													/*console.log(idArray[1]);*/
													if (sessionStorage.getObj(1) === idArray[1]) {  //if ID is already in sessionStorage
														sessionStorage.removeItem(1);				//remove ID from storage
														buttonArray[1].innerHTML = ("Add");			//Change button text to Add
													} else {
														sessionStorage.setObj(1, idArray[1]);		//otherwise add ID to storage
														buttonArray[1].innerHTML = ("Remove");		//Change button text to Remove
													}
												});

	buttonArray[2].addEventListener("click", 	function(){	
													/*console.log(idArray[2]);*/
													if (sessionStorage.getObj(2) === idArray[2]) {  //if ID is already in sessionStorage
														sessionStorage.removeItem(2);				//remove ID from storage
														buttonArray[2].innerHTML = ("Add");			//Change button text to Add
													} else {
														sessionStorage.setObj(2, idArray[2]);		//otherwise add ID to storage
														buttonArray[2].innerHTML = ("Remove");		//Change button text to Remove
													}
												});

	buttonArray[3].addEventListener("click", 	function(){	
													/*console.log(idArray[3]);*/
													if (sessionStorage.getObj(3) === idArray[3]) {  //if ID is already in sessionStorage
														sessionStorage.removeItem(3);				//remove ID from storage
														buttonArray[3].innerHTML = ("Add");			//Change button text to Add
													} else {
														sessionStorage.setObj(3, idArray[3]);		//otherwise add ID to storage
														buttonArray[3].innerHTML = ("Remove");		//Change button text to Remove
													}
												});

	buttonArray[4].addEventListener("click",  	function(){	
													/*console.log(idArray[4]);*/
													if (sessionStorage.getObj(4) === idArray[4]) {  //if ID is already in sessionStorage
														sessionStorage.removeItem(4);				//remove ID from storage
														buttonArray[4].innerHTML = ("Add");			//Change button text to Add
													} else {
														sessionStorage.setObj(4, idArray[4]);		//otherwise add ID to storage
														buttonArray[4].innerHTML = ("Remove");		//Change button text to Remove
													}
												});

	buttonArray[5].addEventListener("click",  	function(){	
													/*console.log(idArray[5]);*/
													if (sessionStorage.getObj(5) === idArray[5]) {  //if ID is already in sessionStorage
														sessionStorage.removeItem(5);				//remove ID from storage
														buttonArray[5].innerHTML = ("Add");			//Change button text to Add
													} else {
														sessionStorage.setObj(5, idArray[5]);		//otherwise add ID to storage
														buttonArray[5].innerHTML = ("Remove");		//Change button text to Remove
													}
												});
	

	basketSend.addEventListener("click", 		function(){
													  /*here insted of console.log you would send the html + css of the element to the customer email address using php perhaps*/
													var listOfSelectedObjects = "<br>";
													for (var i = 0; i < sessionStorage.length; i++) {
														/*console.log( sessionStorage.key(i) +" has value " + sessionStorage[sessionStorage.key(i)] );*/
														listOfSelectedObjects += sessionStorage[sessionStorage.key(i)] + "<br>"; 	//loop through the storage items and add them on new lines
													}																				//with line break in between them
													if (listOfSelectedObjects !== "<br>") {
														basketContainer.innerHTML = listOfSelectedObjects;
													} else {
														basketContainer.innerHTML = "None Selected!!!";
													}
												});

} else {
    alert("Sorry! no sessionStorage support!");
}

