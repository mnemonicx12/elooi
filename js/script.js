const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (window.scrollY > 90){
        navbar.classList.replace('bg-transparent', 'nav-color')
    } else if (this.window.scrollY<=0){
        navbar.classList.replace('nav-color', 'bg-transparent')
    }
})

var audio = document.getElementById('background_music');
audio.play();
let isPlaying = true;
function handleMusic() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}
	/* Music */
	$('.musik-icon').on('click',function(){
		$('.gla_music_icon_cont').fadeToggle();	
	}); 