	$(document).ready(function(){
		
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});

 new Mmenu(document.querySelector("#menu"));

            document.addEventListener("click", function (evnt) {
                var anchor = evnt.target.closest('a[href="#/"]');
                if (anchor) {
                 alert("Thank you for clicking, but that's a demo link.");
                    evnt.preventDefault();
                }
            });	
});