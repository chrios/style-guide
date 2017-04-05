if (typeof(Storage) !== "undefined") {

	/*from http://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */
	/*allows arrays to be stored in localstorage as JSON using setObj(key, obj) and getObj(key) */

	Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
	}

	Storage.prototype.getObj = function(key) {
	    return JSON.parse(this.getItem(key))
	}

	/*ADD Ids TO ARRAY*/

	var idArray = [	document.getElementById("listen__colors").id, 
					document.getElementById("listen__headings").id, 
					document.getElementById("listen__paragraph").id, 
					document.getElementById("listen__list").id, 
					document.getElementById("listen__form").id, 
					document.getElementById("listen__table").id ];

	/* EVENT HANDLERS */

	/*  */
	/* if item is already associated with a json key when button is click the key is set to null */
	/* otherwise the elementId is stored in json array within local storage (todo: change to session storage) */

	document.getElementById("listen__colors").addEventListener("click",  	function(){	
	    																		/*console.log(idArray[0]);*/
																				if (localStorage.getObj(0) === idArray[0]) {
																					localStorage.removeItem(0);
																				} else {
																					localStorage.setObj(0, idArray[0]);
																				}
																			});

	document.getElementById("listen__headings").addEventListener("click", 	function(){	
	    																		/*console.log(idArray[1]);*/
																				if (localStorage.getObj(1) === idArray[1]) {
																					localStorage.removeItem(1);
																				} else {
																					localStorage.setObj(1, idArray[1]);
																				}
																			});

	document.getElementById("listen__paragraph").addEventListener("click", 	function(){	
	    																		/*console.log(idArray[2]);*/
																				if (localStorage.getObj(2) === idArray[2]) {
																					localStorage.removeItem(2);
																				} else {
																					localStorage.setObj(2, idArray[2]);
																				}
																			});

	document.getElementById("listen__list").addEventListener("click", 		function(){	
	    																		/*console.log(idArray[3]);*/
																				if (localStorage.getObj(3) === idArray[3]) {
																					localStorage.removeItem(3);
																				} else {
																					localStorage.setObj(3, idArray[3]);
																				}
																			});

	document.getElementById("listen__form").addEventListener("click",  		function(){	
	    																		/*console.log(idArray[4]);*/
																				if (localStorage.getObj(4) === idArray[4]) {
																					localStorage.removeItem(4);
																				} else {
																					localStorage.setObj(4, idArray[4]);
																				}
																			});

	document.getElementById("listen__table").addEventListener("click",  	function(){	
	    																		/*console.log(idArray[5]);*/
																				if (localStorage.getObj(5) === idArray[5]) {
																					localStorage.removeItem(5);
																				} else {
																					localStorage.setObj(5, idArray[5]);
																				}
																			});
	

	document.getElementById("basket__send").addEventListener("click", 		function(){
																				  /*here insted of console.log you would send the html + css of the element to the customer email address using php perhaps*/
																				var listOfSelectedObjects = "<br>";
																				for (var i = 0; i < localStorage.length; i++) {
																					/*console.log( localStorage.key(i) +" has value " + localStorage[localStorage.key(i)] );*/
																					listOfSelectedObjects += localStorage[localStorage.key(i)] + "<br>";
																				}
																				if (listOfSelectedObjects !== "<br>") {
																					document.getElementById("basket__container--update").innerHTML = listOfSelectedObjects;
																				} else {
																					document.getElementById("basket__container--update").innerHTML = "None Selected!!!";
																				}
																			});

} else {
    alert("Sorry! no localStorage support!");
}

