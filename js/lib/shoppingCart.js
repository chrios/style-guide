if (typeof(Storage) !== "undefined") {

	/*from http://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */
	/*allows arrays to be stored in localstorage as JSON */

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

	/* each event listener calls addItemToBasket() when button is click and passes the button ID to addItemToBasket() */

	document.getElementById("listen__colors").addEventListener("click",  	function(){	
	    																		/*console.log(idArray[0]);*/
																				localStorage.setObj(0, idArray[0]);
																			});

	document.getElementById("listen__headings").addEventListener("click", 	function(){	
	    																		/*console.log(idArray[1]);*/
																				localStorage.setObj(1, idArray[1]);
																			});

	document.getElementById("listen__paragraph").addEventListener("click", 	function(){	
	    																		/*console.log(idArray[2]);*/
																				localStorage.setObj(2, idArray[2]);
																			});

	document.getElementById("listen__list").addEventListener("click", 		function(){	
	    																		/*console.log(idArray[3]);*/
																				localStorage.setObj(3, idArray[3]);
																			});

	document.getElementById("listen__form").addEventListener("click",  		function(){	
	    																		/*console.log(idArray[4]);*/
																				localStorage.setObj(4, idArray[4]);
	    																	});

	document.getElementById("listen__table").addEventListener("click",  	function(){	
	    																		/*console.log(idArray[5]);*/
																				localStorage.setObj(5, idArray[5]);
																			});
	

	document.getElementById("basket__send").addEventListener("click", 		function(){
																				  /*here insted of console.log you would send the html + css of the element to the customer email address using php perhaps*/
																				for (var i = 0; i < localStorage.length; i++) 
																					console.log( localStorage.key(i) +" has value " + localStorage[localStorage.key(i)] );
																					alert("localStorage.key(i) +" has value " + localStorage[localStorage.key(i)] ");

																			});

} else {
    alert("Sorry! no localStorage support!");
}

