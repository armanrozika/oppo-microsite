$('.main__slider').slick({
    dots: true,
    autoplay: true
});

//change ads phb cource
let adsPhb = document.querySelector('#phb')
function changeSrcPhb(){
	if(screen.width < 769){
		adsPhb.src = 'images/320x50.jpg'
	}
}

changeSrcPhb()
