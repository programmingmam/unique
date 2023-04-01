 // swiper    
var mySwiper = new Swiper('.swiper-container', {
  effect: '',
  loop: false,
  speed: 1000,
  slidesPerView: 1,
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev'
  },
  pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: 'true'
  },

 

});


 

// horizantal hover img
(function(){
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();
// horizantal hover img-------------------------------------------




 


  
  setTimeout(function(){
	$('.loader_bg').fadeToggle();
}, 1500);




 