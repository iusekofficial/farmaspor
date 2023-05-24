/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * SmoothScroll
*/

smoothScroll.init();

/*
 * Coundown Timer
*/

$('document').ready(function () {
    var start = Math.floor((new Date(2023, 4, 10, 12, 0)).getTime() / 1000);
    var end = Math.floor((new Date(2023, 5, 3, 9, 30, 0)).getTime() / 1000);
    var now = Math.floor((new Date).getTime() / 1000);
    $('.countdown').final_countdown({
        'start': start,
        'end': end,
        'now': now
    });
});

/*
 * Page Up Button
*/

let mybutton = document.getElementById("pageUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}