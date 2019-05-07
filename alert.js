window.onscroll=()=>{
const navbar=document.querySelector('header')
if (window.pageYOffset !== 0){navbar.style.boxShadow = '0 0 10px black';}
else {navbar.style.boxShadow = '';}}


$( ".skill" ).click(function() {
  $( ".skill" ).animate({ "left": "+=50px" }, "fast" );
});



/*
window.onscroll=()=>{
if (window.pageYOffset !== 0){ 
$( ".photo" ).animate({ "top": "+=50px" }, "fast" );};};
*/


document.addEventListener('click',function(e){
	if(e.target.className.indexOf('slide')>1){
		
		event.preventDefault();
        const id = $(e.target).attr('href'),
		      top  = $(id).offset().top;
		
		
		$('body,html').animate({scrollTop: top}, 1000);
	};
});
