$('a[href*=\\#]').on('click', function(event){ 	//This wraps all <a href=#anyfoo></a> elements in jQuery object
												//and when user click, performs the function:

    event.preventDefault();						//Prevents the browser from scrolling normally to the jumplink target


    $('html,body').animate({					//Wraps html body elements in jQuery object and
    											//animates the following function:


    	scrollTop:$(this.hash).offset().top 	//  scrolls the the offset of element from top of view

    }, 800);		//conttrols speed of animation currently 800

});